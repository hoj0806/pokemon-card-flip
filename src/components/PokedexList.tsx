import { motion } from "framer-motion";
import { PokedexListProps } from "../types/types";

const PokedexList: React.FC<PokedexListProps> = ({
  setPokedexDetailPopupOpen,
  setSelectPokemon,
  sortedPokemons,
}) => {
  const handleClickPokeDexListItem = (pokemonName: string) => {
    setPokedexDetailPopupOpen(true);
    setSelectPokemon(pokemonName);
  };

  return (
    <ol className='bg-white h-full rounded-xl overflow-y-auto grid grid-cols-5 place-items-center gap-7 py-3'>
      {sortedPokemons.map((data) => {
        return (
          <li
            className='cursor-pointer'
            onClick={() => handleClickPokeDexListItem(data.pokemonName)}
            key={data.id}
          >
            <div className='rounded-full p-1 border-2 border-black w-[100px] h-[100px]'>
              <motion.img
                src={data.imageUrl}
                alt={data.pokemonName}
                whileHover={{ scale: 1.2 }}
              />
            </div>
            <p>{data.pokemonName}</p>
          </li>
        );
      })}
    </ol>
  );
};

export default PokedexList;
