import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const GameCard: React.FC<{
  isFlied: boolean;
  pokemonName: string;
  number: number;
}> = ({ isFlied, pokemonName, number }) => {
  const [flipped, setFlipped] = useState(false);
  const [isClickEnabled, setIsClickEnabled] = useState(false); // 클릭 활성화 상태

  useEffect(() => {
    const flipTimer = setTimeout(() => {
      setFlipped(true); // 3초 후 카드가 뒤집힘
    }, 3000);

    const clickTimer = setTimeout(() => {
      setIsClickEnabled(true); // 4초 후 클릭 가능
    }, 4000);

    return () => {
      clearTimeout(flipTimer);
      clearTimeout(clickTimer); // 타이머 정리
    };
  }, []);

  const handleCardClick = () => {
    if (isClickEnabled) {
      setFlipped(!flipped); // 클릭 시 카드 뒤집기
    }
  };

  return (
    <>
      <motion.div
        className='relative w-32 h-48 bg-white rounded-lg'
        onClick={handleCardClick}
        style={{ perspective: "1000px" }}
      >
        <motion.div
          className='absolute inset-0'
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            rotateY: flipped ? 180 : 0,
          }}
          transition={{ duration: 0.8 }}
        >
          <div
            className='absolute inset-0 bg-blue-500 text-white flex justify-center items-center rounded-lg'
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(0deg)",
            }}
          >
            front
          </div>
          <div
            className='absolute inset-0 bg-red-500 text-white flex justify-center items-center rounded-lg'
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {pokemonName}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default GameCard;
