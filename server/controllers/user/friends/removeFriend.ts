import { Handler } from "express";
import { io } from "../../../ws-server";
import { User } from "../../../models/userModel";

export const removeFriend: Handler = async (req, res) => {
    try {
        const friendId = req.query.friendId.toString();

        if (!req.user.friends.map(e => e.friendId.toString()).includes(friendId)) throw new Error(friendId + " is not in your friends list");

        const receiverData = await User.findByIdAndUpdate(friendId, { $pull: { friends: { friendId: req.user.id } } }, { new: true });
        const currentUser = await User.findByIdAndUpdate(req.user._id, { $pull: { friends: { friendId: friendId } } }, { new: true });

        io.to(friendId).emit("friend removed", currentUser);
        res.json({ data: receiverData });
    } catch (e) {
        console.log(e);
    }
};
