import mongoose from "../database/mongodb";

const ChatSchema = new mongoose.Schema({
    participants: [mongoose.Schema.Types.ObjectId],
    messages: [
        {
            sendAt: Number,
            content: String,
        },
    ],
});

export const Chat = (mongoose.models.Chat || mongoose.model("Chat", ChatSchema)) as mongoose.Model<global.Chat, mongoose.Document>;
