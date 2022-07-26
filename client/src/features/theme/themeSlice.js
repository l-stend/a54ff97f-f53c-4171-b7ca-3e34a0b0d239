import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: true,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
