import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  PokemonDataArray,
  shuffleDataArray,
  SelctCardType,
  pokemonSliceType,
} from "../types/types";

const initialState: pokemonSliceType = {
  data: [],
  shuffledData: [],
  selectCard: [],
};

const shuffleArray = (array: shuffleDataArray) => {
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
    setPokemonData: (state, action: PayloadAction<PokemonDataArray>) => {
      state.data = action.payload;
    },
    generateShuffledPokemon: (state, action: PayloadAction<number>) => {
      const selected = [...state.data]
        .sort(() => Math.random() - 0.5)
        .slice(0, action.payload);

      // 동일한 카드가 두 장씩 들어가도록 설정
      const withUniqueIds = selected.flatMap((pokemon) => [
        { ...pokemon, uniqueId: `${pokemon.id}_1` },
        { ...pokemon, uniqueId: `${pokemon.id}_2` },
      ]);

      state.shuffledData = shuffleArray(withUniqueIds);
    },
    setAllCardsFlip: (state) => {
      state.shuffledData = state.shuffledData.map((pokemon) => ({
        ...pokemon,
        isFliped: false,
      }));
    },
    setFlipCard: (state, action: PayloadAction<string>) => {
      const uniqueId = action.payload;
      state.shuffledData = state.shuffledData.map((pokemon) => {
        if (pokemon.uniqueId === uniqueId) {
          return { ...pokemon, isFliped: true };
        }
        return pokemon;
      });
    },
    setWrongCardFlip: (state, action: PayloadAction<string>) => {
      state.shuffledData = state.shuffledData.map((pokemon) =>
        pokemon.pokemonName === action.payload
          ? { ...pokemon, isFliped: false }
          : pokemon
      );
    },
    setCorrectCard: (state, action: PayloadAction<string>) => {
      state.shuffledData = state.shuffledData.map((data) =>
        data.pokemonName === action.payload
          ? { ...data, isCorrect: true }
          : data
      );
    },
    deleteSamePickCard: (state) => {
      state.selectCard.pop();
    },
    pickCard: (state, action: PayloadAction<SelctCardType>) => {
      state.selectCard.push(action.payload);
    },
    clenUpSelectCard: (state) => {
      state.selectCard = [];
    },

    sortById: (state, action) => {
      const sortOrder = action.payload;
      state.data = [...state.data].sort((a, b) =>
        sortOrder === "asc" ? a.id - b.id : b.id - a.id
      );
    },
    sortByName: (state, action) => {
      const sortOrder = action.payload;
      state.data = [...state.data].sort((a, b) =>
        sortOrder === "asc"
          ? a.pokemonName.localeCompare(b.pokemonName, "ko")
          : b.pokemonName.localeCompare(a.pokemonName, "ko")
      );
    },

    sortByType: (state, action: PayloadAction<"asc" | "desc">) => {
      const sortOrder = action.payload;

      state.data = [...state.data].sort((a, b) => {
        const typeA = a.types[0];
        const typeB = b.types[0];

        if (sortOrder === "asc") {
          return typeA.localeCompare(typeB);
        } else {
          return typeB.localeCompare(typeA);
        }
      });
    },
  },
});

export default pokemonSlice;
export const {
  setPokemonData,
  generateShuffledPokemon,
  setAllCardsFlip,
  setFlipCard,
  pickCard,
  setWrongCardFlip,
  clenUpSelectCard,
  setCorrectCard,
  deleteSamePickCard,
  sortById,
  sortByName,
  sortByType,
} = pokemonSlice.actions;

export const pokemons = (state: RootState) => state.pokemonSlice.data;
export const shuffledPokemons = (state: RootState) =>
  state.pokemonSlice.shuffledData;
export const selectCard = (state: RootState) => state.pokemonSlice.selectCard;
export const correctPokemons = (state: RootState) =>
  state.pokemonSlice.shuffledData.filter((pokemon) => pokemon.isCorrect);
