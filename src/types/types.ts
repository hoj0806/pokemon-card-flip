// props

import { ReactNode } from "react";

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
