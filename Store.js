import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './slicers/AuthSlice';
import txSlice from './slicers/TxSlice';
import topupSlice  from './slicers/TopupSlice';
import fundWalletSlice  from './slicers/FundWalletSlice';

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    tx: txSlice,
    topup: topupSlice,
    fund:fundWalletSlice
  },
});