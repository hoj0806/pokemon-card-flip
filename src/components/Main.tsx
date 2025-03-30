import SelectButton from "../ui/SelectButton";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setMode } from "../slice/modeSlice";
import PokeFlipLogo from "./PokeFlipLogo";

const Main = () => {
  const dispatch = useAppDispatch();

  const selectDifficultyButtonHandler = () => {
    dispatch(setMode("selectDifference"));
  };

  const pokeDexButtonHandler = () => {
    dispatch(setMode("docs"));
  };

  return (
    <div className='absolute bottom-[120px] left-1/2 -translate-x-1/2'>
      <PokeFlipLogo />
      <div className='flex flex-col gap-5'>
        <SelectButton
          onClick={selectDifficultyButtonHandler}
          buttonColor='#87CEEB'
        >
          게임시작
        </SelectButton>
        <SelectButton onClick={pokeDexButtonHandler} buttonColor='#32CD32'>
          도감보기
        </SelectButton>
      </div>
    </div>
  );
};

export default Main;
