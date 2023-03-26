import { Handler } from "express";
import { Chat } from "../../models/chatModel";

export const get_chats: Handler = async (req, res) => {
    try {
        const chats = await Chat.find({ _id: { $in: req.user.friends.map(e => e.chatId) } });
        res.json({ data: chats.map(c => ({ id: c._id, participants: c.participants, messages: c.messages })) });
    } catch (e) {
        res.status(500).json({ error: e });
    }
};
