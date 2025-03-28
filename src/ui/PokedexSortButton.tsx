import { motion } from "framer-motion";
import { PokedexSortButtonProps } from "../types/types";

const PokedexSortButton: React.FC<PokedexSortButtonProps> = ({
  onClick,
  children,
  text,
}) => {
  return (
    <motion.button
      onClick={onClick}
      className='py-2 px-3 md:py-2 md:px-4 bg-blue-500 text-white text-xs md:text-base rounded-md flex items-center gap-1 md:gap-2'
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
    >
      <span>{text}</span>
      {children}
    </motion.button>
  );
};

export default PokedexSortButton;
