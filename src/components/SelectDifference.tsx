import SelectButton from "../ui/SelectButton";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setMode } from "../slice/modeSlice";

const SelectDifference = () => {
  const dispatch = useAppDispatch();

  const gameButtonHandler = () => {
    dispatch(setMode("game"));
  };

  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className='flex flex-col gap-[80px]'>
        <SelectButton buttonColor='#EF4444' onMode={gameButtonHandler}>
          쉬움
        </SelectButton>
        <SelectButton buttonColor='#FACC15' onMode={gameButtonHandler}>
          보통
        </SelectButton>
        <SelectButton buttonColor='#3B82F6' onMode={gameButtonHandler}>
          어려움
        </SelectButton>
      </div>
    </div>
  );
};

export default SelectDifference;
