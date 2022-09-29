import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questionsPlay: []
}

export const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        updateQuestionsPlay: (state,action) => {
            state.questionsPlay = action.payload
        },
    }
})

export const {updateQuestionsPlay} = questionSlice.actions
export default questionSlice.reducer