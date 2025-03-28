import Score from "./Score";
import { useEffect } from "react";
import {
  combo,
  currentScore,
  highScore,
  updateHighScore,
} from "../slice/scoreSlice";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { selectDifficulty } from "../slice/modeSlice";

const ScoreBoard = () => {
  const score = useAppSelector(currentScore);
  const highScores = useAppSelector(highScore);
  const currentCombo = useAppSelector(combo);
  const currentDifficulty = useAppSelector(selectDifficulty);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentDifficulty && score > highScores[currentDifficulty]) {
      dispatch(updateHighScore(currentDifficulty, score));
    }
  }, [score, highScores, dispatch, currentDifficulty]);

  return (
    <div className='top-[50px] flex gap-10'>
      <Score text='score'>{score}</Score>
      <Score text='highscore'>{highScores[currentDifficulty]}</Score>
      <Score text='combo'>{currentCombo}</Score>
    </div>
  );
};

export default ScoreBoard;
