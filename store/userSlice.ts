import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

import Constants from 'expo-constants';

interface UserState {
    value: object
}

const initialState: UserState = {
    value:{}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        updateUser: (state,action: PayloadAction<object>) => {
            state.value = {
                ...state.value,
                ...action.payload
            }
        }
    }
})

export const {updateUser} = userSlice.actions

export const selectUser = (state: RootState) => state.userSlice.value

export default userSlice.reducer