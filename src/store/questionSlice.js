import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    questionsPlay: [],
    answersSubmit: [],
}

export const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        updateQuestionsPlay: (state,action) => {
            state.questionsPlay = action.payload
        },
        setupAnswersSubmit: (state,action) => {
            state.answersSubmit = action.payload
        },
        updateAnswer: (state,action)=> {
            state.answersSubmit = action.payload
        }
    }
})

export const {updateQuestionsPlay, setupAnswersSubmit, updateAnswer} = questionSlice.actions
export default questionSlice.reducer