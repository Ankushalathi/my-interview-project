// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here
import counterReducer from '../redux/Feature/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other reducers here
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
