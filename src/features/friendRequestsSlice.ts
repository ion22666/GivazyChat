import { createSelector, createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { StorageState } from "../store";

const initialState: StorageState["friendRequests"] = {
    sent: [],
    received: [],
};

export const sendFriendRequest = createAsyncThunk<global.sentFriendRequests, string>("friends/sendFriendRequest", async (userId, { dispatch }) => {
    const response = await window.request("/api/user/friends/requests/sent?userId=" + userId, { method: "PUT" });
    if (!response.ok) throw new Error("nu sa trimis requestul");
    return (await response.json()).data;
});

export const cancelFriendRequest = createAsyncThunk<global.sentFriendRequests, string>("friends/cancelFriendRequest", async (userId, { dispatch }) => {
    const response = await window.request("/api/user/friends/requests/sent?userId=" + userId, { method: "DELETE" });
    if (!response.ok) throw new Error("nu sa trimis requestul");
    return (await response.json()).data;
});

export const friendRequestsSlice = createSlice({
    name: "friendRequests",
    initialState,
    reducers: {
        setReceivedRequests: (state, action: PayloadAction<global.receivedFriendRequests[]>) => {
            state.received = action.payload;
        },
        setSentRequests: (state, action: PayloadAction<global.sentFriendRequests[]>) => {
            state.sent = action.payload;
        },
        addReceivedRequest: (state, action: PayloadAction<string>) => {
            state.received = state.received.filter(f => f.friendData.id !== action.payload);
        },
        removeReceivedRequest: (state, action: PayloadAction<global.receivedFriendRequests>) => {
            state.received = state.received.filter(f => f.friendData.id !== action.payload);
        },
        addSentRequest: (state, action: PayloadAction<global.sentFriendRequests>) => {
            state.sent.push(action.payload);
        },
        removeSentRequest: (state, action: PayloadAction<string>) => {
            state.sent = state.sent.filter(f => f.friendData.id !== action.payload);
        },
    },
    extraReducers: builder => {
        builder
            .addCase(sendFriendRequest.fulfilled, (state, { payload }) => {
                state.sent.push(payload);
            })
            .addCase(cancelFriendRequest.fulfilled, (state, { payload }) => {
                state.sent = state.sent.filter(e => e.friendData.id !== payload.friendData.id);
            });
    },
});

export const useReceivedFriendRequests = () => useSelector<any, global.receivedFriendRequests[]>((state: StorageState) => state.friendRequests.received);
export const useSentFriendRequests = () => useSelector<any, global.sentFriendRequests[]>((state: StorageState) => state.friendRequests.sent);
