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
  deleteSamePickCard,
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
import { selectDifficulty } from "../slice/modeSlice";

const GameBoard = () => {
  const dispatch = useAppDispatch();
  const shuffleCards = useAppSelector(shuffledPokemons);
  const selectCards = useAppSelector(selectCard);
  const currentDifficulty = useAppSelector(selectDifficulty);

  const [isTimeOut, setIsTimeOut] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const isEndGame = isWin || isTimeOut;
  const [isClickEnabled, setIsClickEnabled] = useState(false);

  const correctPokemonsData = useAppSelector(correctPokemons);
  const currentCombo = useAppSelector(combo);

  let gameBoardClass = {
    easy: "grid gap-4 grid-cols-4 mt-[150px] md:mt-[120px] xl:mt-[50px]",
    normal:
      "grid grid-cols-5 gap-4 mt-[80px] md:mt-[60px] lg:mt-[40px] xl:grid-cols-10 xl:mt-[140px]",
    hard: "grid grid-cols-5 gap-4 md:grid-cols-6 lg:mt-[100px] md:mt-[15px] lg:grid-cols-10 mt-[40px] xl:mt-[55px]",
  };

  const validDifficulty =
    currentDifficulty === "easy" ||
    currentDifficulty === "normal" ||
    currentDifficulty === "hard";

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
      const firstUniqueId = selectCards[0].uniqueId;
      const secondUniqueId = selectCards[1].uniqueId;

      if (firstUniqueId === secondUniqueId) {
        dispatch(deleteSamePickCard());
      } else {
        if (firstName === secondName) {
          const flipTimer = setTimeout(() => {
            dispatch(increaseByCombo(currentCombo));
            dispatch(setCorrectCard(firstName));
            dispatch(clenUpSelectCard());
            dispatch(increaseCombo());
          }, 50);
          return () => clearTimeout(flipTimer);
        } else {
          const flipTimer = setTimeout(() => {
            dispatch(setWrongCardFlip(firstName));
            dispatch(setWrongCardFlip(secondName));
            dispatch(clenUpSelectCard());
            dispatch(resetCombo());
          }, 700);

          return () => clearTimeout(flipTimer);
        }
      }
    }
  }, [selectCards, dispatch, currentCombo]);

  useEffect(() => {
    const flipTimer = setTimeout(() => {
      dispatch(setAllCardsFlip());
    }, 3000);

    const clickTimer = setTimeout(() => {
      setIsClickEnabled(true);
    }, 4000);

    return () => {
      clearTimeout(flipTimer);
      clearTimeout(clickTimer);
    };
  }, [dispatch]);

  useEffect(() => {
    if (correctPokemonsData.length === shuffleCards.length) {
      setIsWin(true);
    }
  }, [correctPokemonsData.length, shuffleCards.length]);

  return (
    <div className='relative p-8 flex flex-col items-center justify-center gap-6 h-full'>
      <GameTimer setIsTimeOut={setIsTimeOut} duration={64} />
      <ScoreBoard />
      <div className={validDifficulty ? gameBoardClass[currentDifficulty] : ""}>
        {shuffleCards.map((card) => {
          return (
            <GameCard
              key={card.uniqueId}
              handleCardClick={handleCardClick}
              uniqueId={card.uniqueId}
              isCorrect={card.isCorrect}
              isFliped={card.isFliped}
              pokemonName={card.pokemonName}
              imageUrl={card.imageUrl}
              type={card.types[0]}
            />
          );
        })}
      </div>
      {isEndGame && <GameEnd isWin={isWin} />}
    </div>
  );
};

export default GameBoard;
