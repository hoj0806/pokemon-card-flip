import "./App.css";
import Main from "./components/Main";
import SelectDifference from "./components/SelectDifference";
import AppWrapper from "./layout/AppWrapper";
import GameBoard from "./components/GameBoard";
import { useAppSelector } from "./hooks/useAppSelector";
import { selectMode } from "./slice/modeSlice";
import { fetchPokemonData } from "./util/http";
import { useQuery } from "@tanstack/react-query";
import Pokedex from "./components/Pokedex";
import { useEffect } from "react";
import { setPokemonData } from "./slice/pokemonSlice";
import { useAppDispatch } from "./hooks/useAppDispatch";

const App = () => {
  const currentMode = useAppSelector(selectMode);
  const dispatch = useAppDispatch();

  const { data, isPending, isError } = useQuery({
    queryFn: fetchPokemonData,
    queryKey: ["pokemon"],
  });

  useEffect(() => {
    if (data) {
      dispatch(setPokemonData(data));
    }
  }, [data, dispatch]);

  let content;

  if (isPending) {
    content = <div>로딩중입니다...</div>;
  }

  if (isError) {
    content = <div>에러발생!!</div>;
  }

  if (data) {
    content = (
      <>
        {currentMode === "main" && <Main />}
        {currentMode === "selectDifference" && <SelectDifference />}
        {currentMode === "game" && <GameBoard />}
        {currentMode === "docs" && <Pokedex />}
      </>
    );
  }

  return <AppWrapper>{content}</AppWrapper>;
};

export default App;
