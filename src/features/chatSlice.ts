import { createAsyncThunk, createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { socket } from "../../pages";
import { SendMessageApiResponse } from "../../server/controllers/chat/sendMessage";
import { StorageState, store, StoreState } from "../store";
import { acceptFriendRequest } from "./friendRequestsSlice";

const initialState: StorageState["chatSlice"] = {
    activeChatId: undefined,
    chats: [],
};

export const updateLastReadMessageTimeStamp = createAsyncThunk(
    "chat/updateLastReadMessageTimeStamp",
    async ({ chatId, participantId }: { chatId: string; participantId: string }, { getState }) => {
        socket.emit("update last read message timestamp", chatId, participantId);
        return { chatId, participantId };
    }
);

export const sendMessage = createAsyncThunk("chat/sendMessage", async ({ partialMessage, chatId }: { partialMessage: global.PartialMessage; chatId: string }, { getState }) => {
    return await window
        .requestJson(`/api/chat/${chatId}/messages`, {
            method: "POST",
            body: JSON.stringify({ partialMessage, chatId }),
        })
        .then(r => r.json() as SendMessageApiResponse)
        .then(r => ({ message: r.data, chatId }));
});

export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setActiveChatId: (state, action: PayloadAction<string>) => {
            state.activeChatId = action.payload;
        },
        setChats: (state, action: PayloadAction<global.Chat[]>) => {
            state.chats = action.payload;
        },
        addChat: (state, action: PayloadAction<global.Chat>) => {
            state.chats.push(action.payload);
        },
        removeChat: (state, action: PayloadAction<global.Chat>) => {
            state.chats = state.chats.filter(c => c !== action.payload);
        },
        pushMessage: (state, action: PayloadAction<{ message: global.Message; chatId: string }>) => {
            const { message, chatId } = action.payload;
            const chat = state.chats.find(e => e.id === chatId);
            chat.messages.unshift(message);
        },
        forceReRender: (state, action: PayloadAction<global.Message>) => {
            state = state;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(acceptFriendRequest.fulfilled, (state, action) => {
                state.chats.push(action.payload.chatData);
            })
            .addCase(sendMessage.fulfilled, (state, { payload }) => {
                state.chats.find(e => e.id === payload.chatId).messages.unshift(payload.message);
            })
            .addCase(updateLastReadMessageTimeStamp.fulfilled, (state, { payload }) => {
                const { chatId, participantId } = payload;
                const chat = state.chats.find(c => c.id === chatId);
                const lastTimestamp = chat.messages[0] ? chat.messages[0].sendAt : Date.now();
                chat.participants.find(p => p.participantId === participantId).lastReadTimestamp = lastTimestamp;
            });
    },
});

const activeChatSelector = createSelector(
    (state: StoreState) => state.chatSlice,
    chatSlice => {
        const chat = chatSlice.chats.find(c => c.id === chatSlice.activeChatId) || chatSlice.chats[0];
        // console.log(chat.messages);
        // chat.messages.map((c, i, a) => a[a.length - i - 1]);
        // console.log(chat.messages);
        return chat;
    }
);

export const useActiveChat = () => useSelector<StoreState, global.Chat>(activeChatSelector);

export const useActiveChatId = () => {
    return useSelector<StorageState, string>(({ chatSlice }) => chatSlice.activeChatId);
};

export const useAvailableChats = () => {
    return useSelector<StorageState, string[]>(({ chatSlice }) => chatSlice.chats.map(e => e.id || e._id));
};

const ureadMessagesSelector = createSelector([(state: StorageState) => state.chatSlice.chats, (state: StorageState) => state.currentUser.data.id], (chats, currentUserId) => {
    if (!currentUserId) return 0;
    let totalCount = 0;
    chats.forEach(chat => {
        let counter = 0;
        const lastReadTimestamp = chat.participants.find(e => e.participantId === currentUserId).lastReadTimestamp;
        if (!lastReadTimestamp === undefined) return;
        while (chat.messages.length > counter && chat.messages[counter].sendAt > lastReadTimestamp) {
            counter++;
        }
        totalCount += counter;
    });

    return totalCount;
});
export const useUreadMessages = () => useSelector<any, number>(ureadMessagesSelector);

const unredMessagesCount = createSelector(activeChatSelector, (activeChat): number => {
    const currentUserId = store.getState().currentUser.data.id;
    const lastReadTimestamp = activeChat.participants.find(e => e.participantId === currentUserId).lastReadTimestamp;
    let counter = 0;
    while (activeChat.messages.length > counter && activeChat.messages[counter].sendAt > lastReadTimestamp) {
        counter++;
    }
    return counter;
});
export const useUnredMessagesCount = () => useSelector<any, number>(unredMessagesCount);
