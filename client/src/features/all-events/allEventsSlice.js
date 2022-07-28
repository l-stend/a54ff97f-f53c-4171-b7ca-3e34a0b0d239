import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';
import moment from 'moment';

const initialState = {
  isLoading: false,
  eventsList: [],
  backUpList: [],
};

export const getAllEvents = createAsyncThunk(
  'allEvents/getAllEvents',
  async (_, thunkAPI) => {
    try {
      const res = await customFetch.get();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const allEventsSlice = createSlice({
  name: 'allEvents',
  initialState,
  reducers: {
    removeFromList: (state, { payload }) => {
      state.eventsList = state.eventsList.filter(
        (item) => item._id !== payload
      );
    },
    putBackToList: (state, { payload }) => {
      state.eventsList.push(payload);
      state.eventsList.sort(
        (a, b) => moment(a.startTime) - moment(b.startTime)
      );
    },
    filterList: (state, { payload }) => {
      state.eventsList = state.backUpList;
      state.eventsList = state.eventsList.filter((item) =>
        item.title.toLowerCase().includes(payload.toLowerCase())
      );
    },
    restoreList: (state) => {
      state.eventsList = state.backUpList;
    },
  },
  extraReducers: {
    [getAllEvents.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllEvents.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.eventsList = payload.sort(
        (a, b) => moment(a.startTime) - moment(b.startTime)
      );
      state.backUpList = state.eventsList;
    },
    [getAllEvents.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error('Ooops something went wrong');
    },
  },
});

export const { removeFromList, filterList, restoreList, putBackToList } =
  allEventsSlice.actions;

export default allEventsSlice.reducer;
