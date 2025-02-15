import { configureStore } from '@reduxjs/toolkit';
import { charactersApiSlice } from './api/charactersApiSlice';
import { locationsApiSlice } from './api/locationsApiSlice';
import favoritesSliceReducer from './slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesSliceReducer,
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
export type AppDispatch = typeof store.dispatch;
