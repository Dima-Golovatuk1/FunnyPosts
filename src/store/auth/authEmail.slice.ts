import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthEmail {
    email: string | null
};

const initialState: AuthEmail = {
    email: null
};

const authEmailSlice = createSlice({
    name: 'authEmail',
    initialState,
    reducers: {
        setEmailAuth: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        clearEmailAuth: (state) => {
            state.email = null
        }
    }
})

export const {setEmailAuth, clearEmailAuth} = authEmailSlice.actions

export default authEmailSlice.reducer;