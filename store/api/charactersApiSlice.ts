import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character } from '../../model/Character';

export const charactersApiSlice = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<Character[], { ids: number[] }>({
      query: ({ ids }) => `character/${ids.join(',')}`,
      transformResponse: (response: Character | Character[]) => {
        return Array.isArray(response) ? response : [response];
      },
    }),
  }),
});

export const { useGetCharactersQuery } = charactersApiSlice;
