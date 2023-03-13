import { Handler } from "express";
import { User } from "../../models/userModel";

export const sendFriendRequest: Handler = async (req, res) => {
    try {
        const userId: string = req.query.userId.toString();

        // make sure the user is not already a friend
        if (req.user.friends.map(e => e.friendId.toString()).includes(userId)) throw new Error(userId + " is already your friend");
        // make sure the user is not already in the friends requests list
        if (req.user.sentFriendRequests.map(e => e.userId.toString()).includes(userId)) throw new Error(userId + " is already your Friend Requests List");

        const user = await User.findById(userId);
        if (!user) throw new Error(userId + " doesn't exist");

        await User.findByIdAndUpdate(userId, {
            $push: {
                receivedFriendRequests: {
                    userId: req.user._id,
                    receivedAt: Date.now(),
                },
            },
        });
        const newUserData = await User.findByIdAndUpdate(
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
        res.json({ data: newUserData.sentFriendRequests });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: e });
    }
};
