import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { StorageState } from "../store";

const initialState: StorageState["currentUser"] = {
    data: undefined,
};

export const currentUserSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {
        setCurrentUserData: (state, action: PayloadAction<global.CurrentUser>) => {
            state.data = action.payload;
        },
    },
});

export const useCurrentUser = () => {
    return useSelector<StorageState, global.CurrentUser>(({ currentUser }) => currentUser.data);
};
