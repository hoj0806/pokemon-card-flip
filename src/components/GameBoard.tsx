import { useAppSelector } from "../hooks/useAppSelector";
import { shuffledPokemons } from "../slice/pokemonSlice";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setAllCardsFlip } from "../slice/pokemonSlice";

import GameCard from "./GameCard";
const GameBoard = () => {
  const shuffleCards = useAppSelector(shuffledPokemons);
  const [isClickEnabled, setIsClickEnabled] = useState(false); // 클릭 활성화 상태

  const dispatch = useAppDispatch();

  useEffect(() => {
    const flipTimer = setTimeout(() => {
      dispatch(setAllCardsFlip()); // 3초 후 카드가 setFlipped뒤집힘
    }, 3000);

    const clickTimer = setTimeout(() => {
      setIsClickEnabled(true); // 4초 후 클릭 가능
    }, 4000);

    return () => {
      clearTimeout(flipTimer);
      clearTimeout(clickTimer); // 타이머 정리
    };
  }, [dispatch]);

  return (
    <div>
      <div className='grid grid-cols-5'>
        {shuffleCards.map((card) => {
          return (
            <GameCard
              {...card}
              key={card.uniqueId}
              isClickEnabled={isClickEnabled}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GameBoard;
