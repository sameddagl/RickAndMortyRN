import { configureStore } from '@reduxjs/toolkit';
import { charactersApiSlice } from './api/charactersApiSlice';
import { locationsApiSlice } from './api/locationsApiSlice';

export const store = configureStore({
  reducer: {
    [locationsApiSlice.reducerPath]: locationsApiSlice.reducer,
    [charactersApiSlice.reducerPath]: charactersApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(locationsApiSlice.middleware)
      .concat(charactersApiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
