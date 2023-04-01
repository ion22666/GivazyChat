import express from "express";
import { sendMessage } from "../controllers/chat/sendMessage";

export default express.Router().post("/:chatId/messages", sendMessage);
