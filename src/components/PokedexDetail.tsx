import { useState, useRef, useEffect } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import { pokemons } from "../slice/pokemonSlice";
import { motion } from "framer-motion";

const PokemonDetail: React.FC<{
  pokemonName: string;
  setPokedexDetailPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ pokemonName, setPokedexDetailPopupOpen }) => {
  const pokemonDatas = useAppSelector(pokemons);
  const selectPokemonData = pokemonDatas.find(
    (data) => data.pokemonName === pokemonName
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
        className='w-[400px] h-[600px] font-bold p-4 text-right text-[#181a1a] rounded-lg shadow-lg relative transition-all duration-300 ease-out'
        style={{
          transform,
          background: `linear-gradient(
      145deg,
#FF3B30 0%,     /* 밝은 빨간색 (rgba(255, 59, 48, 1)) */
  #F7352B 10%,    /* 보간된 색상 */
  #EF2F26 20%,    /* 보간된 색상 */
  #E63228 25%,    /* 중간 빨간색 (rgba(230, 50, 40, 1)) */
  #DE2C22 30%,    /* 보간된 색상 */
  #D6281E 40%,    /* 보간된 색상 */
  #C8281E 50%,    /* 어두운 빨간색 (rgba(200, 40, 30, 1)) */
  #C0241A 60%,    /* 보간된 색상 */
  #B82016 70%,    /* 보간된 색상 */
  #B41E14 75%,    /* 더 어두운 빨간색 (rgba(180, 30, 20, 1)) */
  #AC1A10 80%,    /* 보간된 색상 */
  #A4160C 90%,    /* 보간된 색상 */
  #96140A 100%    /* 가장 어두운 빨간색 (rgba(150, 
    )`,
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

        {/* Pokemon Image */}
        <div className='w-[90%] h-[80%] flex justify-center items-center overflow-hidden mx-auto mt-4'>
          <img
            src={selectPokemonData.imageUrl}
            alt={selectPokemonData.pokemonName}
            className='w-full h-full object-contain'
          />
        </div>

        {/* Pokemon Name with Glow Effect */}
        <div className='absolute bottom-4 right-4 text-xl font-bold'>
          {selectPokemonData.pokemonName}
        </div>
      </div>
    </motion.div>
  );
};

export default PokemonDetail;
