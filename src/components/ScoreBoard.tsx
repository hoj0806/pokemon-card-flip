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

const ScoreBoard = () => {
  const score = useAppSelector(currentScore);
  const highScores = useAppSelector(highScore);
  const currentCombo = useAppSelector(combo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (score > highScores) {
      dispatch(updateHighScore(score));
    }
  }, [score, highScores, dispatch]);

  return (
    <div className='absolute md:top-16 right-1/2 translate-x-1/2 top-[50px] flex gap-2'>
      <Score text='score'>{score}</Score>
      <Score text='highscore'>{highScores}</Score>
      <Score text='combo'>{currentCombo}</Score>
    </div>
  );
};

export default ScoreBoard;
