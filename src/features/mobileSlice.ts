import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { StorageState, StoreState } from "../store";

type State = {
    secondSectionIsOpen: boolean;
};

const initialState: State = {
    secondSectionIsOpen: false,
};

export const mobileSlice = createSlice({
    name: "mobileSlice",
    initialState,
    reducers: {
        setSecondSectionIsOpen: (state, action: PayloadAction<boolean>) => {
            state.secondSectionIsOpen = action.payload;
        },
    },
});

export const useSecondSectionIsOpen = () => {
    return useSelector<StoreState, boolean>(({ mobileSlice }) => mobileSlice.secondSectionIsOpen);
};
