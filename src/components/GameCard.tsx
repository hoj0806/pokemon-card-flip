import { motion } from "framer-motion";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { selectCard, setFlipCard } from "../slice/pokemonSlice";
import { useAppSelector } from "../hooks/useAppSelector";

const GameCard: React.FC<{
  isFlied: boolean;
  pokemonName: string;
  imageUrl: string;
  uniqueId: string;
  handleCardClick: (uniqueId: string, pokemonName: string) => void;
}> = ({ isFlied, pokemonName, imageUrl, handleCardClick, uniqueId }) => {
  return (
    <>
      <motion.div
        className='relative w-32 h-48 bg-white rounded-lg'
        onClick={() => handleCardClick(uniqueId, pokemonName)}
        style={{ perspective: "1000px" }}
      >
        <motion.div
          className='absolute inset-0'
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            rotateY: isFlied ? 0 : 180,
          }}
          transition={{ duration: 0.8 }}
        >
          <div
            className='absolute inset-0 border-black border-2 text-white flex justify-center items-center rounded-lg'
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <img src='/image/pokeball.png' alt='pokeball' />
          </div>
          <div
            className='absolute inset-0 bg-red-500 text-white flex justify-center items-center rounded-lg'
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(0deg)",
            }}
          >
            <div className='flex flex-col items-center'>
              <img src={imageUrl} alt={pokemonName} />
              <p>{pokemonName}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default GameCard;
