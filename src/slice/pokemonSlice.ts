import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Pokemon {
  id: string; // 고유한 ID
  uniqueId: string; // 셔플된 카드마다 구별되는 고유한 ID
  pokemonName: string;
  number: number;
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
      number: 1,
      imageUrl: "",
      isFlied: false,
      uniqueId: "1_1",
    },
    {
      id: "2",
      pokemonName: "Ivysaur",
      number: 2,
      imageUrl: "",
      isFlied: false,
      uniqueId: "2_1",
    },
    {
      id: "3",
      pokemonName: "Venusaur",
      number: 3,
      imageUrl: "",
      isFlied: false,
      uniqueId: "3_1",
    },
    {
      id: "4",
      pokemonName: "Charmander",
      number: 4,
      imageUrl: "",
      isFlied: false,
      uniqueId: "4_1",
    },
    {
      id: "5",
      pokemonName: "Charmeleon",
      number: 5,
      imageUrl: "",
      isFlied: false,
      uniqueId: "5_1",
    },
    {
      id: "6",
      pokemonName: "Charizard",
      number: 6,
      imageUrl: "",
      isFlied: false,
      uniqueId: "6_1",
    },
    {
      id: "7",
      pokemonName: "Squirtle",
      number: 7,
      imageUrl: "",
      isFlied: false,
      uniqueId: "7_1",
    },
    {
      id: "8",
      pokemonName: "Wartortle",
      number: 8,
      imageUrl: "",
      isFlied: false,
      uniqueId: "8_1",
    },
    {
      id: "9",
      pokemonName: "Blastoise",
      number: 9,
      imageUrl: "",
      isFlied: false,
      uniqueId: "9_1",
    },
    {
      id: "10",
      pokemonName: "Caterpie",
      number: 10,
      imageUrl: "",
      isFlied: false,
      uniqueId: "10_1",
    },
    {
      id: "72",
      pokemonName: "Tentacool",
      number: 72,
      imageUrl: "",
      isFlied: false,
      uniqueId: "72_1",
    },
    {
      id: "73",
      pokemonName: "Tentacruel",
      number: 73,
      imageUrl: "",
      isFlied: false,
      uniqueId: "73_1",
    },
    {
      id: "74",
      pokemonName: "Geodude",
      number: 74,
      imageUrl: "",
      isFlied: false,
      uniqueId: "74_1",
    },
    {
      id: "75",
      pokemonName: "Graveler",
      number: 75,
      imageUrl: "",
      isFlied: false,
      uniqueId: "75_1",
    },
    {
      id: "76",
      pokemonName: "Golem",
      number: 76,
      imageUrl: "",
      isFlied: false,
      uniqueId: "76_1",
    },
    {
      id: "77",
      pokemonName: "Ponyta",
      number: 77,
      imageUrl: "",
      isFlied: false,
      uniqueId: "77_1",
    },
    {
      id: "78",
      pokemonName: "Rapidash",
      number: 78,
      imageUrl: "",
      isFlied: false,
      uniqueId: "78_1",
    },
    {
      id: "79",
      pokemonName: "Slowpoke",
      number: 79,
      imageUrl: "",
      isFlied: false,
      uniqueId: "79_1",
    },
    {
      id: "80",
      pokemonName: "Slowbro",
      number: 80,
      imageUrl: "",
      isFlied: false,
      uniqueId: "80_1",
    },
    {
      id: "81",
      pokemonName: "Magnemite",
      number: 81,
      imageUrl: "",
      isFlied: false,
      uniqueId: "81_1",
    },
    {
      id: "82",
      pokemonName: "Magneton",
      number: 82,
      imageUrl: "",
      isFlied: false,
      uniqueId: "82_1",
    },
    {
      id: "83",
      pokemonName: "Farfetch'd",
      number: 83,
      imageUrl: "",
      isFlied: false,
      uniqueId: "83_1",
    },
    {
      id: "84",
      pokemonName: "Doduo",
      number: 84,
      imageUrl: "",
      isFlied: false,
      uniqueId: "84_1",
    },
    {
      id: "85",
      pokemonName: "Dodrio",
      number: 85,
      imageUrl: "",
      isFlied: false,
      uniqueId: "85_1",
    },
    {
      id: "86",
      pokemonName: "Seel",
      number: 86,
      imageUrl: "",
      isFlied: false,
      uniqueId: "86_1",
    },
    {
      id: "87",
      pokemonName: "Dewgong",
      number: 87,
      imageUrl: "",
      isFlied: false,
      uniqueId: "87_1",
    },
    {
      id: "88",
      pokemonName: "Grimer",
      number: 88,
      imageUrl: "",
      isFlied: false,
      uniqueId: "88_1",
    },
    {
      id: "89",
      pokemonName: "Muk",
      number: 89,
      imageUrl: "",
      isFlied: false,
      uniqueId: "89_1",
    },
    {
      id: "90",
      pokemonName: "Shellder",
      number: 90,
      imageUrl: "",
      isFlied: false,
      uniqueId: "90_1",
    },
    {
      id: "91",
      pokemonName: "Cloyster",
      number: 91,
      imageUrl: "",
      isFlied: false,
      uniqueId: "91_1",
    },
    {
      id: "92",
      pokemonName: "Gastly",
      number: 92,
      imageUrl: "",
      isFlied: false,
      uniqueId: "92_1",
    },
    {
      id: "93",
      pokemonName: "Haunter",
      number: 93,
      imageUrl: "",
      isFlied: false,
      uniqueId: "93_1",
    },
    {
      id: "94",
      pokemonName: "Gengar",
      number: 94,
      imageUrl: "",
      isFlied: false,
      uniqueId: "94_1",
    },
    {
      id: "95",
      pokemonName: "Onix",
      number: 95,
      imageUrl: "",
      isFlied: false,
      uniqueId: "95_1",
    },
    {
      id: "96",
      pokemonName: "Drowzee",
      number: 96,
      imageUrl: "",
      isFlied: false,
      uniqueId: "96_1",
    },
    {
      id: "97",
      pokemonName: "Hypno",
      number: 97,
      imageUrl: "",
      isFlied: false,
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
    setAllFliedTrue: (state) => {
      // 셔플된 데이터의 모든 카드를 업데이트하여 isFlied를 true로 설정
      state.shuffledData = state.shuffledData.map((pokemon) => ({
        ...pokemon,
        isFlied: true,
      }));
    },
    setFlipCard: (state, action: PayloadAction<string>) => {
      // uniqueId를 매개변수로 받아 해당 카드를 찾아 isFlied를 true로 설정
      const uniqueId = action.payload;
      state.shuffledData = state.shuffledData.map((pokemon) => {
        if (pokemon.uniqueId === uniqueId) {
          return { ...pokemon, isFlied: false }; // 해당 카드만 업데이트
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
  setAllFliedTrue,
  setFlipCard,
} = pokemonSlice.actions;
export const pokemons = (state: RootState) => state.pokemonSlice.data;
export const shuffledPokemons = (state: RootState) =>
  state.pokemonSlice.shuffledData;
