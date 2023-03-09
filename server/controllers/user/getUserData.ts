import dotenv from "dotenv";
dotenv.config();

import { Handler } from "express";

export const get_user_data: Handler = async (req, res) => {
    if (!req.user.picture) req.user.picture = req.user.oauth?.google?.picture || "img/blank_profile.png";
    res.json({ data: req.user });
};
