import { motion } from "framer-motion";

const GameCard: React.FC<{
  isFliped: boolean;
  pokemonName: string;
  imageUrl: string;
  uniqueId: string;
  isCorrect: boolean;
  resetGameBoardKey: number;

  handleCardClick: (uniqueId: string, pokemonName: string) => void;
}> = ({
  isFliped,
  pokemonName,
  imageUrl,
  handleCardClick,
  uniqueId,
  isCorrect,
  resetGameBoardKey,
}) => {
  return (
    <div className={`${isCorrect ? "invisible" : ""}`}>
      <motion.div
        className='relative w-[70px] h-[90px] bg-white rounded-lg cursor-pointer md:w-[90px] md:h-[120px] lg:w-[100px] lg:h-[140px] xl:w-[120px] xl:h-[170px]'
        onClick={() => handleCardClick(uniqueId, pokemonName)}
        style={{ perspective: "1000px" }}
        key={resetGameBoardKey}
        whileHover={{ transition: { duration: 0.2 }, scale: 1.1 }}
      >
        <motion.div
          className='absolute inset-0'
          style={{ transformStyle: "preserve-3d" }}
          initial={{ rotateY: 0 }}
          animate={{
            rotateY: isFliped ? 0 : 180,
          }}
          transition={{ duration: 0.8 }}
          key={resetGameBoardKey}
        >
          <div
            className='absolute inset-0 border-black border-2 text-white flex justify-center items-center rounded-lg'
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {/* <img src='/image/pokeball.png' alt='pokeball' /> */}
          </div>
          <div
            className='absolute inset-0 bg-red-500 text-white flex justify-center items-center rounded-lg'
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(0deg)",
            }}
          >
            <div className='flex flex-col items-center'>
              {/* <img src={imageUrl} alt={pokemonName} /> */}
              <p>{pokemonName}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GameCard;
