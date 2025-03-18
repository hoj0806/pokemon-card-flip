import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
interface pokemonSliceType {
  data: any[];
}

const initialState: pokemonSliceType = { data: [] };

const pokemonSlice = createSlice({
  name: "pokemonSlice",
  initialState,
  reducers: {
    setPokemonData: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
    },
  },
});

export default pokemonSlice;
export const { setPokemonData } = pokemonSlice.actions;
export const pokemons = (state: RootState) => state.pokemonSlice.data;
