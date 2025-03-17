import "./App.css";
import Main from "./components/Main";
import SelectDifference from "./components/SelectDifference";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import AppWrapper from "./layout/AppWrapper";
import { selectMode, setMode } from "./slice/modeSlice";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const currentMode = useAppSelector(selectMode);
  const dispatch = useAppDispatch();

  const mainButtonHandler = () => {
    dispatch(setMode("main"));
  };

  return (
    <AppWrapper>
      <AnimatePresence mode='wait'>
        {currentMode === "main" && <Main />}
      </AnimatePresence>
      <AnimatePresence mode='wait'>
        {currentMode === "selectDifference" && <SelectDifference />}
      </AnimatePresence>
      <AnimatePresence>
        {currentMode === "game" && <div>게임화면입니다</div>}
      </AnimatePresence>
      {currentMode === "docs" && <div>도감화면입니다</div>}
    </AppWrapper>
  );
};

export default App;
