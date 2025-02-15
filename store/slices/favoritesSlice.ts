import { createSlice } from '@reduxjs/toolkit';
import { Character } from '../../model/Character';

interface FavoriteState {
  favoriteCharacters: Character[];
}

const initialState: FavoriteState = {
  favoriteCharacters: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    addFavorite(state, action) {
      state.favoriteCharacters.push(action.payload);
    },
    removeFavorite(state, action) {
      state.favoriteCharacters = state.favoriteCharacters.filter(
        (favorite) => favorite.id !== action.payload.id
      );
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
