import { Handler } from "express";
import { User } from "../../../models/userModel";
import { io } from "../../../ws-server";

export const cancelFriendRequest: Handler = async (req, res) => {
    try {
        const userId: string = req.query.userId.toString();

        // make sure the user is in the friends requests list
        if (!req.user.sentFriendRequests.map(e => e.userId.toString()).includes(userId)) throw new Error(userId + " is not in your Friend Requests List");

        const user = await User.findById(userId);
        if (!user) throw new Error(userId + " doesn't exist");

        const theOtherUser = await User.findByIdAndUpdate(
            userId,
            {
                $pull: {
                    receivedFriendRequests: { userId: req.user._id },
                },
            },
            { new: true }
        );
        const currentUser = await User.findByIdAndUpdate(
            req.user._id,
            {
                $pull: {
                    sentFriendRequests: { userId: userId },
                },
            },
            { new: true }
        );
        io.to(userId).emit("friend request canceled", theOtherUser);

        const request: global.sentFriendRequests = {
            friendData: theOtherUser.userData(),
            sendAt: req.user.sentFriendRequests.find(e => e.userId.toString() === theOtherUser.id).sentAt,
        };
        return res.json({ data: request });
    } catch (e) {
        console.log(e);
    }
};
