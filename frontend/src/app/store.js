import { configureStore } from '@reduxjs/toolkit';
import logReducer from './features/logSplice'

export const store = configureStore({
  reducer: {
   log:logReducer,
  },
});
