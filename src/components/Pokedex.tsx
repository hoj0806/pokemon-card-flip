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

const Pokedex = () => {
  const dispatch = useAppDispatch();
  const [pokedexDetailPopupOpen, setPokedexDetailPopupOpen] = useState(false);
  const [selectPokemon, setSelectPokemon] = useState("");
  const pokemonData = useAppSelector(pokemons);
  const [initialData] = useState(pokemonData);
  const [sortOrderId, setSortOrderId] = useState<"asc" | "desc">("desc");
  const [sortOrderName, setSortOrderName] = useState<"asc" | "desc">("asc");
  const [sortOrderType, setSortOrderType] = useState<"asc" | "desc">("asc");

  const sortByIdHandler = () => {
    dispatch(sortById(sortOrderId)); // 정렬 순서 전달
    setSortOrderId(sortOrderId === "asc" ? "desc" : "asc"); // 정렬 순서 토글
  };

  const sortByNameHandler = () => {
    dispatch(sortByName(sortOrderName)); // 정렬 순서 전달
    setSortOrderName(sortOrderName === "asc" ? "desc" : "asc"); // 정렬 순서 토글
  };

  const sortByTypeHandler = () => {
    dispatch(sortByType(sortOrderType)); // 타입 정렬 순서 전달
    setSortOrderType(sortOrderType === "asc" ? "desc" : "asc"); // 정렬 순서 토글
  };

  const resetFilters = () => {
    dispatch(setPokemonData(initialData)); // 초기 데이터로 리셋
    setSortOrderId("desc"); // ID 정렬 초기화
    setSortOrderName("asc"); // 이름 정렬 초기화
    setSortOrderType("asc"); // 타입 정렬 초기화
  };

  const handleClickMainButton = () => {
    dispatch(setMode("main"));
    resetFilters();
  };

  return (
    <div className='flex items-center justify-center h-full w-full relative'>
      <div className='w-[800px] h-[700px] bg-yellow-100 rounded-2xl text-center p-5 flex flex-col gap-12 relative'>
        <h1 className='text-3xl'>포켓몬 도감</h1>

        {/* 정렬 버튼들 */}
        <div className='flex justify-center gap-4 mb-4'>
          {/* ID 정렬 버튼 */}
          <button
            onClick={sortByIdHandler}
            className='py-2 px-4 bg-blue-500 text-white rounded-md flex items-center gap-2'
          >
            <span>도감번호</span>
            <span>{sortOrderId === "desc" ? "내림" : "오름"}</span>
          </button>

          {/* 이름 정렬 버튼 */}
          <button
            onClick={sortByNameHandler}
            className='py-2 px-4 bg-blue-500 text-white rounded-md flex items-center gap-2'
          >
            <span>이름</span>
            <span>{sortOrderName === "asc" ? "오름" : "내림"}</span>
          </button>

          {/* 타입 정렬 버튼 */}
          <button
            onClick={sortByTypeHandler}
            className='py-2 px-4 bg-blue-500 text-white rounded-md flex items-center gap-2'
          >
            <span>타입</span>
            <span>{sortOrderType === "asc" ? "오름" : "내림"}</span>
          </button>
          <button
            onClick={resetFilters}
            className='py-2 px-4 bg-red-500 text-white rounded-md'
          >
            리셋
          </button>
        </div>

        <PokedexList
          setPokedexDetailPopupOpen={setPokedexDetailPopupOpen}
          setSelectPokemon={setSelectPokemon}
          sortedPokemons={pokemonData}
        />

        {/* X 아이콘 버튼 */}
        <button
          onClick={handleClickMainButton}
          className='absolute top-4 right-4 text-xl text-white bg-red-500 rounded-full p-2'
        >
          X
        </button>
      </div>

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
