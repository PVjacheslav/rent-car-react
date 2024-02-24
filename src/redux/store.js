import { configureStore } from '@reduxjs/toolkit';
import { carsApi } from './cars';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer,
  },

  middleware: getMiddleware => getMiddleware().concat(carsApi.middleware),
});

setupListeners(store.dispatch);
