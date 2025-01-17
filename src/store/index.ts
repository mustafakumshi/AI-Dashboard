import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';

// Configure the store
const store = configureStore({
  reducer: {
    themeMode: themeReducer,
  },
});

// Export RootState type
export type RootState = ReturnType<typeof store.getState>;

export default store;
