import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setAllFliedTrue, setFlipCard } from "../slice/pokemonSlice";

const GameCard: React.FC<{
  isFlied: boolean;
  pokemonName: string;
  number: number;
  uniqueId: string;
}> = ({ isFlied, pokemonName, number, uniqueId }) => {
  const [isClickEnabled, setIsClickEnabled] = useState(false); // 클릭 활성화 상태
  const [selectCards, setSelectCards] = useState<
    { pokemonName: string; uniqueId: string }[]
  >([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const flipTimer = setTimeout(() => {
      dispatch(setAllFliedTrue()); // 3초 후 카드가 setFlipped뒤집힘
    }, 3000);

    const clickTimer = setTimeout(() => {
      setIsClickEnabled(true); // 4초 후 클릭 가능
    }, 4000);

    return () => {
      clearTimeout(flipTimer);
      clearTimeout(clickTimer); // 타이머 정리
    };
  }, [dispatch]);

  const handleCardClick = () => {
    console.log(isFlied);
    // Only allow adding the card to the selectCards if clicking is enabled
    if (isClickEnabled) {
      dispatch(setFlipCard(uniqueId));
    }
  };
  console.log(selectCards);
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
            rotateY: isFlied ? 180 : 0,
          }}
          transition={{ duration: 0.8 }}
        >
          <div
            className='absolute inset-0 bg-blue-500 text-white flex justify-center items-center rounded-lg'
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            back
          </div>
          <div
            className='absolute inset-0 bg-red-500 text-white flex justify-center items-center rounded-lg'
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(0deg)",
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
