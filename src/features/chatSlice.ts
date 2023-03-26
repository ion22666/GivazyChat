import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { StorageState } from "../store";

const initialState: StorageState["chatSlice"] = {
    activeChatId: undefined,
    chats: [],
};
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
            chat.messages.push(message);
        },
        forceReRender: (state, action: PayloadAction<global.Message>) => {
            state = state;
        },
    },
});

export const useActiveChat = () => {
    return useSelector<StorageState, global.Chat>(({ chatSlice }) => {
        return chatSlice.chats.find(c => c.id === chatSlice.activeChatId) || chatSlice.chats[0];
    });
};


export const useActiveChatId = () => {
    return useSelector<StorageState, string>(({ chatSlice }) => chatSlice.activeChatId);
};

export const useAvailableChats = () => {
    return useSelector<StorageState, string[]>(({ chatSlice }) => chatSlice.chats.map(e => e.id || e._id));
};
