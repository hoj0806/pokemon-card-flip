import { motion } from "framer-motion";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setFlipCard } from "../slice/pokemonSlice";

const GameCard: React.FC<{
  isFlied: boolean;
  pokemonName: string;
  number: number;
  uniqueId: string;
  isClickEnabled: boolean;
}> = ({ isFlied, pokemonName, number, uniqueId, isClickEnabled }) => {
  const dispatch = useAppDispatch();
  const handleCardClick = () => {
    if (isClickEnabled) {
      dispatch(setFlipCard(uniqueId));
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
