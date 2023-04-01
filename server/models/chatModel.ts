import mongoose from "../database/mongodb";

const ChatSchema = new mongoose.Schema<global.Chat>({
    participants: Array({
        participantId: mongoose.Schema.Types.ObjectId,
        lastReadTimestamp: { type: Number, default: 0 },
    }),
    messages: [
        {
            sendAt: { type: Number, default: () => Date.now() },
            content: String,
            sender: mongoose.Schema.Types.ObjectId,
        },
    ],
});
ChatSchema.methods.pushMessage = async function (this: global.Message & mongoose.Document, message: global.PartialMessage): Promise<void> {
    await this.update({
        $push: {
            messages: {
                $each: [message],
                $position: 0,
            },
        },
    });
};
export const Chat = (mongoose.models.Chat || mongoose.model("Chat", ChatSchema)) as mongoose.Model<global.Chat, mongoose.Document>;
