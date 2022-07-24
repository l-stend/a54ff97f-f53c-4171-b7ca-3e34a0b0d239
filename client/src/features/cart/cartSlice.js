import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  cartItems: [],
  totalItems: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
