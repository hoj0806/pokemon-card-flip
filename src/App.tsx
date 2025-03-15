import "./App.css";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { selectMode, setMode } from "./slice/modeSlice";

const App = () => {
  const currentMode = useAppSelector(selectMode);
  const dispatch = useAppDispatch();

  const mainButtonHandler = () => {
    dispatch(setMode("main"));
  };

  const gameButtonHandler = () => {
    dispatch(setMode("game"));
  };

  return (
    <div className='flex flex-col items-center gap-4 mt-10'>
      {currentMode === "main" && (
        <h1 className='text-2xl font-bold'>메인 화면 입니다</h1>
      )}
      {currentMode === "game" && (
        <h1 className='text-2xl font-bold'>게임 화면 입니다</h1>
      )}

      <div className='flex gap-4'>
        <button
          onClick={mainButtonHandler}
          className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all'
        >
          메인으로
        </button>

        <button
          onClick={gameButtonHandler}
          className='px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 transition-all'
        >
          게임하기
        </button>
      </div>
    </div>
  );
};

export default App;
