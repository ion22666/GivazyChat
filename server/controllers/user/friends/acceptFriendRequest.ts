import { Handler } from "express";
import { io } from "../../../ws-server";
import { Chat } from "../../../models/chatModel";
import { User } from "../../../models/userModel";

async function chatCreator(users: [global.User, global.User]): Promise<global.Chat> {
    const participants = users.map(u => ({
        participantId: u.id,
        lastReadTimestamp: 0,
    }));
    return await Chat.create({ participants });
}
export type AcceptFriendRequestApiResponse = global.ApiResponse<{
    friendData: global.FriendData;
    chatData: global.Chat;
}>;

export const acceptFriendRequest: Handler = async (req, res) => {
    try {
        const userId: string = req.query.userId.toString();
        // make sure the user is in the friend requests list
        if (!req.user.receivedFriendRequests.map(e => e.userId.toString()).includes(userId)) throw new Error(userId + " is not in your Received Friend Requests List");

        const theOtherUser = await User.findById(userId);

        const newChat = await chatCreator([theOtherUser, req.user]);

        await theOtherUser.updateOne(
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

        await (req.user as typeof theOtherUser).updateOne(
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
        const chatData: any = { id: newChat._id, participants: newChat.participants, messages: newChat.messages };
        const WsResponse: AcceptFriendRequestApiResponse = {
            data: {
                friendData: req.user.friendData({ chatId: newChat.id }),
                chatData,
            },
        };

        io.to(userId).emit("friend request accepted", WsResponse);
        io.to(userId).socketsJoin(newChat.id);
        io.to(req.user.id).socketsJoin(newChat.id);

        return res.json({
            data: {
                friendData: theOtherUser.friendData({ chatId: newChat.id }),
                chatData,
            },
        } as AcceptFriendRequestApiResponse);
    } catch (e) {
        console.log(e);
        return res.json({ error: e });
    }
};
