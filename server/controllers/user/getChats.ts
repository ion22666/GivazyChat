import { Handler } from "express";
import { Chat } from "../../models/chat";

export const get_chats: Handler = async (req, res) => {
    try {
        res.json({ data: await Chat.find({ participants: req.user._id }) });
    } catch (e) {
        res.status(500).json({ error: e });
    }
};
