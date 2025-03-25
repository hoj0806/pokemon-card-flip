import PokedexList from "./PokedexList";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PokedexListDetail from "./PokedexListDetail";
const Pokedex = () => {
  const [pokedexDetailPopupOpen, setPokedexDetailPopupOpen] = useState(false);
  const [selectPokemon, setSelectPokemon] = useState("");

  return (
    <div className='flex items-center justify-center h-full w-full relative'>
      <div className='w-[800px] h-[700px] bg-yellow-100 rounded-2xl text-center p-5 flex flex-col gap-12'>
        <h1 className='text-3xl'>포켓몬 도감</h1>
        <PokedexList
          setPokedexDetailPopupOpen={setPokedexDetailPopupOpen}
          setSelectPokemon={setSelectPokemon}
        />
      </div>

      {pokedexDetailPopupOpen && (
        <AnimatePresence>
          <PokedexListDetail
            selectPokemon={selectPokemon}
            setPokedexDetailPopupOpen={setPokedexDetailPopupOpen}
          />
        </AnimatePresence>
      )}
    </div>
  );
};

export default Pokedex;
