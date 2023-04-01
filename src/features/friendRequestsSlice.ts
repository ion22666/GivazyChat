import { createSelector, createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { AcceptFriendRequestApiResponse } from "../../server/controllers/user/friends/acceptFriendRequest";
import { RejectFriendRequestApiResponse } from "../../server/controllers/user/friends/rejectFriendRequest";
import { StorageState } from "../store";

const initialState: StorageState["friendRequests"] = {
    sent: [],
    received: [],
};

export const sendFriendRequest = createAsyncThunk("friends/sendFriendRequest", async (userId: string, { dispatch }) => {
    const response = await window.request("/api/user/friends/requests/sent?userId=" + userId, { method: "PUT" });
    if (!response.ok) throw new Error("nu sa trimis requestul");
    return (await response.json()).data as global.sentFriendRequests;
});

export const cancelFriendRequest = createAsyncThunk("friends/cancelFriendRequest", async (userId: string, { dispatch }) => {
    const response = await window.request("/api/user/friends/requests/sent?userId=" + userId, { method: "DELETE" });
    if (!response.ok) throw new Error("nu sa trimis requestul");
    return (await response.json()).data as global.sentFriendRequests;
});

export const acceptFriendRequest = createAsyncThunk("friends/acceptFriendRequest", async (userId: string, { dispatch }) => {
    const response = await window.request("/api/user/friends/requests/received?userId=" + userId, { method: "PUT" });
    return ((await response.json()) as AcceptFriendRequestApiResponse).data;
});

export const rejectFriendRequest = createAsyncThunk("friends/rejectFriendRequest", async (userId: string, { dispatch }) => {
    const response = await window.request("/api/user/friends/requests/received?userId=" + userId, { method: "DELETE" });
    return ((await response.json()) as RejectFriendRequestApiResponse).data as global.receivedFriendRequests;
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
        addReceivedRequest: (state, action: PayloadAction<global.receivedFriendRequests>) => {
            state.received.unshift(action.payload);
        },
        removeReceivedRequest: (state, { payload }: PayloadAction<global.receivedFriendRequests | string>) => {
            state.received = state.received.filter(f => f.friendData.id !== (typeof payload === "string" ? payload : payload.friendData.id));
        },
        addSentRequest: (state, action: PayloadAction<global.sentFriendRequests>) => {
            state.sent.push(action.payload);
        },
        removeSentRequest: (state, {payload}: PayloadAction<global.sentFriendRequests | string>) => {
            state.sent = state.sent.filter(f => f.friendData.id !== (typeof payload === "string" ? payload : payload.friendData.id));
        },
    },
    extraReducers: builder => {
        builder
            .addCase(sendFriendRequest.fulfilled, (state, { payload }) => {
                state.sent.push(payload);
            })
            .addCase(cancelFriendRequest.fulfilled, (state, { payload }) => {
                state.sent = state.sent.filter(e => e.friendData.id !== payload.friendData.id);
            })
            // remove  the sent friend request when a friend has accepted the request
            .addCase(acceptFriendRequest.fulfilled, (state, { payload }) => {
                state.received = state.received.filter(e => e.friendData.id !== payload.friendData.id);
            })
            .addCase(rejectFriendRequest.fulfilled, (state, { payload }) => {
                state.received = state.received.filter(e => e.friendData.id !== payload.friendData.id);
            });
    },
});

export const useReceivedFriendRequests = () => useSelector<any, global.receivedFriendRequests[]>((state: StorageState) => state.friendRequests.received);
export const useSentFriendRequests = () => useSelector<any, global.sentFriendRequests[]>((state: StorageState) => state.friendRequests.sent);
