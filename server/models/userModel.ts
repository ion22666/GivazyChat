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
    pedingFriends: {
        type: Array({
            friendId: mongoose.Schema.Types.ObjectId,
            requestedAt: Number,
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

UserSchema.methods.createJWT = function (this: global.User & mongoose.Document): string {
    return jwt.sign({ sub: this._id } as global.JWT, process.env.JWT_PRIVETE_KEY || "givazy", { algorithm: "HS256" });
};
UserSchema.methods.getChatsIds = async function (this: global.User & mongoose.Document): Promise<string[]> {
    return (await Chat.find({ participants: this._id }, { _id: 1 })).map(e => e._id.toString());
};

export const User = (mongoose.models.User || mongoose.model("User", UserSchema)) as mongoose.Model<global.User, mongoose.Document>;
