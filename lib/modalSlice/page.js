import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loginModalOpen: false,
    signUpModal: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openLoginModal: (state) => {
        state.loginModalOpen = true
    },
    closeLoginModal: (state) => {
        state.loginModalOpen = false
    },
    openSignupModal: (state) => {
        state.signUpModal = true
    },
    closeSignupModal: (state) => {
        state.signUpModal = false
    }
    
  }
});

export const {openLoginModal, closeLoginModal, closeSignupModal, openSignupModal} = modalSlice.actions

export default modalSlice.reducer