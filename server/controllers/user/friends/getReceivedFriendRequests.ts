import dotenv from "dotenv";
dotenv.config();

import { Handler } from "express";
import { User } from "../../../models/userModel";

export const getReceivedFriendRequests: Handler = async (req, res) => {
    try {
        const usersData = await User.find({ _id: { $in: req.user.receivedFriendRequests.map(e => e.userId) } });
        const friendRequests = usersData.map<global.receivedFriendRequests>(u => {
            return {
                friendData: u.userData(),
                receivedAt: req.user.receivedFriendRequests.find(e => e.userId.toString() === u.id).receivedAt,
            };
        });
        res.json({ data: friendRequests });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e });
    }
};
