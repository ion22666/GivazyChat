import { createAsyncThunk, createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { socket } from "../../pages";
import { SendMessageApiResponse } from "../../server/controllers/chat/sendMessage";
import { StorageState, store, StoreState } from "../store";
import { acceptFriendRequest } from "./friendRequestsSlice";

type State = {
    activeChatId: string;
    chats: global.Chat[];
};

const initialState: State = {
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
    if (!partialMessage || !chatId) return;
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
            !state.chats.find(e => e.id === action.payload.id) && state.chats.push(action.payload);
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

const activeChatFriendSelector = createSelector(activeChatSelector, activeChat => {
    if (!activeChat) return;
    const currentUserId = (store.getState() as StoreState).currentUser.data.id;
    const friends = (store.getState() as StoreState).friendsSlice.friends;
    const friendId = activeChat.participants.find(e => e.participantId !== currentUserId).participantId;
    return friends.find(e => e.id === friendId);
});

export const useActiveChat = () => useSelector<StoreState, global.Chat>(activeChatSelector);
export const useActiveChatFriend = () => useSelector<StoreState, global.FriendData>(activeChatFriendSelector);

export const useActiveChatId = () => {
    return useSelector<StorageState, string>(({ chatSlice }) => chatSlice.activeChatId);
};

export const useAvailableChats = () => {
    return useSelector<StorageState, string[]>(({ chatSlice }) => chatSlice.chats.map(e => e.id || e._id));
};

const unreadMessagesSelector = createSelector([(state: StorageState) => state.chatSlice.chats, (state: StorageState) => state.currentUser.data.id], (chats, currentUserId) => {
    const result: {
        chatId: string;
        unredMessages: {
            participantId: string;
            count: number;
        }[];
    }[] = [];
    if (!currentUserId) return result;
    chats.forEach(chat => {
        const element: (typeof result)[0] = {
            chatId: chat.id,
            unredMessages: [],
        };
        chat.participants.forEach(({ participantId, lastReadTimestamp }) => {
            let counter = 0;
            while (chat.messages.length > counter && chat.messages[counter].sendAt > lastReadTimestamp) {
                counter++;
            }
            element.unredMessages.push({ participantId, count: counter });
        });
        result.push(element);
    });

    return result;
});
export const useUnreadMessages = () => useSelector(unreadMessagesSelector);

const totalUnredMessagesForCurrentUserSelector = createSelector(unreadMessagesSelector, ureadMessages => {
    const currentUserId = store.getState().currentUser.data.id;
    let counter = 0;
    ureadMessages.map(e => {
        e.unredMessages.map(({ participantId, count }) => {
            if (participantId === currentUserId) counter += count;
        });
    });
    return counter;
});

export const useTotalUnredMessagesForCurrentUser = () => useSelector(totalUnredMessagesForCurrentUserSelector);

const unredMessagesForChatSelector = createSelector(
    unreadMessagesSelector,
    (state: StoreState, chatId: string) => chatId,
    (ureadMessages, chatId) => {
        const currentUserId = store.getState().currentUser.data.id;
        return ureadMessages.find(e => e.chatId === chatId)?.unredMessages.find(f => f.participantId === currentUserId)?.count;
    }
);

export const useUnredMessagesForChat = (chatId: string) => useSelector(() => unredMessagesForChatSelector(store.getState() as any, chatId));
