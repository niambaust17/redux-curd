import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/Counter/counterSlice';
import { postsApi } from '../services/posts';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});
