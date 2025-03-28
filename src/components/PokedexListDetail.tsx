import { useState, useRef, useEffect } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import { pokemons } from "../slice/pokemonSlice";
import { motion } from "framer-motion";
import { getGradientByType } from "../util/getGradientByType";
import { PokedexListDetailProps } from "../types/types";

const PokedexListDetail: React.FC<PokedexListDetailProps> = ({
  selectPokemon,
  setPokedexDetailPopupOpen,
}) => {
  const pokemonDatas = useAppSelector(pokemons);
  const selectPokemonData = pokemonDatas.find(
    (data) => data.pokemonName === selectPokemon
  );

  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>("");
  const [glowPosition, setGlowPosition] = useState<string>("50% 50%");

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let bounds: DOMRect;

    const handleMouseMove = (e: MouseEvent) => {
      if (!bounds) bounds = card.getBoundingClientRect();

      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.left;
      const topY = mouseY - bounds.top;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      };
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

      setTransform(`scale3d(1.07, 1.07, 1.07) rotate3d(
          ${center.y / 100}, ${-center.x / 100}, 0, ${Math.log(distance) * 2}deg
        )`);

      setGlowPosition(
        `${center.x + bounds.width / 2}px ${center.y + bounds.height / 2}px`
      );
    };

    const handleMouseLeave = () => {
      setTransform("");
      setGlowPosition("50% 50%");
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!selectPokemonData) return null;

  const primaryType = selectPokemonData!.types[0];
  const backgroundGradient = getGradientByType(primaryType);

  return (
    <motion.div
      className='fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50'
      onClick={() => setPokedexDetailPopupOpen(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div
        ref={cardRef}
        className='w-[280px] h-[420px] md:w-[400px] md:h-[600px] font-bold p-3 md:p-4 text-left text-[#181a1a] rounded-lg shadow-lg relative transition-all duration-300 ease-out cursor-pointer'
        style={{
          transform,
          background: backgroundGradient,
          boxShadow: transform
            ? "0 20px 30px rgba(255, 215, 0, 0.3), inset 0 0 10px rgba(255, 215, 0, 0.3)"
            : "0 10px 20px rgba(0, 0, 0, 0.2), inset 0 0 5px rgba(255, 255, 255, 0.3)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className='absolute inset-0 w-full h-full pointer-events-none rounded-lg'
          style={{
            backgroundImage:
              glowPosition !== "50% 50%"
                ? `radial-gradient(circle at ${glowPosition},
              rgba(255, 255, 255, 0.33), rgba(0, 0, 0, 0.06))`
                : "none",
          }}
        />

        <div className='flex items-center gap-1 md:gap-2 justify-between'>
          <div className='relative w-[1.2em] h-[1.2em] md:w-[1.5em] md:h-[1.5em] rounded-full overflow-hidden border-[1.5px] md:border-2 border-black'>
            <div className='absolute top-0 left-0 w-full h-1/2 bg-red-500'></div>
            <div className='absolute bottom-0 left-0 w-full h-1/2 bg-white'></div>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-1/3 h-1/3 bg-white border-[1.5px] md:border-2 border-black rounded-full'></div>
            </div>
          </div>
          <p className='text-sm md:text-xl font-bold text-white bg-gray-800 px-3 md:px-4 py-1 md:py-2 rounded-lg shadow-lg'>
            No.
            <span className='bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-md'>
              {selectPokemonData.id}
            </span>
          </p>
        </div>

        <div className='w-[85%] h-[60%] md:w-[90%] md:h-[70%] flex justify-center items-center overflow-hidden mx-auto'>
          <img
            src={selectPokemonData.imageUrl}
            alt={selectPokemonData.pokemonName}
            className='w-full h-full object-contain'
            style={{ marginTop: "-10%" }}
          />
        </div>

        <div className='absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-6 w-[85%] md:w-[90%] bg-white/20 backdrop-blur-md rounded-lg p-3 md:p-4 shadow-md border border-yellow-400 text-[0.8rem] md:text-base'>
          <div className='flex gap-2 md:gap-4 mt-1 md:mt-2'>
            <div className='flex items-center gap-1 md:gap-2 text-white'>
              📏{" "}
              <span className='text-sm md:text-lg font-semibold'>
                {selectPokemonData.height / 10}m
              </span>
            </div>
            <div className='flex items-center gap-1 md:gap-2 text-white'>
              🏋️{" "}
              <span className='text-sm md:text-lg font-semibold'>
                {selectPokemonData.weight / 10}kg
              </span>
            </div>
          </div>

          <p className='mt-2 md:mt-3 text-white text-lg md:text-xl font-bold'>
            ✨ {selectPokemonData.pokemonName}
          </p>

          <div className='flex gap-1 md:gap-2 flex-wrap mt-1 md:mt-2'>
            ⚡ 기술:
            {selectPokemonData.abilities.map((ability, index) => (
              <span
                key={index}
                className='bg-yellow-500/30 px-1 md:px-2 py-0.5 md:py-1 rounded-md text-xs md:text-sm text-white'
              >
                {ability.abilityKoreanName}
              </span>
            ))}
          </div>

          <div className='flex gap-1 md:gap-2 flex-wrap mt-1 md:mt-2'>
            🔥 타입:
            {selectPokemonData.types.map((type, index) => (
              <span
                key={index}
                className='bg-blue-500/30 px-1 md:px-2 py-0.5 md:py-1 rounded-md text-xs md:text-sm text-white'
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PokedexListDetail;
