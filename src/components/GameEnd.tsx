import SelectButton from "../ui/SelectButton";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setMode } from "../slice/modeSlice";
import {
  generateShuffledPokemon,
  clenUpSelectCard,
  shuffledPokemons,
} from "../slice/pokemonSlice";
import { useAppSelector } from "../hooks/useAppSelector";

const GameEnd: React.FC<{
  setIsWin: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTimeOut: React.Dispatch<React.SetStateAction<boolean>>;
  setResetTimerKey: React.Dispatch<React.SetStateAction<number>>;
  setResetBoardKey: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setIsWin, setIsTimeOut, setResetTimerKey, setResetBoardKey }) => {
  const dispatch = useAppDispatch();
  const suData = useAppSelector(shuffledPokemons);
  const handleMainButton = () => {
    dispatch(setMode("main"));
  };

  const handleResetButton = () => {
    dispatch(generateShuffledPokemon(2));
    dispatch(clenUpSelectCard()); // 선택된 카드 초기화
    setIsWin(false);
    setIsTimeOut(false);
    setResetTimerKey((prev) => prev + 1);
    setResetBoardKey((prev) => prev + 1);
    console.log(suData);
  };

  return (
    <div className='w-full h-full bg-black opacity-70 absolute top-0 flex items-center justify-center'>
      <div className='w-[700px] h-[400px] bg-white rounded-md text-center p-4 flex flex-col items-center gap-10'>
        <p className='text-3xl text-black'>게임종료!</p>
        <SelectButton onMode={handleMainButton} buttonColor='#22C55E'>
          메인으로
        </SelectButton>
        <SelectButton onMode={handleResetButton} buttonColor='#A855F7'>
          다시하기
        </SelectButton>
      </div>
    </div>
  );
};

export default GameEnd;
