import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import answerApi from "../api/answerApi";
import questionApi from "../api/questionApi";

const initialState = {
    listQuestions: [],
    paramsSearch: {
        sortField: 'id',
        keyWord: '',
        order: 'ASC',
        size: 5,
        page: 1
    },
    statusAddQuestion: '',
    questionUpdate: {
        id: '',
        title: '',
        thumbnail_link: '',
        answers: []
    },


}

export const questionManagementSlice = createSlice({
    name: 'questionManagement',
    initialState,
    reducers: {
        updatePage: (state, action) => {
            state.paramsSearch.page = action.payload
        },
        updateSortFeild: (state, action) => {
            state.paramsSearch.sortField = action.payload
        },
        updateKeyWord: (state, action) => {
            state.paramsSearch.keyWord = action.payload
        },
        updateOrder: (state, action) => {
            state.paramsSearch.order = action.payload
        },
        updateSize: (state, action) => {
            state.paramsSearch.size = action.payload
        },
        addQuestion: (state, action) => {
            state.questionAdd = action.payload
        },
        updateStatusAddQuestion: (state, action) => {
            state.statusAddQuestion = action.payload
        },
        editQuestionUpdate: (state,action) => {
            state.questionUpdate = action.payload
        },
        updateTitleQuetionUpdate: (state,action) => {
            state.questionUpdate.title = action.payload
        }
        

    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {
            state.listQuestions = action.payload
        })

        builder.addCase(fetchAddQuestion.fulfilled, (state, action) => {
            state.statusAddQuestion = action.payload
        })
        builder.addCase(fetchAddQuestion.pending, (state, action) => {
            state.statusAddQuestion = 'pending'
        })
        builder.addCase(fetchAddQuestion.rejected, (state, action) => {
            state.statusAddQuestion = action.payload
        })
        builder.addCase(fetchQuestion.pending,(state,action)=>{

        })
        builder.addCase(fetchQuestion.fulfilled, (state,action)=> {
            state.questionUpdate = action.payload
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
            return error.response.status
        }
    }

)

export const fetchAddQuestion = createAsyncThunk(
    'fetchAddQuestion',
    async (question) => {
        try {
            const response = await questionApi.addNewQuestion(question)
            return response.status
        } catch (error) {
            console.log(error)
            return error.response.status
        }
    }
)

export const fetchQuestion = createAsyncThunk(
    'fetchQuestion',
    async (id) => {
        try {
            const response = await questionApi.getQuestion(id)
            return response.data.data
        } catch (error) {
            console.log(error)
            return error.response.status
        }
    }
)

export const deleteQuestion = createAsyncThunk(
    'deleteQuestion',
    async (id) => {
        try {
            const response = await questionApi.deleteQuestion(id)
            return response.data.data
        } catch (error) {
            console.log(error)
            return error.response.status
        }
    }
)

export const addAnsToQuestion = createAsyncThunk(
    'addAnsToQuestion',
    async(dataAnswer) => {
       
        try{
            const response = await answerApi.addAnswer(dataAnswer)
            console.log(response)
            return response.data.data
        }
        catch(error){
            console.log(error)
            return error.response.status
        }
    }
)

export const {
    updatePage,
    updateKeyWord,
    updateSize,
    updateSortFeild,
    updateOrder,
    updateStatusAddQuestion,
    editQuestionUpdate,
    updateTitleQuetionUpdate
} = questionManagementSlice.actions

export default questionManagementSlice.reducer