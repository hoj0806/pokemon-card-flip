import { motion } from "framer-motion";
import { getGradientByType } from "../util/getGradientByType";
import { GameCardProps } from "../types/types";

const GameCard: React.FC<GameCardProps> = ({
  isFliped,
  pokemonName,
  imageUrl,
  handleCardClick,
  uniqueId,
  isCorrect,
  type,
}) => {
  const backgroundGradient = getGradientByType(type);
  return (
    <div className={`${isCorrect ? "invisible" : ""}`}>
      <motion.div
        className='relative w-[70px] h-[93px] bg-transparent rounded-lg cursor-pointer md:w-[90px] md:h-[120px] lg:w-[100px] lg:h-[133px] xl:w-[130px] xl:h-[173px]'
        onClick={() => handleCardClick(uniqueId, pokemonName)}
        style={{ perspective: "1000px" }}
        whileHover={{
          transition: { duration: 0.2 },
          scale: 1.1,
        }}
      >
        <motion.div
          className='absolute inset-0 rounded-lg'
          style={{ transformStyle: "preserve-3d" }}
          initial={{ rotateY: 0 }}
          animate={{
            rotateY: isFliped ? 0 : 180,
          }}
          transition={{ duration: 0.8 }}
          whileHover={{ boxShadow: "0px 0px 12px 3px rgba(255, 215, 0, 0.8)" }}
        >
          {/* 뒷면 (Pokéball) */}
          <div
            className='absolute inset-0 border-black border-2 rounded-lg bg-cover bg-center'
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              backgroundImage: "url('/image/pokeball.png')",
            }}
          />

          {/* 앞면 (포켓몬 카드) */}
          <motion.div
            whileHover={{
              boxShadow: "0px 0px 12px 3px rgba(255, 215, 0, 0.8)",
            }}
            className='absolute inset-0 text-white flex justify-center items-center rounded-lg'
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(0deg)",
              background: backgroundGradient,
            }}
          >
            <div className='flex flex-col items-center'>
              <img src={imageUrl} alt={pokemonName} className='w-[400px]' />
              <p className='text-[12px] md:text-sm lg:text-lg'>{pokemonName}</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GameCard;
