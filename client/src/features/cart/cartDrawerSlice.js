import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDrawerOpen: true,
};

const cartDrawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
  },
});

export const { toggleDrawer } = cartDrawerSlice.actions;

export default cartDrawerSlice.reducer;
