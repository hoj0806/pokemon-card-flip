import { useState, useRef, useEffect } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import { pokemons } from "../slice/pokemonSlice";
import { motion } from "framer-motion";
import { getGradientByType } from "../util/getGradientByType";

const PokedexListDetail: React.FC<{
  selectPokemon: string;
  setPokedexDetailPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ selectPokemon, setPokedexDetailPopupOpen }) => {
  const pokemonDatas = useAppSelector(pokemons);
  const selectPokemonData = pokemonDatas.find(
    (data) => data.pokemonName === selectPokemon
  );
  console.log(pokemonDatas);

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

      // Apply 3D rotation and scale
      setTransform(`
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `);

      // Update glow position
      setGlowPosition(`
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px
      `);
    };

    const handleMouseLeave = () => {
      setTransform("");
      setGlowPosition("50% 50%");
    };

    card.addEventListener("mousemove", handleMouseMove); // 카드에만 mousemove 이벤트 등록
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove); // 이벤트 제거
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const primaryType = selectPokemonData!.types[0]; // 첫 번째 타입 기준
  const backgroundGradient = getGradientByType(primaryType);

  if (!selectPokemonData) return null;

  return (
    <motion.div
      className='fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50'
      onClick={() => setPokedexDetailPopupOpen(false)} // 배경 클릭 시 팝업 닫기
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Wrapper with blur effect */}
      <div
        ref={cardRef}
        className='w-[400px] h-[600px] font-bold p-4 text-left text-[#181a1a] rounded-lg shadow-lg relative transition-all duration-300 ease-out cursor-pointer'
        style={{
          transform,
          background: backgroundGradient,
          boxShadow: transform
            ? "0 20px 30px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5)" // hover 시 그림자 강조
            : "0 10px 20px rgba(0, 0, 0, 0.2), inset 0 0 5px rgba(255, 255, 255, 0.3)", // 기본 그림자
        }}
        onClick={(e) => e.stopPropagation()} // 카드 클릭 시 이벤트 전파 방지
      >
        {/* Glow effect */}
        <div
          className='absolute inset-0 w-full h-full pointer-events-none rounded-lg'
          style={{
            backgroundImage:
              glowPosition !== "50% 50%" // glowPosition이 초기값이 아닐 때만 glow 효과 적용
                ? `radial-gradient(
          circle at ${glowPosition},
          rgba(255, 255, 255, 0.33),
          rgba(0, 0, 0, 0.06)
        )`
                : "none", // 초기값일 때는 glow 효과 없음
          }}
        />

        <div className='flex items-center gap-2 justify-between'>
          <div className='relative w-[1.5em] h-[1.5em] rounded-full overflow-hidden border-2 border-black'>
            {/* 위쪽 (빨간색) */}
            <div className='absolute top-0 left-0 w-full h-1/2 bg-red-500'></div>
            {/* 아래쪽 (흰색) */}
            <div className='absolute bottom-0 left-0 w-full h-1/2 bg-white'></div>
            {/* 중앙 원 */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-1/3 h-1/3 bg-white border-2 border-black rounded-full'></div>
            </div>
          </div>
          <p className='text-xl font-bold'>No.{selectPokemonData.id}</p>
        </div>

        <div className='w-[90%] h-[70%] flex justify-center items-center overflow-hidden mx-auto'>
          <img
            src={selectPokemonData.imageUrl}
            alt={selectPokemonData.pokemonName}
            className='w-full h-full object-contain'
          />
        </div>

        {/* pokemonDescription */}
        <div className='absolute left-4 bottom-6 w-[90%] bg-white/20 backdrop-blur-md rounded-lg p-4 shadow-md border border-yellow-400'>
          <div className='flex gap-4 mt-2'>
            <div className='flex items-center gap-2 text-white'>
              🔺{" "}
              <span className='text-lg font-semibold'>
                {selectPokemonData.height}cm
              </span>
            </div>
            <div className='flex items-center gap-2 text-white'>
              ⚖️{" "}
              <span className='text-lg font-semibold'>
                {selectPokemonData.weight}kg
              </span>
            </div>
          </div>

          <p className='mt-3 text-white text-xl font-bold'>
            ✨ {selectPokemonData.pokemonName}
          </p>

          <div className='flex gap-2 flex-wrap mt-2'>
            🌀 기술:
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
            🎨 타입:
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
