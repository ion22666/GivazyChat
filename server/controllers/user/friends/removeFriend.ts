import { Handler } from "express";
import { io } from "../../../ws-server";
import { User } from "../../../models/userModel";

export type RemoveFriendApiResponse = global.ApiResponse<global.FriendData>;

export const removeFriend: Handler = async (req, res) => {
    try {
        const friendId = req.query.friendId.toString();

        if (!req.user.friends.map(e => e.friendId.toString()).includes(friendId)) throw new Error(friendId + " is not in your friends list");

        const receiverData = await User.findByIdAndUpdate(friendId, { $pull: { friends: { friendId: req.user.id } } });
        const currentUser = await User.findByIdAndUpdate(req.user._id, { $pull: { friends: { friendId: friendId } } });

        const wsResponse: RemoveFriendApiResponse = { data: currentUser.friendData({ friendId: receiverData.id }) };
        io.to(friendId).emit("friend removed", wsResponse);
        res.json({ data: receiverData.friendData({ friendId: currentUser.id }) } as RemoveFriendApiResponse);
    } catch (e) {
        console.log(e);
    }
};
