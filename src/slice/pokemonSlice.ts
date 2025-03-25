import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface PokemonAbility {
  abilityKoreanName: string;
}

interface PokemonData {
  id: number;
  abilities: PokemonAbility[];
  height: number;
  weight: number;
  types: string[];
  isFliped: boolean;
  isCorrect: boolean;
  imageUrl: string;
  pokemonName: string;
}

interface shuffledDataType {
  isFliped: boolean;
  pokemonName: string;
  imageUrl: string;
  uniqueId: string;
  isCorrect: boolean;
}

interface SelctCardType {
  pokemonName: string;
  uniqueId: string;
}
// 포켓몬 데이터 배열 타입
type PokemonDataArray = PokemonData[];

// 셔플 데이터 배열 타입
type shuffleDataArray = shuffledDataType[];

type selectCardDataArray = SelctCardType[];

interface pokemonSliceType {
  data: PokemonDataArray; // 원본 데이터
  shuffledData: shuffleDataArray; // 셔플된 데이터
  selectCard: selectCardDataArray;
}

const initialState: pokemonSliceType = {
  data: [],
  shuffledData: [],
  selectCard: [],
};

// 배열을 셔플하는 함수
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
        { ...pokemon, uniqueId: `${pokemon.id}_1` }, // 첫 번째 카드
        { ...pokemon, uniqueId: `${pokemon.id}_2` }, // 두 번째 카드
      ]);

      state.shuffledData = shuffleArray(withUniqueIds); // 셔플
    },
    setAllCardsFlip: (state) => {
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
    deleteSamePickCard: (state) => {
      state.selectCard.pop();
    },
    pickCard: (state, action: PayloadAction<SelctCardType>) => {
      state.selectCard.push(action.payload);
    },
    clenUpSelectCard: (state) => {
      state.selectCard = [];
    },

    // New reducers for sorting
    sortById: (state, action) => {
      const sortOrder = action.payload; // 'asc' 또는 'desc'
      state.data = [...state.data].sort((a, b) =>
        sortOrder === "asc" ? a.id - b.id : b.id - a.id
      );
    },
    sortByName: (state, action) => {
      const sortOrder = action.payload; // 'asc' 또는 'desc'
      state.data = [...state.data].sort((a, b) =>
        sortOrder === "asc"
          ? a.pokemonName.localeCompare(b.pokemonName, "ko")
          : b.pokemonName.localeCompare(a.pokemonName, "ko")
      );
    },

    sortByType: (state, action: PayloadAction<"asc" | "desc">) => {
      const sortOrder = action.payload; // 'asc' 또는 'desc'

      state.data = [...state.data].sort((a, b) => {
        const typeA = a.types[0]; // 포켓몬 A의 첫 번째 타입
        const typeB = b.types[0]; // 포켓몬 B의 첫 번째 타입

        // 정렬 기준에 맞게 비교
        if (sortOrder === "asc") {
          return typeA.localeCompare(typeB); // 오름차순
        } else {
          return typeB.localeCompare(typeA); // 내림차순
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
