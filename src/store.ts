import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { chatSlice } from "./features/chatSlice";
import { currentUserSlice } from "./features/currentUserSlice";
import { friendRequestsSlice } from "./features/friendRequestsSlice";
import { friendsSlice } from "./features/friendsSlice";
import { searchSlice } from "./features/searchSlice";
import { createLogger } from "redux-logger";
import { userProfileSlice } from "./features/userProfileSlice";

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
        userProfile: userProfileSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(createLogger({ predicate: (getState, action) => !action.type.includes("friends/setOnlineFriends") })),
});
export type AppDispatch = typeof store.dispatch;
export const useMyDispatch = () => useDispatch<AppDispatch>();
export type StoreState = ReturnType<(typeof store)["getState"]>;
