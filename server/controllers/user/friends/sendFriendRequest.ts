import { Handler } from "express";
import { User } from "../../../models/userModel";
import { io } from "../../../ws-server";

export const sendFriendRequest: Handler = async (req, res) => {
    try {
        const userId: string = req.query.userId.toString();

        // make sure the user is not already a friend
        if (req.user.friends.map(e => e.friendId.toString()).includes(userId)) throw new Error(userId + " is already your friend");
        // make sure the user is not already in the friends requests list
        if (req.user.sentFriendRequests.map(e => e.userId.toString()).includes(userId)) throw new Error(userId + " is already your Friend Requests List");

        const user = await User.findById(userId);
        if (!user) throw new Error(userId + " doesn't exist");

        const theOtherUser = await User.findByIdAndUpdate(
            userId,
            {
                $push: {
                    receivedFriendRequests: {
                        userId: req.user._id,
                        receivedAt: Date.now(),
                    },
                },
            },
            { new: true }
        );
        const currentUser = await User.findByIdAndUpdate(
            req.user._id,
            {
                $push: {
                    sentFriendRequests: {
                        userId: userId,
                        sentdAt: Date.now(),
                    },
                },
            },
            { new: true }
        );

        io.to(userId).emit("friend request received", {
            friendData: currentUser.userData(),
            receivedAt: currentUser.sentFriendRequests.find(e => e.userId.toString() === theOtherUser.id).sentAt,
        });
        const request: global.sentFriendRequests = {
            friendData: theOtherUser.userData(),
            sendAt: currentUser.sentFriendRequests.find(e => e.userId.toString() === theOtherUser.id).sentAt,
        };
        return res.json({ data: request });
    } catch (e) {
        console.log(e);
    }
};
