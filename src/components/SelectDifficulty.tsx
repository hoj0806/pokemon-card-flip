import SelectButton from "../ui/SelectButton";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setMode } from "../slice/modeSlice";
import { generateShuffledPokemon } from "../slice/pokemonSlice";

const SelectDifficulty = () => {
  const dispatch = useAppDispatch();

  const easyModeButtonHandler = () => {
    dispatch(setMode("game"));
    dispatch(generateShuffledPokemon(5));
  };

  const normalModeButtonHandler = () => {
    dispatch(setMode("game"));
    dispatch(generateShuffledPokemon(10));
  };

  const hardModeButtonHandler = () => {
    dispatch(setMode("game"));
    dispatch(generateShuffledPokemon(15));
  };

  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-16'>
      <h1 className='text-center mb-[20px] font-bold text-3xl md:text-[50px] lg:text-[75px]'>
        난이도 선택
      </h1>
      <div className='flex flex-col gap-[80px]'>
        <SelectButton buttonColor='#EF4444' onClick={easyModeButtonHandler}>
          쉬움
        </SelectButton>
        <SelectButton buttonColor='#FACC15' onClick={normalModeButtonHandler}>
          보통
        </SelectButton>
        <SelectButton buttonColor='#3B82F6' onClick={hardModeButtonHandler}>
          어려움
        </SelectButton>
      </div>
    </div>
  );
};

export default SelectDifficulty;
