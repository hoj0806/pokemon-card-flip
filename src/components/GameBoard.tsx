import { useAppSelector } from "../hooks/useAppSelector";
import {
  clenUpSelectCard,
  setCorrectCard,
  pickCard,
  selectCard,
  setFlipCard,
  setWrongCardFlip,
  shuffledPokemons,
  correctPokemons,
} from "../slice/pokemonSlice";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setAllCardsFlip } from "../slice/pokemonSlice";

import GameCard from "./GameCard";
import GameTimer from "./GameTimer";
import GameEnd from "./GameEnd";
import ScoreBoard from "./ScoreBoard";
import {
  combo,
  increaseByCombo,
  increaseCombo,
  resetCombo,
} from "../slice/scoreSlice";
const GameBoard = () => {
  const [isTimeOut, setIsTimeOut] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const isEndGame = isWin || isTimeOut;

  const shuffleCards = useAppSelector(shuffledPokemons);
  const [isClickEnabled, setIsClickEnabled] = useState(false); // 클릭 활성화 상태
  const [resetTimerKey, setResetTimerKey] = useState(0);
  const [resetGameBoardKey, setResetBoardKey] = useState(0);
  const dispatch = useAppDispatch();
  const selectCards = useAppSelector(selectCard);
  const correctPokemonsData = useAppSelector(correctPokemons);
  const currentCombo = useAppSelector(combo);

  let gameBoardClass = "";
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
      if (firstName === secondName) {
        const flipTimer = setTimeout(() => {
          dispatch(increaseByCombo(currentCombo));
          dispatch(setCorrectCard(firstName));
          dispatch(clenUpSelectCard());
          dispatch(increaseCombo());
        }, 1000);
        return () => clearTimeout(flipTimer); // 클린업
      } else {
        const flipTimer = setTimeout(() => {
          dispatch(setWrongCardFlip(firstName));
          dispatch(setWrongCardFlip(secondName));
          dispatch(clenUpSelectCard());
          dispatch(resetCombo());
        }, 1000);

        return () => clearTimeout(flipTimer); // 클린업
      }
    }
  }, [selectCards, dispatch, currentCombo]);

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

  useEffect(() => {
    if (correctPokemonsData.length === shuffleCards.length) {
      setIsWin(true);
    }
  }, [correctPokemonsData.length, shuffleCards.length]);

  if (shuffleCards.length === 20) {
    gameBoardClass =
      "grid grid-cols-5 mx-auto  gap-4 mt-[300px] w-[400px] md:mt-[250px]  md:w-[600px] lg:grid-cols-5 lg:mt-[200px] xl:w-[700px] xl:mt-[140px]";
  } else if (shuffleCards.length === 30) {
    gameBoardClass =
      "grid grid-cols-5 mx-auto  gap-4 mt-[200px] w-[400px] md:mt-[170px] md:grid-cols-6 md:w-[600px] lg:grid-cols-10 lg:w-[1050px] lg:mt-[250px] xl:w-[1250px] xl:mt-[200px]";
  } else {
    gameBoardClass =
      "grid grid-cols-5 mx-auto  gap-4 mt-[100px] w-[400px] md:mt-[150px] md:grid-cols-8 md:w-[800px] lg:grid-cols-10 lg:w-[1050px] lg:mt-[200px] xl:w-[1250px] xl:mt-[150px]";
  }

  return (
    <div className='relative'>
      <ScoreBoard />
      <GameTimer
        setIsTimeOut={setIsTimeOut}
        duration={300}
        resetTimerKey={resetTimerKey}
      />
      <div className={gameBoardClass}>
        {shuffleCards.map((card) => {
          return (
            <GameCard
              {...card}
              key={card.uniqueId}
              handleCardClick={handleCardClick}
              uniqueId={card.uniqueId}
              isCorrect={card.isCorrect}
              resetGameBoardKey={resetGameBoardKey}
            />
          );
        })}
      </div>
      {isEndGame && (
        <GameEnd
          setIsWin={setIsWin}
          setResetTimerKey={setResetTimerKey}
          setIsTimeOut={setIsTimeOut}
          setResetBoardKey={setResetBoardKey}
        />
      )}
    </div>
  );
};

export default GameBoard;
