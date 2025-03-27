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

      setTransform(`
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `);

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

  const primaryType = selectPokemonData!.types[0];
  const backgroundGradient = getGradientByType(primaryType);

  if (!selectPokemonData) return null;

  return (
    <motion.div
      className='fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50'
      onClick={() => setPokedexDetailPopupOpen(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        ref={cardRef}
        className='w-[400px] h-[600px] font-bold p-4 text-left text-[#181a1a] rounded-lg shadow-lg relative transition-all duration-300 ease-out cursor-pointer'
        style={{
          transform,
          background: backgroundGradient,
          boxShadow: transform
            ? "0 20px 30px rgba(255, 215, 0, 0.3), inset 0 0 10px rgba(255, 215, 0, 0.3)" // 황금색 그림자
            : "0 10px 20px rgba(0, 0, 0, 0.2), inset 0 0 5px rgba(255, 255, 255, 0.3)", // 기본 그림자
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className='absolute inset-0 w-full h-full pointer-events-none rounded-lg'
          style={{
            backgroundImage:
              glowPosition !== "50% 50%"
                ? `radial-gradient(
                    circle at ${glowPosition},
                    rgba(255, 255, 255, 0.33),
                    rgba(0, 0, 0, 0.06)
                  )`
                : "none",
          }}
        />

        <div className='flex items-center gap-2 justify-between'>
          <div className='relative w-[1.5em] h-[1.5em] rounded-full overflow-hidden border-2 border-black'>
            <div className='absolute top-0 left-0 w-full h-1/2 bg-red-500'></div>
            <div className='absolute bottom-0 left-0 w-full h-1/2 bg-white'></div>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-1/3 h-1/3 bg-white border-2 border-black rounded-full'></div>
            </div>
          </div>
          <p className='text-xl font-bold text-black bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-lg shadow-lg'>
            No.{selectPokemonData.id}
          </p>
        </div>

        <div className='w-[90%] h-[70%] flex justify-center items-center overflow-hidden mx-auto'>
          <img
            src={selectPokemonData.imageUrl}
            alt={selectPokemonData.pokemonName}
            className='w-full h-full object-contain'
          />
        </div>

        <div className='absolute left-4 bottom-6 w-[90%] bg-white/20 backdrop-blur-md rounded-lg p-4 shadow-md border border-yellow-400'>
          <div className='flex gap-4 mt-2'>
            <div className='flex items-center gap-2 text-white'>
              📏{" "}
              <span className='text-lg font-semibold'>
                {selectPokemonData.height / 10}m
              </span>
            </div>
            <div className='flex items-center gap-2 text-white'>
              🏋️{" "}
              <span className='text-lg font-semibold'>
                {selectPokemonData.weight / 10}kg
              </span>
            </div>
          </div>

          <p className='mt-3 text-white text-xl font-bold'>
            ✨ {selectPokemonData.pokemonName}
          </p>

          <div className='flex gap-2 flex-wrap mt-2'>
            ⚡ 기술:
            {selectPokemonData.abilities.map((ability, index) => (
              <span
                key={index}
                className='bg-yellow-500/30 px-2 py-1 rounded-md text-sm text-white'
              >
                {ability.abilityKoreanName}
              </span>
            ))}
          </div>

          <div className='flex gap-2 flex-wrap mt-2'>
            🔥 타입:
            {selectPokemonData.types.map((type, index) => (
              <span
                key={index}
                className='bg-blue-500/30 px-2 py-1 rounded-md text-sm text-white'
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
