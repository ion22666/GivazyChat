import dotenv from "dotenv";
dotenv.config();

import { Handler } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user";

export const auth_middleware: Handler = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) throw new Error("Auth token missing on" + req.path);

        let payload: global.JWT = ((e: string | jwt.JwtPayload) => (typeof e === "string" ? JSON.parse(e) : e)).call(
            null,
            jwt.verify(token, process.env.JWT_PRIVETE_KEY || "givazy", { algorithms: ["HS256"] })
        ) as global.JWT;

        if (!payload.sub) throw new Error("Invalid token");

        const user = await User.findOne({ _id: payload.sub });
        if (!user) throw new Error("The email from the JWT provided is not associeated to any user");

        req.user = user;
        return next();
    } catch (e) {
        if (process.env.NODE_ENV !== "production") console.log(e);
        if (process.env.API_ONLY) return res.status(401).json({ error: e });
        return res.redirect("/login?errors=" + encodeURIComponent(e));
    }
};
