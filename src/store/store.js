import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import questionReducer from './questionSlice'
import questionManagementReducer from './questionManagementSlice'
import userManagementReducer from './userManagementSlice'
import managementReducer from './managementSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    question: questionReducer,
    questionManagement: questionManagementReducer,
    userManagement: userManagementReducer,
    management: managementReducer
  },
})