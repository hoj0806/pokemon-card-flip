import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Pokemon {
  id: string; // 고유한 ID
  uniqueId: string; // 셔플된 카드마다 구별되는 고유한 ID
  pokemonName: string;
  imageUrl: string;
  isFliped: boolean;
  isCorrect: boolean;
}

interface SelctCardType {
  pokemonName: string;
  uniqueId: string; // 셔플된 카드마다 구별되는 고유한 ID
}

interface pokemonSliceType {
  data: Pokemon[]; // 원본 데이터
  shuffledData: Pokemon[]; // 셔플된 데이터
  selectCard: SelctCardType[];
}

const imageUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const initialState: pokemonSliceType = {
  data: [
    {
      id: "1",
      pokemonName: "Bulbasaur",
      imageUrl: `${imageUrl}1.png`,
      isFliped: true,
      uniqueId: "1_1",
      isCorrect: false,
    },
    {
      id: "2",
      pokemonName: "Ivysaur",
      imageUrl: `${imageUrl}2.png`,
      isFliped: true,
      uniqueId: "2_1",
      isCorrect: false,
    },
    {
      id: "3",
      pokemonName: "Venusaur",
      imageUrl: `${imageUrl}3.png`,
      isFliped: true,
      uniqueId: "3_1",
      isCorrect: false,
    },
    {
      id: "4",
      pokemonName: "Charmander",
      imageUrl: `${imageUrl}4.png`,
      isFliped: true,
      uniqueId: "4_1",
      isCorrect: false,
    },
    {
      id: "5",
      pokemonName: "Charmeleon",
      imageUrl: `${imageUrl}5.png`,
      isFliped: true,
      uniqueId: "5_1",
      isCorrect: false,
    },
    {
      id: "6",
      pokemonName: "Charizard",
      imageUrl: `${imageUrl}6.png`,
      isFliped: true,
      uniqueId: "6_1",
      isCorrect: false,
    },
    {
      id: "7",
      pokemonName: "Squirtle",
      imageUrl: `${imageUrl}7.png`,
      isFliped: true,
      uniqueId: "7_1",
      isCorrect: false,
    },
    {
      id: "8",
      pokemonName: "Wartortle",
      imageUrl: `${imageUrl}8.png`,
      isFliped: true,
      uniqueId: "8_1",
      isCorrect: false,
    },
    {
      id: "9",
      pokemonName: "Blastoise",
      imageUrl: `${imageUrl}9.png`,
      isFliped: true,
      uniqueId: "9_1",
      isCorrect: false,
    },
    {
      id: "10",
      pokemonName: "Caterpie",
      imageUrl: `${imageUrl}10.png`,
      isFliped: true,
      uniqueId: "10_1",
      isCorrect: false,
    },
    {
      id: "72",
      pokemonName: "Tentacool",
      imageUrl: `${imageUrl}72.png`,
      isFliped: true,
      uniqueId: "72_1",
      isCorrect: false,
    },
    {
      id: "73",
      pokemonName: "Tentacruel",
      imageUrl: `${imageUrl}73.png`,
      isFliped: true,
      uniqueId: "73_1",
      isCorrect: false,
    },
    {
      id: "74",
      pokemonName: "Geodude",
      imageUrl: `${imageUrl}74.png`,
      isFliped: true,
      uniqueId: "74_1",
      isCorrect: false,
    },
    {
      id: "75",
      pokemonName: "Graveler",
      imageUrl: `${imageUrl}75.png`,
      isFliped: true,
      uniqueId: "75_1",
      isCorrect: false,
    },
    {
      id: "76",
      pokemonName: "Golem",
      imageUrl: `${imageUrl}76.png`,
      isFliped: true,
      uniqueId: "76_1",
      isCorrect: false,
    },
    {
      id: "77",
      pokemonName: "Ponyta",
      imageUrl: `${imageUrl}77.png`,
      isFliped: true,
      uniqueId: "77_1",
      isCorrect: false,
    },
    {
      id: "78",
      pokemonName: "Rapidash",
      imageUrl: `${imageUrl}78.png`,
      isFliped: true,
      uniqueId: "78_1",
      isCorrect: false,
    },
    {
      id: "79",
      pokemonName: "Slowpoke",
      imageUrl: `${imageUrl}79.png`,
      isFliped: true,
      uniqueId: "79_1",
      isCorrect: false,
    },
    {
      id: "80",
      pokemonName: "Slowbro",
      imageUrl: `${imageUrl}80.png`,
      isFliped: true,
      uniqueId: "80_1",
      isCorrect: false,
    },
    {
      id: "81",
      pokemonName: "Magnemite",
      imageUrl: `${imageUrl}81.png`,
      isFliped: true,
      uniqueId: "81_1",
      isCorrect: false,
    },
    {
      id: "82",
      pokemonName: "Magneton",
      imageUrl: `${imageUrl}82.png`,
      isFliped: true,
      uniqueId: "82_1",
      isCorrect: false,
    },
    {
      id: "83",
      pokemonName: "Farfetch'd",
      imageUrl: `${imageUrl}83.png`,
      isFliped: true,
      uniqueId: "83_1",
      isCorrect: false,
    },
    {
      id: "84",
      pokemonName: "Doduo",
      imageUrl: `${imageUrl}84.png`,
      isFliped: true,
      uniqueId: "84_1",
      isCorrect: false,
    },
    {
      id: "85",
      pokemonName: "Dodrio",
      imageUrl: `${imageUrl}85.png`,
      isFliped: true,
      uniqueId: "85_1",
      isCorrect: false,
    },
    {
      id: "86",
      pokemonName: "Seel",
      imageUrl: `${imageUrl}86.png`,
      isFliped: true,
      uniqueId: "86_1",
      isCorrect: false,
    },
    {
      id: "87",
      pokemonName: "Dewgong",
      imageUrl: `${imageUrl}87.png`,
      isFliped: true,
      uniqueId: "87_1",
      isCorrect: false,
    },
    {
      id: "88",
      pokemonName: "Grimer",
      imageUrl: `${imageUrl}88.png`,
      isFliped: true,
      uniqueId: "88_1",
      isCorrect: false,
    },
    {
      id: "89",
      pokemonName: "Muk",
      imageUrl: `${imageUrl}89.png`,
      isFliped: true,
      uniqueId: "89_1",
      isCorrect: false,
    },
    {
      id: "90",
      pokemonName: "Shellder",
      imageUrl: `${imageUrl}90.png`,
      isFliped: true,
      uniqueId: "90_1",
      isCorrect: false,
    },
    {
      id: "91",
      pokemonName: "Cloyster",
      imageUrl: `${imageUrl}91.png`,
      isFliped: true,
      uniqueId: "91_1",
      isCorrect: false,
    },
    {
      id: "92",
      pokemonName: "Gastly",
      imageUrl: `${imageUrl}92.png`,
      isFliped: true,
      uniqueId: "92_1",
      isCorrect: false,
    },
    {
      id: "93",
      pokemonName: "Haunter",
      imageUrl: `${imageUrl}93.png`,
      isFliped: true,
      uniqueId: "93_1",
      isCorrect: false,
    },
    {
      id: "94",
      pokemonName: "Gengar",
      imageUrl: `${imageUrl}94.png`,
      isFliped: true,
      uniqueId: "94_1",
      isCorrect: false,
    },
    {
      id: "95",
      pokemonName: "Onix",
      imageUrl: `${imageUrl}95.png`,
      isFliped: true,
      uniqueId: "95_1",
      isCorrect: false,
    },
    {
      id: "96",
      pokemonName: "Drowzee",
      imageUrl: `${imageUrl}96.png`,
      isFliped: true,
      uniqueId: "96_1",
      isCorrect: false,
    },
    {
      id: "97",
      pokemonName: "Hypno",
      imageUrl: `${imageUrl}97.png`,
      isFliped: true,
      uniqueId: "97_1",
      isCorrect: false,
    },
  ],
  shuffledData: [],
  selectCard: [],
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
      // 셔플된 데이터의 모든 카드를 업데이트하여 isFliped를 true로 설정
      state.shuffledData = state.shuffledData.map((pokemon) => ({
        ...pokemon,
        isFliped: false,
      }));
    },
    setFlipCard: (state, action: PayloadAction<string>) => {
      // uniqueId를 매개변수로 받아 해당 카드를 찾아 isFliped를 true로 설정
      const uniqueId = action.payload;
      state.shuffledData = state.shuffledData.map((pokemon) => {
        if (pokemon.uniqueId === uniqueId) {
          return { ...pokemon, isFliped: true }; // 해당 카드만 업데이트
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

    pickCard: (state, action: PayloadAction<SelctCardType>) => {
      state.selectCard.push(action.payload);
    },
    clenUpSelectCard: (state) => {
      state.selectCard = [];
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
} = pokemonSlice.actions;
export const pokemons = (state: RootState) => state.pokemonSlice.data;
export const shuffledPokemons = (state: RootState) =>
  state.pokemonSlice.shuffledData;
export const selectCard = (state: RootState) => state.pokemonSlice.selectCard;
