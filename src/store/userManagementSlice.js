import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import userApi from "../api/userApi"


const initialState = {
    dataUsers: {},
    paramsSearch: {
        sortField: 'id',
        role1: 'user',
        role2: 'admin',
        keyWord: '',
        order: 'ASC',
        size: 5,
        page: 1
    }
}

export const userManagementSlice = createSlice({
    name: 'userManagement',
    initialState,
    reducers: {
        updatePage: (state,action) => {
            state.paramsSearch.page = action.payload
        },
        updateSortFeild: (state,action) => {
            state.paramsSearch.sortField = action.payload
        },
        updateRole1: (state,action) => {
            state.paramsSearch.role1 = action.payload
        },
        updateRole2: (state,action) => {
            state.paramsSearch.role2 = action.payload
        }
        ,
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
        builder.addCase(fetchUsers.fulfilled, (state,action)=>{
            state.dataUsers = action.payload
        })
    }
})

export const fetchUsers = createAsyncThunk(
    'fetchUsers',
    async(paramsSearch) => {
        try {
           
            const response = await userApi.getAllUsers(paramsSearch)
           
            return response.data.data
        } catch (error) {
            console.log(error)
        }
    }
)

export const {
    updateKeyWord,
    updateOrder,
    updatePage,
    updateRole1,
    updateRole2,
    updateSize,
    updateSortFeild
} = userManagementSlice.actions

export default userManagementSlice.reducer