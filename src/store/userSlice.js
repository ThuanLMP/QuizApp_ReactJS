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
        addUser: (state,action) => {
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user = initialState
        },
    }
})

export const {addUser,clearUser} = loginSlice.actions
export default loginSlice.reducer