import { useAppSelector } from "../hooks/useAppSelector";
import {
  clenUpSelectCard,
  pickCard,
  selectCard,
  setFlipCard,
  setWrongCardFlip,
  shuffledPokemons,
} from "../slice/pokemonSlice";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setAllCardsFlip } from "../slice/pokemonSlice";

import GameCard from "./GameCard";
const GameBoard = () => {
  const shuffleCards = useAppSelector(shuffledPokemons);
  const [isClickEnabled, setIsClickEnabled] = useState(false); // 클릭 활성화 상태

  const dispatch = useAppDispatch();
  const selectCards = useAppSelector(selectCard);
  const handleCardClick = (uniqueId: string, pokemonName: string) => {
    if (isClickEnabled && selectCards.length < 2) {
      dispatch(setFlipCard(uniqueId));
      dispatch(pickCard({ pokemonName, uniqueId }));
    }
  };

  useEffect(() => {
    if (selectCards.length === 2) {
      const firstName = selectCards[0].pokemonName;
      const secondName = selectCards[1].pokemonName;
      const id = selectCards[0];
      if (firstName === secondName) {
      } else {
        const flipTimer = setTimeout(() => {
          dispatch(setWrongCardFlip(firstName));
          dispatch(setWrongCardFlip(secondName));
          dispatch(clenUpSelectCard());
        }, 1000);

        return () => clearTimeout(flipTimer); // 클린업
      }
    }
  }, [selectCards, dispatch]);

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
    <div className='grid grid-cols-5 gap-3 w-[800px]'>
      {shuffleCards.map((card) => {
        return (
          <GameCard
            {...card}
            key={card.uniqueId}
            handleCardClick={handleCardClick}
            uniqueId={card.uniqueId}
          />
        );
      })}
    </div>
  );
};

export default GameBoard;
