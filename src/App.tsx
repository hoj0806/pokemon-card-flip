import "./App.css";
import Main from "./components/Main";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import AppWrapper from "./layout/AppWrapper";
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
    <AppWrapper>
      <Main />
    </AppWrapper>
  );
};

export default App;
