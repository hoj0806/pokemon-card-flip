import SelectButton from "../ui/SelectButton";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setMode } from "../slice/modeSlice";
import { generateShuffledPokemon } from "../slice/pokemonSlice";

const SelectDifference = () => {
  const dispatch = useAppDispatch();

  const easyModeButtonHandler = () => {
    dispatch(setMode("game"));
    dispatch(generateShuffledPokemon(10));
  };

  const normalModeButtonHandler = () => {
    dispatch(setMode("game"));
    dispatch(generateShuffledPokemon(15));
  };

  const hardModeButtonHandler = () => {
    dispatch(setMode("game"));
    dispatch(generateShuffledPokemon(20));
  };

  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className='flex flex-col gap-[80px]'>
        <SelectButton buttonColor='#EF4444' onMode={easyModeButtonHandler}>
          쉬움
        </SelectButton>
        <SelectButton buttonColor='#FACC15' onMode={normalModeButtonHandler}>
          보통
        </SelectButton>
        <SelectButton buttonColor='#3B82F6' onMode={hardModeButtonHandler}>
          어려움
        </SelectButton>
      </div>
    </div>
  );
};

export default SelectDifference;
