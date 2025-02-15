import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LocationResult } from '../../model/LocationResult';

export const locationsApiSlice = createApi({
  reducerPath: 'locationsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getAllLocations: builder.query<LocationResult, { page: number }>({
      query: ({ page }) => `location?page=${page}`,
    }),
  }),
});

export const { useGetAllLocationsQuery } = locationsApiSlice;
