import { Handler } from "express";
import { User } from "../../models/userModel";

export const cancelFriendRequest: Handler = async (req, res) => {
    try {
        const userId: string = req.query.userId.toString();

        // make sure the user is in the friends requests list
        if (!req.user.sentFriendRequests.map(e => e.userId.toString()).includes(userId)) throw new Error(userId + " is not in your Friend Requests List");

        const user = await User.findById(userId);
        if (!user) throw new Error(userId + " doesn't exist");

        await User.findByIdAndUpdate(userId, {
            $pull: {
                receivedFriendRequests: { userId: req.user._id },
            },
        });
        const newUserData = await User.findByIdAndUpdate(
            req.user._id,
            {
                $pull: {
                    sentFriendRequests: { userId: userId },
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
