import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './modalSlice/page'
import userSlice from './userslice/page'


export const store = configureStore({
  reducer: {
    modals: modalSlice, 
    user: userSlice
  },
})