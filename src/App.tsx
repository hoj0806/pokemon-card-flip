import "./App.css";
import Main from "./components/Main";
import SelectDifference from "./components/SelectDifference";
import { useAppSelector } from "./hooks/useAppSelector";
import AppWrapper from "./layout/AppWrapper";
import { selectMode } from "./slice/modeSlice";
import { AnimatePresence } from "framer-motion";
import { fetchPokemonData } from "./util/http";
import { useQuery } from "@tanstack/react-query";
import GameBoard from "./components/GameBoard";
// import { pokemons, setPokemonData } from "./slice/pokemonSlice";
// import { useAppDispatch } from "./hooks/useAppDispatch";

const App = () => {
  const currentMode = useAppSelector(selectMode);

  const { data, isPending, isError } = useQuery({
    queryFn: fetchPokemonData,
    queryKey: ["pokemon"],
  });

  let content;

  if (isPending) {
    content = <div>로딩중입니다...</div>;
  }

  if (isError) {
    content = <div>에러발생!!</div>;
  }

  if (data) {
    content = (
      <AnimatePresence mode='wait'>
        {currentMode === "main" && <Main />}
        {currentMode === "selectDifference" && <SelectDifference />}
        {currentMode === "docs" && <div>도감화면입니다</div>}
        {currentMode === "game" && <GameBoard />}
      </AnimatePresence>
    );
  }
  return <AppWrapper>{content}</AppWrapper>;
};

export default App;
