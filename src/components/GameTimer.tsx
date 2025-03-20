import { motion } from "framer-motion";

const GameTimer: React.FC<{
  duration: number;
  setIsTimeOut: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsTimeOut, duration }) => {
  return (
    <div className='mx-auto w-[1200px]'>
      <motion.div
        className='h-[20px] bg-red-500'
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
