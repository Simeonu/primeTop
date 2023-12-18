import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
  user:[]
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: { 
    login: (state,action) => {
      state.user = action.payload;
    }, 
  },
})

// Action creators are generated for each case reducer function
export const { login } = authSlice.actions

export default authSlice.reducer