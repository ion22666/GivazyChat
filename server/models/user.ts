import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

import mongoose from "../database/mongodb";

// intrebatil pe giovanni ce se intampla aici :(
const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, sparse: true },
    username: { type: String },
    password: { type: String },
    picture: { type: String },
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

export const User = (mongoose.models.User || mongoose.model("User", UserSchema)) as mongoose.Model<global.User, mongoose.Document>;
