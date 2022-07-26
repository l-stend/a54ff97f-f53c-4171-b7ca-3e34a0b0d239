import { configureStore } from '@reduxjs/toolkit';
import allEventsSlice from './features/all-events/allEventsSlice';
import cartSlice from './features/cart/cartSlice';
import themeSlice from './features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    allEvents: allEventsSlice,
    cart: cartSlice,
    theme: themeSlice,
  },
});
