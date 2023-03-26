import { Handler } from "express";
import { io } from "../../../ws-server";
import { Chat } from "../../../models/chatModel";
import { User } from "../../../models/userModel";

export const acceptFriendRequest: Handler = async (req, res) => {
    try {
        const userId: string = req.query.userId.toString();
        await req.user.updateSelf();
        // make sure the user is in the friend requests list
        if (!req.user.receivedFriendRequests.map(e => e.userId.toString()).includes(userId)) throw new Error(userId + " is not in your Received Friend Requests List");

        const newChat = await Chat.create({ participants: [userId, req.user._id] });

        const requestSenderData = await User.findByIdAndUpdate(
            userId,
            {
                $pull: {
                    sentFriendRequests: { userId: req.user._id },
                },
                $push: {
                    friends: { friendId: req.user._id, chatId: newChat._id },
                },
            },
            { new: true }
        );
        const requestAccepterData = await User.findByIdAndUpdate(
            req.user._id,
            {
                $pull: {
                    receivedFriendRequests: { userId: userId },
                },
                $push: {
                    friends: { friendId: userId, chatId: newChat._id },
                },
            },
            { new: true }
        );

        io.to(userId).emit("friend request accepted", requestAccepterData);
        return res.json({ data: requestSenderData.friendData({ currentUserId: req.user.id }) });
    } catch (e) {
        console.log(e);
    }
};
