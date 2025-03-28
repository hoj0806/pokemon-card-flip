import SelectButton from "../ui/SelectButton";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setMode } from "../slice/modeSlice";
import { generateShuffledPokemon } from "../slice/pokemonSlice";

const SelectDifficulty = () => {
  const dispatch = useAppDispatch();

  const easyModeButtonHandler = () => {
    dispatch(setMode("game"));
    dispatch(generateShuffledPokemon(6));
  };

  const normalModeButtonHandler = () => {
    dispatch(setMode("game"));
    dispatch(generateShuffledPokemon(10));
  };

  const hardModeButtonHandler = () => {
    dispatch(setMode("game"));
    dispatch(generateShuffledPokemon(15));
  };

  const handleMainButton = () => {
    dispatch(setMode("main"));
  };

  return (
    <div className='flex flex-col gap-16 mx-auto pt-[170px] md:pt-[100px]'>
      <h1 className='text-center mb-[20px] font-bold text-3xl md:text-[50px] lg:text-[75px]'>
        난이도 선택
      </h1>
      <div className='flex flex-col gap-[80px] mx-auto'>
        <SelectButton buttonColor='#EF4444' onClick={easyModeButtonHandler}>
          쉬움
        </SelectButton>
        <SelectButton buttonColor='#FACC15' onClick={normalModeButtonHandler}>
          보통
        </SelectButton>
        <SelectButton buttonColor='#3B82F6' onClick={hardModeButtonHandler}>
          어려움
        </SelectButton>
        <SelectButton buttonColor='#22C55E' onClick={handleMainButton}>
          메인으로
        </SelectButton>
      </div>
    </div>
  );
};

export default SelectDifficulty;
