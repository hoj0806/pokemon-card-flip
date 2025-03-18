import SelectDifference from "./SelectDifference";
import { useAppSelector } from "../hooks/useAppSelector";
import { selectMode } from "../slice/modeSlice";
const GameBoard = () => {
  const currentMode = useAppSelector(selectMode);

  return (
    <div>
      <div>카드들</div>
    </div>
  );
};

export default GameBoard;
