import mongoose from "../database/mongodb";

const ChatSchema = new mongoose.Schema({
    participants: [mongoose.Schema.Types.ObjectId],
    messages: [
        {
            sendAt: Number,
            content: String,
            sender: mongoose.Schema.Types.ObjectId,
        },
    ],
});
ChatSchema.methods.pushMessage = async function (this: global.Message & mongoose.Document, message: global.PartialMessage): Promise<void> {
    await this.update({ $push: { messages: message } });
};
export const Chat = (mongoose.models.Chat || mongoose.model("Chat", ChatSchema)) as mongoose.Model<global.Chat, mongoose.Document>;
