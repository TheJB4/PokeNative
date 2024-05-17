import { configureStore } from '@reduxjs/toolkit'
import constantReducer from './constantSlice'
import userReducer from './userSlice'

export const store = configureStore({
    reducer: {
        constantes : constantReducer,
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch