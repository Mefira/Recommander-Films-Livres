import { configureStore } from '@reduxjs/toolkit';
import recommendationReducer from './recommendationSlice';
import userReducer from './userSlice';
import mediaReducer from './mediaSlice';

export const store = configureStore({
  reducer: {
    recommendation: recommendationReducer,
    user: userReducer,
    media: mediaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 