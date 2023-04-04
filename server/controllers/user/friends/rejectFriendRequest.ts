import { Handler } from "express";
import { User } from "../../../models/userModel";
import { io } from "../../../ws-server";

export type RejectFriendRequestApiResponse = global.ApiResponse<global.sentFriendRequests | global.receivedFriendRequests>;

export const rejectFriendRequest: Handler = async (req, res) => {
    try {
        const userId: string = req.query.userId.toString();

        // make sure the user is in the friends requests list
        if (!req.user.receivedFriendRequests.map(e => e.userId.toString()).includes(userId)) throw new Error(userId + " is not in your Friend Requests List");

        const user = await User.findById(userId);
        if (!user) throw new Error(userId + " doesn't exist");

        const requestTimeStamp = req.user.receivedFriendRequests.find(e => e.userId.toString() === userId).receivedAt;

        const requestSenderData = await User.findByIdAndUpdate(
            userId,
            {
                $pull: {
                    sentFriendRequests: { userId: req.user._id },
                },
            },
            { new: true }
        );
        const rejecterData = await User.findByIdAndUpdate(
            req.user.id,
            {
                $pull: {
                    receivedFriendRequests: { userId: userId },
                },
            },
            { new: true }
        );

        const wsResponse: RejectFriendRequestApiResponse = {
            data: {
                sendAt: requestTimeStamp,
                friendData: rejecterData.userData(),
            },
        };

        io.to(userId).emit("friend request rejected", wsResponse);
        return res.json({
            data: {
                friendData: requestSenderData.userData(),
                receivedAt: requestTimeStamp,
            },
        } as RejectFriendRequestApiResponse);
    } catch (e) {
        console.log(e);
        return res.json({ error: e });
    }
};
