import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  bal:0
}

export const fundWalletSlice = createSlice({
  name: 'fund',
  initialState,
  reducers: {
    getBalance: (state) => { 
      return state.bal ;
    },
    fundWallet: (state, action) => {
      state.bal += action.payload;
    //state.value = state.value + action.payload
    }, 
    debitWallet: (state,action) => {
        state.bal -= action.payload;
    }, 
  },
})

// Action creators are generated for each case reducer function
export const { getBalance, fundWallet, debitWallet  } = fundWalletSlice.actions

export default fundWalletSlice.reducer