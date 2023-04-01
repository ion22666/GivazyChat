import { Chat } from "../models/chatModel";
import { WsHandler } from "../ws-server";

export const updateLastReadMessageTimeStamp: WsHandler = (io, socket) => {
    return async (chatId: string, participantId: string) => {
        participantId = socket.user.id;
        const response = await Chat.updateOne(
            { _id: chatId, "participants.participantId": participantId },
            {
                $set: { "participants.$.lastReadTimestamp": Date.now() },
            },
        );
    };
};
