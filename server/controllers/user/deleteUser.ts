import dotenv from "dotenv";
dotenv.config();

import { Handler } from "express";
import { User } from "../../models/userModel";

export const delete_user: Handler = async (req, res) => {
    try {
        await User.deleteOne(req.user._id);
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};
