import { Handler } from "express";
import { User } from "../../../models/userModel";
import { io } from "../../../ws-server";

export type CancelFriendRequestApiResponse = global.ApiResponse<global.receivedFriendRequests | global.sentFriendRequests>;

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

        const requestTimestamp = req.user.sentFriendRequests.find(e => e.userId.toString() === theOtherUser.id).sentAt;

        const receivedRequest: CancelFriendRequestApiResponse = {
            data: {
                friendData: theOtherUser.userData(),
                receivedAt: requestTimestamp,
            },
        };

        io.to(userId).emit("friend request canceled", receivedRequest);

        const sentRequest: global.sentFriendRequests = {
            friendData: theOtherUser.userData(),
            sendAt: requestTimestamp,
        };
        return res.json({ data: sentRequest } as CancelFriendRequestApiResponse);
    } catch (e) {
        console.log(e);
    }
};
