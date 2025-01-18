import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import aiDataReducer from './aiDataSlice';

// Configure the store
const store = configureStore({
  reducer: {
    themeMode: themeReducer,
    aiData: aiDataReducer,
  },
});

// Export RootState type
export type RootState = ReturnType<typeof store.getState>;

export default store;
