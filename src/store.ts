import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { chatSlice } from "./features/chatSlice";
import { currentUserSlice } from "./features/currentUserSlice";
import { friendRequestsSlice } from "./features/friendRequestsSlice";
import { friendsSlice } from "./features/friendsSlice";
import { searchSlice } from "./features/searchSlice";

export type StorageState = {
    currentUser: {
        data: global.CurrentUser | undefined;
    };
    friendsSlice: {
        friends: global.FriendData[];
        onlineFriends: string[];
    };
    friendRequests: {
        sent: global.sentFriendRequests[];
        received: global.receivedFriendRequests[];
    };
    chatSlice: {
        activeChatId: string | undefined;
        chats: global.Chat[];
    };
    searchSlice: {
        searchViewInput: string;
    };
};

export const store = configureStore({
    reducer: {
        currentUser: currentUserSlice.reducer,
        chatSlice: chatSlice.reducer,
        friendsSlice: friendsSlice.reducer,
        friendRequests: friendRequestsSlice.reducer,
        search: searchSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(store => next => action => {
            const result = next(action);
            console.log(store.getState());
            return result;
        }),
});
export type AppDispatch = typeof store.dispatch;
export const useMyDispatch = () => useDispatch<AppDispatch>();
export type StoreState = ReturnType<(typeof store)["getState"]>;
