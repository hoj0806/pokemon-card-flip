import { motion } from "framer-motion";

const SelectButton: React.FC<{
  onMode: () => void;
  children: React.ReactNode;
  buttonColor: string;
}> = ({ onMode, children, buttonColor }) => {
  return (
    <motion.button
      onClick={onMode}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ type: "spring" }}
      style={{ backgroundColor: buttonColor }}
      className={
        `bg-[${buttonColor}]` +
        "px-4 py-2 text-lg font-bold text-white border-4 border-black shadow-[4px_4px_0px_black] active:shadow-none active:translate-x-1 active:translate-y-1 w-[180px] md:w-[250px] lg:w-[400px] lg:h-[90px] lg:text-3xl"
      }
    >
      {children}
    </motion.button>
  );
};

export default SelectButton;
