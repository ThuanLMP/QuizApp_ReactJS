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
    },
    statusAddUser: '',
    message: '',
    userTarget: {},
    
}

export const userManagementSlice = createSlice({
    name: 'userManagement',
    initialState,
    reducers: {
        updatePage: (state, action) => {
            state.paramsSearch.page = action.payload
        },
        updateSortFeild: (state, action) => {
            state.paramsSearch.sortField = action.payload
        },
        updateRole1: (state, action) => {
            state.paramsSearch.role1 = action.payload
        },
        updateRole2: (state, action) => {
            state.paramsSearch.role2 = action.payload
        }
        ,
        updateKeyWord: (state, action) => {
            state.paramsSearch.keyWord = action.payload
        },
        updateOrder: (state, action) => {
            state.paramsSearch.order = action.payload
        },
        updateSize: (state, action) => {
            state.paramsSearch.size = action.payload
        },
        updateStatusAddUser: (state, action) => {
            state.statusAddUser = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.dataUsers = action.payload
        })
        builder.addCase(fetchAddUser.fulfilled, (state, action) => {
            state.message = action.payload.message
            state.statusAddUser = action.payload.statusCode

        })
        builder.addCase(fetchAddUser.pending, (state, action) => {
            state.statusAddUser = 'pending'
        })
        builder.addCase(fetchAddUser.rejected, (state, action) => {
            state.statusAddUser = action.payload
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.userTarget = action.payload
        })

    }
})

export const fetchUsers = createAsyncThunk(
    'fetchUsers',
    async (paramsSearch) => {
        try {
            const response = await userApi.getAllUsers(paramsSearch)
            return response.data.data
        } catch (error) {
            console.log(error)
            return error.response.status
        }
    }
)
export const fetchAddUser = createAsyncThunk(
    'fetchAddUser',
    async (user) => {
        try {
            const response = await userApi.addNewUser(user)
            return response.status
        } catch (error) {
            console.log(error)
            return error.response.data
        }
    }
)

export const fetchUser = createAsyncThunk(
    'featchUser',
    async (id) => {
        try {
            const response = await userApi.getUserById(id)
            return response.data.data
        } catch (error) {
            console.log(error)
            return error.response.status
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
    updateSortFeild,
    updateStatusAddUser
} = userManagementSlice.actions

export default userManagementSlice.reducer