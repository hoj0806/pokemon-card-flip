import { motion } from "framer-motion";
import { useState } from "react";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [showBackground, setShowBackground] = useState(true);

  const toggleBackground = () => {
    setShowBackground((prev) => !prev);
  };

  return (
    <div className='relative h-screen w-full'>
      <button
        onClick={toggleBackground}
        className='absolute top-4 left-4 z-10 px-4 py-2 bg-blue-500 text-white rounded-md'
      >
        {showBackground ? "배경 숨기기" : "배경 나타나기"}
      </button>

      <motion.div
        className='absolute inset-0'
        style={{
          background: showBackground
            ? `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png") repeat`
            : "linear-gradient(to right, #ff7e5f, #feb47b)",
          backgroundSize: showBackground ? "150px 150px" : undefined,
        }}
        animate={{
          backgroundPosition: showBackground ? ["0 0", "200% 200%"] : undefined,
        }}
        transition={{
          repeat: showBackground ? Infinity : undefined,
          duration: 40,
          ease: "linear",
        }}
      />
      {children}
    </div>
  );
};

export default AppWrapper;
