import dotenv from "dotenv";
dotenv.config();

import { Handler } from "express";
import { User } from "../../models/userModel";

export const getUsersData: Handler = async (req, res) => {
    try {
        const usersIds = req.body.usersIds;
        const users = await User.find({ _id: { $in: usersIds } });
        users.forEach(user => {
            if (!user.picture) user.picture = user.oauth.google.picture || "img/blank_profile.png";
        });
        return res.json({ data: users });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e });
    }
};
