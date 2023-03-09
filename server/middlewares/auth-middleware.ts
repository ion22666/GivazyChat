import dotenv from "dotenv";
dotenv.config();

import { Handler } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel";
import getUserFromToken from "../utils/getUserFromToken";

export const auth_middleware: Handler = async (req, res, next) => {
    try {
        req.user = await getUserFromToken(req.headers.authorization?.split(" ")[1]);
        return next();
    } catch (e) {
        // if (process.env.NODE_ENV !== "production") console.log(e);
        if (process.env.API_ONLY) return res.status(401).json({ error: e });
        return res.redirect("/login?errors=" + encodeURIComponent(e));
    }
};
