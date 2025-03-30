// props

export interface SelectButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  buttonColor: string;
}

export interface GameTimerProps {
  duration: number;
  setIsTimeOut: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ScoreProps {
  children: React.ReactNode;
  text: string;
}

export interface GameCardProps {
  isFliped: boolean;
  pokemonName: string;
  imageUrl: string;
  uniqueId: string;
  isCorrect: boolean;
  type: string;
  handleCardClick: (uniqueId: string, pokemonName: string) => void;
}

export interface GameEndPros {
  isWin: boolean;
}

export interface PokedexListDetailProps {
  selectPokemon: string;
  setPokedexDetailPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PokedexListProps {
  setPokedexDetailPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectPokemon: React.Dispatch<React.SetStateAction<string>>;
  sortedPokemons: PokemonData[];
}

export interface PokedexSortButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  text: string;
}
// data

interface PokemonAbility {
  abilityKoreanName: string;
}

export interface PokemonData {
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

export interface ModeType {
  mode: string;
  difficulty: "easy" | "normal" | "hard";
}

export interface ScoreType {
  score: number;
  combo: number;
  highScore: {
    easy: number;
    normal: number;
    hard: number;
  };
}

export interface shuffledDataType {
  isFliped: boolean;
  pokemonName: string;
  imageUrl: string;
  uniqueId: string;
  isCorrect: boolean;
  types: string[];
}

export interface SelctCardType {
  pokemonName: string;
  uniqueId: string;
}
export type PokemonDataArray = PokemonData[];
export type shuffleDataArray = shuffledDataType[];
export type selectCardDataArray = SelctCardType[];

export interface pokemonSliceType {
  data: PokemonDataArray;
  shuffledData: shuffleDataArray;
  selectCard: selectCardDataArray;
}

export interface AbilityInfo {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface LanguageEntry {
  language: {
    name: string;
    url: string;
  };
  name: string;
}

interface TypeInfo {
  name: string; // 타입의 영어 이름 (예: "normal")
  url: string; // 타입의 API URL
}

// 포켓몬 타입
export interface PokemonType {
  slot: number; // 타입 슬롯 번호 (예: 1)
  type: TypeInfo; // 타입 정보 (name, url 포함)
}
