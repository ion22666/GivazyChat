import dotenv from "dotenv";
dotenv.config();

import { Handler } from "express";
import { User } from "../../../models/userModel";

export const getSentFriendRequests: Handler = async (req, res) => {
    try {
        const usersData = await User.find({ _id: { $in: req.user.sentFriendRequests.map(e => e.userId) } });
        const friendRequests = usersData.map<global.sentFriendRequests>(u => {
            return {
                friendData: u.userData(),
                sendAt: req.user.sentFriendRequests.find(e => e.userId.toString() === u.id).sentAt,
            };
        });
        res.json({ data: friendRequests });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e });
    }
};
