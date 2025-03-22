import { motion } from "framer-motion";

const GameTimer: React.FC<{
  duration: number;
  setIsTimeOut: React.Dispatch<React.SetStateAction<boolean>>;
  resetTimerKey: number;
}> = ({ setIsTimeOut, duration, resetTimerKey }) => {
  return (
    <div className='w-[500px] mx-auto md:w-[700px] lg:w-[1000px] xl:w-[1200px]'>
      <motion.div
        key={resetTimerKey}
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
