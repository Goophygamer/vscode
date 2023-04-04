import { configureStore } from '@reduxjs/toolkit';
import logReducer from './features/logSlice'

export const store = configureStore({
  reducer: {
   logs:logReducer,
  },
});
