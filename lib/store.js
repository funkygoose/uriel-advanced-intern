import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './modalSlice/page'

export const store = configureStore({
  reducer: {
    modals: modalSlice, 
  },
})