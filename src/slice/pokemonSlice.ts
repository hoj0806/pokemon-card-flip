import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Pokemon {
  pokemonName: string;
  number: number;
  imageUrl: string;
}

interface pokemonSliceType {
  data: Pokemon[];
  shuffledData: Pokemon[];
}

const initialState: pokemonSliceType = {
  data: [
    { pokemonName: "Bulbasaur", number: 1, imageUrl: "" },
    { pokemonName: "Ivysaur", number: 2, imageUrl: "" },
    { pokemonName: "Venusaur", number: 3, imageUrl: "" },
    { pokemonName: "Charmander", number: 4, imageUrl: "" },
    { pokemonName: "Charmeleon", number: 5, imageUrl: "" },
    { pokemonName: "Charizard", number: 6, imageUrl: "" },
    { pokemonName: "Squirtle", number: 7, imageUrl: "" },
    { pokemonName: "Wartortle", number: 8, imageUrl: "" },
    { pokemonName: "Blastoise", number: 9, imageUrl: "" },
    { pokemonName: "Caterpie", number: 10, imageUrl: "" },
    { pokemonName: "Tentacool", number: 72, imageUrl: "" },
    { pokemonName: "Tentacruel", number: 73, imageUrl: "" },
    { pokemonName: "Geodude", number: 74, imageUrl: "" },
    { pokemonName: "Graveler", number: 75, imageUrl: "" },
    { pokemonName: "Golem", number: 76, imageUrl: "" },
    { pokemonName: "Ponyta", number: 77, imageUrl: "" },
    { pokemonName: "Rapidash", number: 78, imageUrl: "" },
    { pokemonName: "Slowpoke", number: 79, imageUrl: "" },
    { pokemonName: "Slowbro", number: 80, imageUrl: "" },
    { pokemonName: "Magnemite", number: 81, imageUrl: "" },
    { pokemonName: "Magneton", number: 82, imageUrl: "" },
    { pokemonName: "Farfetch'd", number: 83, imageUrl: "" },
    { pokemonName: "Doduo", number: 84, imageUrl: "" },
    { pokemonName: "Dodrio", number: 85, imageUrl: "" },
    { pokemonName: "Seel", number: 86, imageUrl: "" },
    { pokemonName: "Dewgong", number: 87, imageUrl: "" },
    { pokemonName: "Grimer", number: 88, imageUrl: "" },
    { pokemonName: "Muk", number: 89, imageUrl: "" },
    { pokemonName: "Shellder", number: 90, imageUrl: "" },
    { pokemonName: "Cloyster", number: 91, imageUrl: "" },
    { pokemonName: "Gastly", number: 92, imageUrl: "" },
    { pokemonName: "Haunter", number: 93, imageUrl: "" },
    { pokemonName: "Gengar", number: 94, imageUrl: "" },
    { pokemonName: "Onix", number: 95, imageUrl: "" },
    { pokemonName: "Drowzee", number: 96, imageUrl: "" },
    { pokemonName: "Hypno", number: 97, imageUrl: "" },
  ],
  shuffledData: [],
};

const shuffleArray = (array: Pokemon[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const pokemonSlice = createSlice({
  name: "pokemonSlice",
  initialState,
  reducers: {
    setPokemonData: (state, action: PayloadAction<Pokemon[]>) => {
      state.data = action.payload;
    },
    generateShuffledPokemon: (state, action: PayloadAction<number>) => {
      const selected = [...state.data]
        .sort(() => Math.random() - 0.5)
        .slice(0, action.payload);
      state.shuffledData = shuffleArray([...selected, ...selected]);
    },
  },
});

export default pokemonSlice;
export const { setPokemonData, generateShuffledPokemon } = pokemonSlice.actions;
export const pokemons = (state: RootState) => state.pokemonSlice.data;
export const shuffledPokemons = (state: RootState) =>
  state.pokemonSlice.shuffledData;
