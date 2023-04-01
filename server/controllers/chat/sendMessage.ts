import { Handler } from "express";
import { io } from "../../ws-server";

export type SendMessageApiResponse = global.ApiResponse<global.Message>;

export const sendMessage: Handler = async (req, res) => {
    try {
        const { chatId } = req.params;
        const { partialMessage } = req.body;
        if (!(chatId || partialMessage)) throw new Error("chatId or partialMessage missing");

        const message = await req.user.sendMessage(chatId, partialMessage);

        // push event to all participants in that room, except the sender
        io.except(req.user.id).to(chatId).emit("push message", message, chatId);
        return res.json({ data: message });
    } catch (error) {
        console.log(error);
        return res.json({ error });
    }
};
