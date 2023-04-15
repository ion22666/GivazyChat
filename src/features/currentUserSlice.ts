import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { StorageState, StoreState } from "../store";

type State = {
    data: Partial<global.CurrentUser>;
};

const initialState: State = {
    data: { id: undefined },
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
    return useSelector<StoreState, global.CurrentUser>(({ currentUser }) => currentUser.data as global.CurrentUser);
};
