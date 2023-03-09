import { Handler } from "express";
import { User } from "../../models/user";

export const get_friends: Handler = async (req, res) => {
    try {
        const users = await User.find({ _id: { $in: req.user.friends.map(f => f.friendId) } });
        users.forEach(user => {
            if(!user.picture)user.picture = user.oauth.google.picture || "img/blank_profile.png";
        });
        return res.json({ data: users });
    } catch (e) {
        res.status(500).json({ error: e });
    }
};
