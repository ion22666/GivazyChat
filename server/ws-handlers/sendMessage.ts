import { Chat } from "../models/chatModel";
import { messageFactory } from "../utils/messageFactory";
import { WsHandler } from "../ws-server";

export const sendMessage: WsHandler = (io, socket) => {
    return async (partialMessage: global.PartialMessage, roomId: string) => {
        const chat = await Chat.findOne({ _id: roomId });

        // fulfil the message properties
        const message = messageFactory(partialMessage, socket.user);

        // save the message to the database
        await chat.pushMessage(message);

        // push event to all participants in that room, except the sender
        io.to(roomId).emit("push message", message, roomId);
    };
};
