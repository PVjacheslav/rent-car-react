import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65da2762bcc50200fcdca954.mockapi.io/',
  }),
  endpoints: builder => ({
    getCarsOnPage: builder.query({
      query: (page = 1) => `advert?page=${page}&limit=8`,
    }),
  }),
});

export const { useGetCarsOnPage } = carsApi;
