import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

import mongoose from "../database/mongodb";
import { Chat } from "./chat";

// intrebatil pe giovanni ce se intampla aici :(
const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, sparse: true },
    username: { type: String },
    password: { type: String },
    picture: { type: String },
    friends: [{ friendId: mongoose.Schema.Types.ObjectId, chatId: mongoose.Schema.Types.ObjectId }],
    oauth: {
        google: {
            id: { type: String },
            email: { type: String, unique: true, sparse: true },
            verified_email: { type: String },
            name: { type: String },
            given_name: { type: String },
            family_name: { type: String },
            picture: { type: String },
            locale: { type: String },
        },
        facebook: {},
    },
});

UserSchema.methods.createJWT = function (this: global.User & mongoose.Document): string {
    return jwt.sign({ sub: this._id } as global.JWT, process.env.JWT_PRIVETE_KEY || "givazy", { algorithm: "HS256" });
};
UserSchema.methods.getChatsIds = async function (this: global.User & mongoose.Document): Promise<string[]> {
    return (await Chat.find({ participants: this._id }, { _id: 1 })).map(e => e._id.toString());
};

export const User = (mongoose.models.User || mongoose.model("User", UserSchema)) as mongoose.Model<global.User, mongoose.Document>;
