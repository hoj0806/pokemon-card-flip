import { useAppSelector } from "../hooks/useAppSelector";
import { pokemons } from "../slice/pokemonSlice";
import { motion } from "framer-motion";
const PokedexList = () => {
  const pokemonData = useAppSelector(pokemons);
  console.log(pokemonData);
  return (
    <ol className='bg-white h-full rounded-xl overflow-y-auto grid grid-cols-5 place-items-center gap-7 py-3'>
      {pokemonData.map((data) => {
        return (
          <div>
            <li className='rounded-full border border-black w-[100px] h-[100px] cursor-pointer'>
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
