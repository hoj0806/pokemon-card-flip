import { motion } from "framer-motion";

interface PokemonAbility {
  abilityKoreanName: string;
}

interface PokemonData {
  id: number;
  abilities: PokemonAbility[];
  height: number;
  weight: number;
  types: string[];
  isFliped: boolean;
  isCorrect: boolean;
  imageUrl: string;
  pokemonName: string;
}

const PokedexList: React.FC<{
  setPokedexDetailPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectPokemon: React.Dispatch<React.SetStateAction<string>>;
  sortedPokemons: PokemonData[];
}> = ({ setPokedexDetailPopupOpen, setSelectPokemon, sortedPokemons }) => {
  const handleClickPokeDexListItem = (pokemonName: string) => {
    setPokedexDetailPopupOpen(true);
    setSelectPokemon(pokemonName);
  };
  return (
    <ol className='bg-white h-full rounded-xl overflow-y-auto grid grid-cols-5 place-items-center gap-7 py-3'>
      {sortedPokemons.map((data) => {
        return (
          <div
            className='cursor-pointer'
            onClick={() => handleClickPokeDexListItem(data.pokemonName)}
            key={data.id}
          >
            <li className='rounded-full border border-black w-[100px] h-[100px]'>
              <motion.img
                src={data.imageUrl}
                alt={data.pokemonName}
                whileHover={{ scale: 1.1 }}
              />
            </li>
            <p>{data.pokemonName}</p>
          </div>
        );
      })}
    </ol>
  );
};

export default PokedexList;
