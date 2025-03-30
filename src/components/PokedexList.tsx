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
    <ol className='bg-gray-200/60 backdrop-blur-lg h-full rounded-xl md:grid-cols-5 overflow-y-auto grid grid-cols-4 place-items-center gap-7 py-3 border border-gray-300 shadow-md'>
      {sortedPokemons.map((data) => {
        return (
          <li
            className='cursor-pointer'
            onClick={() => handleClickPokeDexListItem(data.pokemonName)}
            key={data.id}
          >
            <div className='relative flex items-center justify-center rounded-full w-[80px] h-[80px] md:w-[120px] md:h-[120px] border-[3px] border-white/30 bg-transparent shadow-2xl overflow-hidden'>
              <div className='absolute inset-0 rounded-full bg-gradient-radial from-white/50 to-transparent opacity-60' />

              <div className='absolute inset-0 rounded-full backdrop-blur-md bg-white/10 shadow-inner' />

              <motion.img
                src={data.imageUrl}
                alt={data.pokemonName}
                className='relative w-[70%] h-[70%] object-contain z-20 filter brightness-110 contrast-120'
                whileHover={{ scale: 1.2 }}
              />

              <div className='absolute top-2 left-2 w-6 h-6 bg-white/50 rounded-full blur-[5px]' />

              <div className='absolute bottom-1 right-1 w-4 h-4 bg-white/30 rounded-full blur-[3px]' />
            </div>
            <p className='text-sm md:text-lg text-center mt-2'>
              {data.pokemonName}
            </p>
          </li>
        );
      })}
    </ol>
  );
};

export default PokedexList;
