import { configureStore } from "@reduxjs/toolkit";
import authEmailReducer from './auth/authEmail.slice'

export const store = configureStore({
    reducer: {
        authEmail: authEmailReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 