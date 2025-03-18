import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Pokemon {
  id: string; // 고유한 ID
  uniqueId: string; // 셔플된 카드마다 구별되는 고유한 ID
  pokemonName: string;
  imageUrl: string;
  isFlied: boolean;
}

interface pokemonSliceType {
  data: Pokemon[]; // 원본 데이터
  shuffledData: Pokemon[]; // 셔플된 데이터
}

const initialState: pokemonSliceType = {
  data: [
    {
      id: "1",
      pokemonName: "Bulbasaur",
      imageUrl: "",
      isFlied: true,
      uniqueId: "1_1",
    },
    {
      id: "2",
      pokemonName: "Ivysaur",
      imageUrl: "",
      isFlied: true,
      uniqueId: "2_1",
    },
    {
      id: "3",
      pokemonName: "Venusaur",
      imageUrl: "",
      isFlied: true,
      uniqueId: "3_1",
    },
    {
      id: "4",
      pokemonName: "Charmander",
      imageUrl: "",
      isFlied: true,
      uniqueId: "4_1",
    },
    {
      id: "5",
      pokemonName: "Charmeleon",
      imageUrl: "",
      isFlied: true,
      uniqueId: "5_1",
    },
    {
      id: "6",
      pokemonName: "Charizard",
      imageUrl: "",
      isFlied: true,
      uniqueId: "6_1",
    },
    {
      id: "7",
      pokemonName: "Squirtle",
      imageUrl: "",
      isFlied: true,
      uniqueId: "7_1",
    },
    {
      id: "8",
      pokemonName: "Wartortle",
      imageUrl: "",
      isFlied: true,
      uniqueId: "8_1",
    },
    {
      id: "9",
      pokemonName: "Blastoise",
      imageUrl: "",
      isFlied: true,
      uniqueId: "9_1",
    },
    {
      id: "10",
      pokemonName: "Caterpie",
      imageUrl: "",
      isFlied: true,
      uniqueId: "10_1",
    },
    {
      id: "72",
      pokemonName: "Tentacool",
      imageUrl: "",
      isFlied: true,
      uniqueId: "72_1",
    },
    {
      id: "73",
      pokemonName: "Tentacruel",
      imageUrl: "",
      isFlied: true,
      uniqueId: "73_1",
    },
    {
      id: "74",
      pokemonName: "Geodude",
      imageUrl: "",
      isFlied: true,
      uniqueId: "74_1",
    },
    {
      id: "75",
      pokemonName: "Graveler",
      imageUrl: "",
      isFlied: true,
      uniqueId: "75_1",
    },
    {
      id: "76",
      pokemonName: "Golem",
      imageUrl: "",
      isFlied: true,
      uniqueId: "76_1",
    },
    {
      id: "77",
      pokemonName: "Ponyta",
      imageUrl: "",
      isFlied: true,
      uniqueId: "77_1",
    },
    {
      id: "78",
      pokemonName: "Rapidash",
      imageUrl: "",
      isFlied: true,
      uniqueId: "78_1",
    },
    {
      id: "79",
      pokemonName: "Slowpoke",
      imageUrl: "",
      isFlied: true,
      uniqueId: "79_1",
    },
    {
      id: "80",
      pokemonName: "Slowbro",
      imageUrl: "",
      isFlied: true,
      uniqueId: "80_1",
    },
    {
      id: "81",
      pokemonName: "Magnemite",
      imageUrl: "",
      isFlied: true,
      uniqueId: "81_1",
    },
    {
      id: "82",
      pokemonName: "Magneton",
      imageUrl: "",
      isFlied: true,
      uniqueId: "82_1",
    },
    {
      id: "83",
      pokemonName: "Farfetch'd",
      imageUrl: "",
      isFlied: true,
      uniqueId: "83_1",
    },
    {
      id: "84",
      pokemonName: "Doduo",
      imageUrl: "",
      isFlied: true,
      uniqueId: "84_1",
    },
    {
      id: "85",
      pokemonName: "Dodrio",
      imageUrl: "",
      isFlied: true,
      uniqueId: "85_1",
    },
    {
      id: "86",
      pokemonName: "Seel",
      imageUrl: "",
      isFlied: true,
      uniqueId: "86_1",
    },
    {
      id: "87",
      pokemonName: "Dewgong",
      imageUrl: "",
      isFlied: true,
      uniqueId: "87_1",
    },
    {
      id: "88",
      pokemonName: "Grimer",
      imageUrl: "",
      isFlied: true,
      uniqueId: "88_1",
    },
    {
      id: "89",
      pokemonName: "Muk",
      imageUrl: "",
      isFlied: true,
      uniqueId: "89_1",
    },
    {
      id: "90",
      pokemonName: "Shellder",
      imageUrl: "",
      isFlied: true,
      uniqueId: "90_1",
    },
    {
      id: "91",
      pokemonName: "Cloyster",
      imageUrl: "",
      isFlied: true,
      uniqueId: "91_1",
    },
    {
      id: "92",
      pokemonName: "Gastly",
      imageUrl: "",
      isFlied: true,
      uniqueId: "92_1",
    },
    {
      id: "93",
      pokemonName: "Haunter",
      imageUrl: "",
      isFlied: true,
      uniqueId: "93_1",
    },
    {
      id: "94",
      pokemonName: "Gengar",
      imageUrl: "",
      isFlied: true,
      uniqueId: "94_1",
    },
    {
      id: "95",
      pokemonName: "Onix",
      imageUrl: "",
      isFlied: true,
      uniqueId: "95_1",
    },
    {
      id: "96",
      pokemonName: "Drowzee",
      imageUrl: "",
      isFlied: true,
      uniqueId: "96_1",
    },
    {
      id: "97",
      pokemonName: "Hypno",
      imageUrl: "",
      isFlied: true,
      uniqueId: "97_1",
    },
  ],
  shuffledData: [],
};

// 배열을 셔플하는 함수
const shuffleArray = (array: Pokemon[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// 셔플된 카드를 생성하는 리듀서
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

      // 동일한 카드가 두 장씩 들어가도록 설정
      const withUniqueIds = selected.flatMap((pokemon) => [
        { ...pokemon, uniqueId: `${pokemon.id}_1` }, // 첫 번째 카드
        { ...pokemon, uniqueId: `${pokemon.id}_2` }, // 두 번째 카드
      ]);

      state.shuffledData = shuffleArray(withUniqueIds); // 셔플
    },
    setAllCardsFlip: (state) => {
      // 셔플된 데이터의 모든 카드를 업데이트하여 isFlied를 true로 설정
      state.shuffledData = state.shuffledData.map((pokemon) => ({
        ...pokemon,
        isFlied: false,
      }));
    },
    setFlipCard: (state, action: PayloadAction<string>) => {
      // uniqueId를 매개변수로 받아 해당 카드를 찾아 isFlied를 true로 설정
      const uniqueId = action.payload;
      state.shuffledData = state.shuffledData.map((pokemon) => {
        if (pokemon.uniqueId === uniqueId) {
          return { ...pokemon, isFlied: true }; // 해당 카드만 업데이트
        }
        return pokemon;
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
} = pokemonSlice.actions;
export const pokemons = (state: RootState) => state.pokemonSlice.data;
export const shuffledPokemons = (state: RootState) =>
  state.pokemonSlice.shuffledData;
