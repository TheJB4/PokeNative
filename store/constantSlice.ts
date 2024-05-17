import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

import Constants from 'expo-constants';

interface ContantsState {
    value: number
}

const initialState: ContantsState = {
    value: Constants.statusBarHeight
}

export const constantSlice = createSlice({
    name: 'constants',
    initialState,
    reducers:{
        getConstant: (state) => {
            state.value
        }
    }
})

export const {getConstant} = constantSlice.actions

export const selectConstant = (state: RootState) => state.constants.value

export default constantSlice.reducer