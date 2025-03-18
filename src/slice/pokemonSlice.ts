import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Pokemon {
  pokemonName: string;
  number: number;
  imageUrl: string;
  isFlied: boolean;
}

interface pokemonSliceType {
  data: Pokemon[];
  shuffledData: Pokemon[];
}

const initialState: pokemonSliceType = {
  data: [
    { pokemonName: "Bulbasaur", number: 1, imageUrl: "", isFlied: false },
    { pokemonName: "Ivysaur", number: 2, imageUrl: "", isFlied: false },
    { pokemonName: "Venusaur", number: 3, imageUrl: "", isFlied: false },
    { pokemonName: "Charmander", number: 4, imageUrl: "", isFlied: false },
    { pokemonName: "Charmeleon", number: 5, imageUrl: "", isFlied: false },
    { pokemonName: "Charizard", number: 6, imageUrl: "", isFlied: false },
    { pokemonName: "Squirtle", number: 7, imageUrl: "", isFlied: false },
    { pokemonName: "Wartortle", number: 8, imageUrl: "", isFlied: false },
    { pokemonName: "Blastoise", number: 9, imageUrl: "", isFlied: false },
    { pokemonName: "Caterpie", number: 10, imageUrl: "", isFlied: false },
    { pokemonName: "Tentacool", number: 72, imageUrl: "", isFlied: false },
    { pokemonName: "Tentacruel", number: 73, imageUrl: "", isFlied: false },
    { pokemonName: "Geodude", number: 74, imageUrl: "", isFlied: false },
    { pokemonName: "Graveler", number: 75, imageUrl: "", isFlied: false },
    { pokemonName: "Golem", number: 76, imageUrl: "", isFlied: false },
    { pokemonName: "Ponyta", number: 77, imageUrl: "", isFlied: false },
    { pokemonName: "Rapidash", number: 78, imageUrl: "", isFlied: false },
    { pokemonName: "Slowpoke", number: 79, imageUrl: "", isFlied: false },
    { pokemonName: "Slowbro", number: 80, imageUrl: "", isFlied: false },
    { pokemonName: "Magnemite", number: 81, imageUrl: "", isFlied: false },
    { pokemonName: "Magneton", number: 82, imageUrl: "", isFlied: false },
    { pokemonName: "Farfetch'd", number: 83, imageUrl: "", isFlied: false },
    { pokemonName: "Doduo", number: 84, imageUrl: "", isFlied: false },
    { pokemonName: "Dodrio", number: 85, imageUrl: "", isFlied: false },
    { pokemonName: "Seel", number: 86, imageUrl: "", isFlied: false },
    { pokemonName: "Dewgong", number: 87, imageUrl: "", isFlied: false },
    { pokemonName: "Grimer", number: 88, imageUrl: "", isFlied: false },
    { pokemonName: "Muk", number: 89, imageUrl: "", isFlied: false },
    { pokemonName: "Shellder", number: 90, imageUrl: "", isFlied: false },
    { pokemonName: "Cloyster", number: 91, imageUrl: "", isFlied: false },
    { pokemonName: "Gastly", number: 92, imageUrl: "", isFlied: false },
    { pokemonName: "Haunter", number: 93, imageUrl: "", isFlied: false },
    { pokemonName: "Gengar", number: 94, imageUrl: "", isFlied: false },
    { pokemonName: "Onix", number: 95, imageUrl: "", isFlied: false },
    { pokemonName: "Drowzee", number: 96, imageUrl: "", isFlied: false },
    { pokemonName: "Hypno", number: 97, imageUrl: "", isFlied: false },
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
