import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import SelectDifference from "./components/SelectDifference";
import { useAppSelector } from "./hooks/useAppSelector";
import AppWrapper from "./layout/AppWrapper";
import { selectMode } from "./slice/modeSlice";
import { AnimatePresence } from "framer-motion";
import { fetchPokemonData } from "./util/http";
import { useQuery } from "@tanstack/react-query";
import { pokemons, setPokemonData } from "./slice/pokemonSlice";
import { useAppDispatch } from "./hooks/useAppDispatch";

const App = () => {
  const currentMode = useAppSelector(selectMode);
  const pokemonDatas = useAppSelector(pokemons);
  // const [pokemonData, setPokemonData] = useState<any[]>([]);

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
      <AnimatePresence mode='wait'>
        {currentMode === "main" && <Main />}
        {currentMode === "selectDifference" && <SelectDifference />}
        {currentMode === "game" && <div>게임화면입니다</div>}
        {currentMode === "docs" && <div>도감화면입니다</div>}
      </AnimatePresence>
    );
  }
  return <AppWrapper>{content}</AppWrapper>;
};

export default App;
