import { Handler } from "express";
import { User } from "../../../models/userModel";

export const get_friends: Handler = async (req, res) => {
    try {
        const friends = await User.find({ _id: { $in: req.user.friends.map(f => f.friendId) } });
        return res.json({ data: friends.map(f => f.friendData({ friendId: req.user._id })) });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e });
    }
};
