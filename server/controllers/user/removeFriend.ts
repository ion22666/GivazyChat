import dotenv from "dotenv";
dotenv.config();

import { Handler } from "express";
import { User } from "../../models/userModel";

export const removeFriend: Handler = async (req, res) => {
    try {
        const friendId: string = req.body.friendId;
        if (!req.user.pedingFriends.map(e => e.friendId).includes(friendId)) throw new Error(friendId + " is not in your friends list");
        await User.updateOne({ _id: req.user._id }, {});
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};
