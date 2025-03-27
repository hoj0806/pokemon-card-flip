import SelectButton from "../ui/SelectButton";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setMode } from "../slice/modeSlice";
import { clenUpSelectCard } from "../slice/pokemonSlice";

import { resetScore, resetCombo, currentScore } from "../slice/scoreSlice";
import { useAppSelector } from "../hooks/useAppSelector";

const GameEnd: React.FC<{
  setIsWin: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTimeOut: React.Dispatch<React.SetStateAction<boolean>>;
  setResetBoardKey: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setIsWin, setIsTimeOut, setResetBoardKey }) => {
  const dispatch = useAppDispatch();

  const handleMainButton = () => {
    dispatch(setMode("main"));
    dispatch(clenUpSelectCard());
    dispatch(resetScore());
    dispatch(resetCombo());
  };

  const handleSelectDifference = () => {
    dispatch(setMode("selectDifference"));
    dispatch(clenUpSelectCard());
    dispatch(resetScore());
    dispatch(resetCombo());
  };

  const score = useAppSelector(currentScore);

  return (
    <div className='w-full h-screen bg-gray-500 absolute top-0 flex items-center justify-center'>
      <div className='w-[400px] h-[300px] bg-white rounded-md text-center p-2  flex flex-col items-center gap-10  md:w-[500px] md:h-[350px] md:p-4 lg:w-[700px] lg:h-[450px] lg:p-8'>
        <p className='md:text-3xl text-black text-xl'>게임종료!</p>
        <SelectButton onClick={handleMainButton} buttonColor='#22C55E'>
          메인으로
        </SelectButton>
        <SelectButton onClick={handleSelectDifference} buttonColor='#A855F7'>
          난이도 선택
        </SelectButton>
        <div className='md:text-3xl text-xl'>Your Score : {score}</div>
      </div>
    </div>
  );
};

export default GameEnd;
