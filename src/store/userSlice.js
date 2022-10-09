import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        id: '',
        email:'',
        password:'',
        role: []
    }
}

export const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state,action) => {
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user = initialState
        },
    }
})

export const {setUser,clearUser} = loginSlice.actions
export default loginSlice.reducer