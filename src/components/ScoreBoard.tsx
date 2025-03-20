import { useAppSelector } from "../hooks/useAppSelector";
import { currentScore } from "../slice/scoreSlice";

const ScoreBoard = () => {
  const score = useAppSelector(currentScore);
  return (
    <>
      <h2>Score : {score}</h2>
    </>
  );
};

export default ScoreBoard;
