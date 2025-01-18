import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for theme mode (dark or light)
interface ThemeState {
  mode: 'dark' | 'light'; // Possible values: 'dark' or 'light'
}

const initialState: ThemeState = {
  mode: 'light', // Initially light mode
};

// Create the theme mode slice
const themeSlice = createSlice({
  name: 'themeMode',
  initialState,
  reducers: {
    toggleThemeMode(state) {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { toggleThemeMode } = themeSlice.actions;

export default themeSlice.reducer;
