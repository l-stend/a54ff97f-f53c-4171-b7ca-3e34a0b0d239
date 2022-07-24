import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../../utils/axios';

const initialState = {
  isLoading: false,
  events: [],
};

const allEventsSlice = createSlice({
  name: 'allEvents',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default allEventsSlice.reducer;
