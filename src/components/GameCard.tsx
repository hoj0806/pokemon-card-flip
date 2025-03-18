import { motion } from "framer-motion";
import { useState } from "react";
const GameCard = () => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
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
            Front
          </div>
          <div
            className='absolute inset-0 bg-red-500 text-white flex justify-center items-center rounded-lg'
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            Back
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default GameCard;
