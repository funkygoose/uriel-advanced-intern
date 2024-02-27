import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: null,
    name:null,
    uid:null,
    email:null,
    photoUrl:null,
    premium:null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    
    setUser: (state, action) => {
        state.email = action.payload.email,
        state.uid = action.payload.uid,
        state.premium = action.payload.premium
    },
    
    signOutUser : (state) => {
        state.email = null,
        state.uid = null,
        state.premium = null
    }
  }
});

export const {setUser, signOutUser} = userSlice.actions

export default userSlice.reducer