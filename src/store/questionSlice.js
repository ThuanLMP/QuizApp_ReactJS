import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import questionApi from "../api/questionApi";



const initialState = {
    questionsPlay: [],
    listQuestionsSubmit: [],
    resultPlay: [],
}

export const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        updateQuestionsPlay: (state, action) => {
            state.questionsPlay = action.payload
        },
        updateListQuestionsSubmit: (state, action) => {
            state.listQuestionsSubmit = action.payload
        },
        updateResultPlay: (state,action) => {
            state.resultPlay = action.payload
        }
    
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuestionsPlay.fulfilled, (state,action)=>{
            state.questionsPlay = action.payload
        })
    }
})



export const fetchQuestionsPlay = createAsyncThunk(
    'fetchQuestionsPlay',
    async (totalQ) => {
        try {
            const response = await questionApi.getQuestionsPlay(totalQ)
            return response.data.data
        } catch (error) {
            console.log(error)
            return error.response.status
        }
    }
)

export const {
    updateQuestionsPlay,
    updateListQuestionsSubmit,
    updateResultPlay
     } = questionSlice.actions

export default questionSlice.reducer