import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        email:'',
        password:''
    }
}

export const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearUser: (state) => {
            state.user = initialState
        },
    }
})

export const {clearUser} = loginSlice.actions
export default loginSlice.reducer