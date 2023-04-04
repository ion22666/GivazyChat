import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { StorageState, StoreState } from "../store";

type State = {
    selectedUser: global.UserData | global.FriendData | global.CurrentUser;
};

// const openProfileFor = createAsyncThunk("userProfile/openProfileFor",(user: State["selectedUser"],{dispatch}) => {
//     dispatch(userProfileSlice.actions.setUserData(user));
//     dispatch()
// });

const initialState: State = {
    selectedUser: undefined,
};

export const userProfileSlice = createSlice({
    name: "userProfile",
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<State["selectedUser"]>) => {
            state.selectedUser = action.payload;
        },
    },
});

export const useProfileUser = () => useSelector<StoreState, State["selectedUser"]>(state => state.userProfile.selectedUser);
// export const openProfileFor1 = (user: State["selectedUser"]) => {
//     userProfileSlice;
// }
