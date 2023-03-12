import dotenv from "dotenv";
dotenv.config();

import { Handler } from "express";
import { User } from "../../models/userModel";

export const removeFriend: Handler = async (req, res) => {
    try {
        const friendId: string = req.body.friendId;
        if (!req.user.friends.map(e => e.friendId.toString()).includes(friendId)) throw new Error(friendId + " is not in your friends list");
        const response = await User.updateOne({ _id: req.user._id }, { $pull: { friends: { friendId: friendId } } });
        if (response.modifiedCount === 0) throw new Error("0 documents where updated");
        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e });
    }
};
