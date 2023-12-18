import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const txSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    creatAccount: (state) => { 
      state.value += 1
    },
    login: (state) => {
      state.value -= 1
    }, 
  },
})

// Action creators are generated for each case reducer function
export const { creatAccount, login } = txSlice.actions

export default txSlice.reducer