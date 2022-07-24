import { configureStore } from '@reduxjs/toolkit';
import allEventsReducer from '../features/all events/allEventsSlice';

export const store = configureStore({
  reducer: {
    allEvents: allEventsReducer,
  },
});
