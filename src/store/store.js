import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import questionReducer from './questionSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    question: questionReducer,
  },
})