import SelectButton from "../ui/SelectButton";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setMode } from "../slice/modeSlice";
import Logo from "./Logo";

const Main = () => {
  const dispatch = useAppDispatch();

  const selectDifferenceButtonHandler = () => {
    dispatch(setMode("selectDifference"));
  };

  const docsButtonHandler = () => {
    dispatch(setMode("docs"));
  };

  return (
    <div className='absolute bottom-[120px] left-1/2 -translate-x-1/2'>
      <Logo />
      <div className='flex flex-col gap-5'>
        <SelectButton
          onClick={selectDifferenceButtonHandler}
          buttonColor='#181818'
        >
          게임시작
        </SelectButton>
        <SelectButton onClick={docsButtonHandler} buttonColor='#181818'>
          도감보기
        </SelectButton>
      </div>
    </div>
  );
};

export default Main;
