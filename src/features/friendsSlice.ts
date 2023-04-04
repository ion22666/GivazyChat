import { createAsyncThunk, createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { StorageState } from "../store";
import { acceptFriendRequest } from "./friendRequestsSlice";

const initialState: StorageState["friendsSlice"] = {
    friends: [],
    onlineFriends: [],
};

export const removeFriend = createAsyncThunk<string, string>("friends/removeFriend", async (friendId, { dispatch }) => {
    const response = await window.request("/api/user/friends?friendId=" + friendId, { method: "DELETE" });
    if (!response.ok) throw new Error("nu sa sters friendul");
    return friendId;
});

export const friendsSlice = createSlice({
    name: "friends",
    initialState,
    reducers: {
        setFriends: (state, action: PayloadAction<global.FriendData[]>) => {
            state.friends = action.payload;
        },
        addFriend: (state, action: PayloadAction<global.FriendData>) => {
            !state.friends.find(e => e.id === action.payload.id) && state.friends.unshift(action.payload);
        },
        removeFriend: (state, action: PayloadAction<string>) => {
            state.friends = state.friends.filter(f => f.id !== action.payload);
        },
        setOnlineFriends: (state, action: PayloadAction<string[]>) => {
            state.onlineFriends = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(removeFriend.fulfilled, (state, { payload }) => {
                state.friends = state.friends.filter(f => f.id !== payload);
            })
            .addCase(acceptFriendRequest.fulfilled, (state, { payload }) => {
                state.friends.unshift(payload.friendData);
            });
    },
});

export const useFriends = () => {
    return useSelector<StorageState, global.FriendData[]>(({ friendsSlice }) => friendsSlice.friends);
};

export const useOnlineFriendsIds = () => {
    return useSelector<StorageState, string[]>((state: StorageState) => state.friendsSlice.onlineFriends);
};

const onlineFriendsSelector = createSelector(
    [(state: StorageState) => state.friendsSlice.friends, (state: StorageState) => state.friendsSlice.onlineFriends],
    (friends, onlineFriends) => friends.filter(f => onlineFriends.includes(f.id))
);
export const useOnlineFriends = () => useSelector<StorageState, global.FriendData[]>(onlineFriendsSelector);
