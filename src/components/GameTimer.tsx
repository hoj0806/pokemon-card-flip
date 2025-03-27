import { motion } from "framer-motion";
import { GameTimerProps } from "../types/types";

const GameTimer: React.FC<GameTimerProps> = ({ setIsTimeOut, duration }) => {
  return (
    <div className='w-[400px] md:w-[600px] lg:w-[1000px] xl:w-[1200px]'>
      <motion.div
        className='h-[30px] bg-red-500'
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration, ease: "linear" }}
        onAnimationComplete={() => {
          setIsTimeOut(true);
        }}
      />
    </div>
  );
};

export default GameTimer;
