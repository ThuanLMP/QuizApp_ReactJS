import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import questionApi from "../api/questionApi";

const initialState = {
    listQuestions: [],
    paramsSearch: {
        sortField: 'id',
        keyWord: '',
        order: 'ASC',
        size: 5,
        page: 1
    }
}

export const questionManagementSlice = createSlice({
    name: 'questionManagement',
    initialState,
    reducers: {
        updatePage: (state,action) => {
            state.paramsSearch.page = action.payload
        },
        updateSortFeild: (state,action) => {
            state.paramsSearch.sortField = action.payload
        },
        updateKeyWord: (state,action) => {
            state.paramsSearch.keyWord = action.payload
        },
        updateOrder: (state,action) => {
            state.paramsSearch.order = action.payload
        },
        updateSize: (state,action) => {
            state.paramsSearch.size = action.payload
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {
            state.listQuestions = action.payload
        })
    }
})

export const fetchQuestions = createAsyncThunk(
    'fetchQuestions',
    async (paramsSeach) => {
        try {
            const response = await questionApi.getAllQuestion(paramsSeach)
            return response.data.data.result

        } catch (error) {
            console.log(error)
        }
    }

)

export const {
    updatePage,
    updateKeyWord,
    updateSize,
    updateSortFeild,
    updateOrder
} = questionManagementSlice.actions

export default questionManagementSlice.reducer