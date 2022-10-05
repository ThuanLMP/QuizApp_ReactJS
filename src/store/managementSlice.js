import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    statusShowDetails: false
}

export const managementSlice = createSlice({
    name: 'management',
    initialState,
    reducers: {
        updateStatusShowDetails: (state, action) => {
            state.statusShowDetails = action.payload
        }
    }
})

export const {
    updateStatusShowDetails
} = managementSlice.actions

export default managementSlice.reducer