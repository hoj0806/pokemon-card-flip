import SelectButton from "../ui/SelectButton";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setMode } from "../slice/modeSlice";
const Main = () => {
  const dispatch = useAppDispatch();

  const gameButtonHandler = () => {
    dispatch(setMode("game"));
  };

  const docsButtonHandler = () => {
    dispatch(setMode("docs"));
  };
  return (
    <div className='absolute bottom-[120px] left-1/2 -translate-x-1/2'>
      <div className='flex flex-col gap-5'>
        <SelectButton onMode={gameButtonHandler}>게임시작</SelectButton>
        <SelectButton onMode={docsButtonHandler}>도감보기</SelectButton>
      </div>
    </div>
  );
};

export default Main;
