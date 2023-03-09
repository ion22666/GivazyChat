export const messageFactory = function (partial_message: global.PartialMessage, sender: global.User): global.Message {
    return {
        sender: sender._id,
        sendAt: Date.now(),
        content: partial_message.content,
    };
};
