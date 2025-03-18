import SelectDifference from "./SelectDifference";
import { useAppSelector } from "../hooks/useAppSelector";
import { selectMode } from "../slice/modeSlice";
import { shuffledPokemons } from "../slice/pokemonSlice";

import { useState } from "react";
import GameCard from "./GameCard";
const GameBoard = () => {
  const currentMode = useAppSelector(selectMode);
  const shuffleCards = useAppSelector(shuffledPokemons);
  console.log(shuffleCards.length);
  return (
    <div>
      <div className='grid grid-cols-5'>
        {shuffleCards.map((card) => {
          return <GameCard {...card} />;
        })}
      </div>
    </div>
  );
};

export default GameBoard;
