import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';

const initialState = {
  isLoading: false,
  allEvents: [],
};

export const getAllEvents = createAsyncThunk(
  'allEvents/getAllEvents',
  async (_, thunkAPI) => {
    try {
      const res = await customFetch.get();
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const allEventsSlice = createSlice({
  name: 'allEvents',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllEvents.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllEvents.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.allEvents = payload;
    },
    [getAllEvents.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error('Ooops something went wrong');
    },
  },
});

export default allEventsSlice.reducer;
