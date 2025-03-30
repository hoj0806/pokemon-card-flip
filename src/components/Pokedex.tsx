import { useState } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { pokemons } from "../slice/pokemonSlice";
import PokedexList from "./PokedexList";
import PokedexListDetail from "./PokedexListDetail";
import {
  sortById,
  sortByName,
  setPokemonData,
  sortByType,
} from "../slice/pokemonSlice";
import { setMode } from "../slice/modeSlice";
import { motion } from "framer-motion";
import PokedexSortButton from "../ui/PokedexSortButton";

const Pokedex = () => {
  const dispatch = useAppDispatch();
  const pokemonData = useAppSelector(pokemons);
  const [selectPokemon, setSelectPokemon] = useState("");

  const [initialData] = useState(pokemonData);

  const [sortOrderId, setSortOrderId] = useState<"asc" | "desc">("desc");
  const [sortOrderName, setSortOrderName] = useState<"asc" | "desc">("asc");
  const [sortOrderType, setSortOrderType] = useState<"asc" | "desc">("asc");
  const [pokedexDetailPopupOpen, setPokedexDetailPopupOpen] = useState(false);

  const sortByIdHandler = () => {
    dispatch(sortById(sortOrderId));
    setSortOrderId(sortOrderId === "asc" ? "desc" : "asc");
  };

  const sortByNameHandler = () => {
    dispatch(sortByName(sortOrderName));
    setSortOrderName(sortOrderName === "asc" ? "desc" : "asc");
  };

  const sortByTypeHandler = () => {
    dispatch(sortByType(sortOrderType));
    setSortOrderType(sortOrderType === "asc" ? "desc" : "asc");
  };

  const resetFilters = () => {
    dispatch(setPokemonData(initialData));
    setSortOrderId("desc");
    setSortOrderName("asc");
    setSortOrderType("asc");
  };

  const handleClickMainButton = () => {
    dispatch(setMode("main"));
    resetFilters();
  };

  return (
    <div className='flex items-center justify-center h-full w-full relative'>
      <motion.div
        className='bg-yellow-100 text-center p-5 flex flex-col gap-2 relative w-full md:w-[800px] md:h-[700px] md:rounded-lg lg:w-[1000px] lg:h-[800px] md:mt-[70px]'
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring" }}
      >
        <h1 className='text-2xl md:text-3xl'>포켓몬 도감</h1>

        <div className='flex justify-center gap-4 mb-4'>
          <PokedexSortButton onClick={sortByIdHandler} text='도감번호'>
            <span>{sortOrderId === "desc" ? "내림" : "오름"}</span>
          </PokedexSortButton>
          <PokedexSortButton onClick={sortByNameHandler} text='이름'>
            <span>{sortOrderName === "asc" ? "오름" : "내림"}</span>
          </PokedexSortButton>

          <PokedexSortButton onClick={sortByTypeHandler} text='타입'>
            <span>{sortOrderType === "asc" ? "오름" : "내림"}</span>
          </PokedexSortButton>
          <motion.button
            onClick={resetFilters}
            className='py-2 px-3 md:py-2 md:px-4 bg-red-500 text-white text-xs md:text-base rounded-md flex items-center gap-1 md:gap-2'
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          >
            리셋
          </motion.button>
        </div>

        <PokedexList
          setPokedexDetailPopupOpen={setPokedexDetailPopupOpen}
          setSelectPokemon={setSelectPokemon}
          sortedPokemons={pokemonData}
        />

        <button
          onClick={handleClickMainButton}
          className='absolute top-4 right-4 text-2xl text-black rounded-full p-2'
        >
          <img src='/icon/cancel.svg' alt='닫기' className='w-6 h-6' />
        </button>
      </motion.div>

      {pokedexDetailPopupOpen && (
        <PokedexListDetail
          selectPokemon={selectPokemon}
          setPokedexDetailPopupOpen={setPokedexDetailPopupOpen}
        />
      )}
    </div>
  );
};

export default Pokedex;
