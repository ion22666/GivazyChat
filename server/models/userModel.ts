import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

import mongoose from "../database/mongodb";
import { Chat } from "./chatModel";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        sparse: true,
        default: null,
    },
    username: {
        type: String,
        default: null,
    },
    password: {
        type: String,
        default: null,
    },
    picture: {
        type: String,
        default: null,
    },
    friends: {
        type: Array({
            friendId: mongoose.Schema.Types.ObjectId,
            chatId: mongoose.Schema.Types.ObjectId,
        }),
        default: [],
    },
    receivedFriendRequests: {
        type: Array({
            userId: mongoose.Schema.Types.ObjectId,
            receivedAt: { type: Number, default: () => Date.now() },
            _id: false,
        }),
        default: [],
    },
    sentFriendRequests: {
        type: Array({
            userId: mongoose.Schema.Types.ObjectId,
            sentAt: { type: Number, default: () => Date.now() },
            _id: false,
        }),
        default: [],
    },
    oauth: {
        google: {
            type: {
                id: { type: String },
                email: { type: String, unique: true, sparse: true },
                verified_email: { type: String },
                name: { type: String },
                given_name: { type: String },
                family_name: { type: String },
                picture: { type: String },
                locale: { type: String },
            },
            default: null,
        },
        facebook: {
            type: {},
            default: null,
        },
    },
});

type UserDocument = global.User & mongoose.Document;

const createJWT: global.User["createJWT"] = function (this: UserDocument): string {
    return jwt.sign({ sub: this._id } as global.JWT, process.env.JWT_PRIVETE_KEY || "givazy", { algorithm: "HS256" });
};
const getChatsIds: global.User["getChatsIds"] = async function (this: UserDocument): Promise<string[]> {
    return (await Chat.find({ participants: this._id }, { _id: 1 })).map(e => e._id.toString());
};
const updateSelf: global.User["updateSelf"] = async function (this: UserDocument): Promise<void> {
    const updatedUser = await User.findById(this._id);
    for (const key in this) this[key] = updatedUser[key];
};
const userData: global.User["userData"] = function (this: UserDocument): global.UserData {
    return {
        id: this.id,
        email: this.email,
        username: this.username,
        picture: this.picture,
    };
};
const friendData: global.User["friendData"] = function (this: UserDocument, { currentUserId, chatId }): global.FriendData {
    chatId = chatId ? chatId : this.friends.find(f => f.friendId.toString() === currentUserId.toString()).chatId;
    return {
        ...this.userData(),
        chatId,
    };
};
const currentUser: global.User["currentUser"] = function (this: UserDocument): global.CurrentUser {
    return {
        ...this.userData(),
        oauth: this.oauth,
    };
};

UserSchema.methods = {
    createJWT,
    getChatsIds,
    updateSelf,
    userData,
    friendData,
    currentUser,
};

export const User = (mongoose.models.User || mongoose.model("User", UserSchema)) as mongoose.Model<global.User, mongoose.Document>;

export const removeFriendStream = User.watch(
    [
        {
            $match: {
                operationType: "update",
                "updateDescription.updatedFields.receivedFriendRequests": { $exists: true },
            },
        },
        {
            $project: {
                updatedDocumentId: "$documentKey._id",
                addedFriends: {
                    $setDifference: ["$updateDescription.updatedFields.receivedFriendRequests", "$fullDocumentBeforeChange.receivedFriendRequests"],
                },
            },
        },
    ],
    { fullDocument: "updateLookup", fullDocumentBeforeChange: "required" }
);

removeFriendStream.on("change", change => {
    console.log(change);
});
