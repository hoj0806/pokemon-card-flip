import SelectButton from "../ui/SelectButton";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setMode } from "../slice/modeSlice";
const GameEnd = () => {
  const dispatch = useAppDispatch();

  const handleMainButton = () => {
    dispatch(setMode("main"));
  };
  return (
    <div className='w-full h-full bg-black opacity-70 absolute top-0 flex items-center justify-center'>
      <div className='w-[700px] h-[400px] bg-white rounded-md text-center p-4'>
        <p className='text-3xl text-black'>게임종료!</p>
        <SelectButton onMode={handleMainButton} buttonColor='#22C55E'>
          메인으로
        </SelectButton>
      </div>
    </div>
  );
};

export default GameEnd;
