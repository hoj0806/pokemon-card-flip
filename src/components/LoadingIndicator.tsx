import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingIndicator = () => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") {
          return ".";
        }
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      {/* 고정된 위치에서 자전하는 포켓볼 */}
      <div className='relative w-48 h-48 mb-8'>
        <motion.div
          className='w-40 h-40 bg-white border-8 border-black rounded-full flex items-center justify-center shadow-xl'
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        >
          {/* 빨간색 위쪽 부분 */}
          <div className='w-full h-1/2 bg-red-500 top-0 rounded-t-full border-b-8 border-black absolute' />
          {/* 중앙의 작은 원 크기 증가 */}
          <div className='w-12 h-12 bg-white border-8 border-black rounded-full absolute' />
        </motion.div>
      </div>

      {/* 데이터 로딩 텍스트 */}
      <p className='text-3xl text-gray-700 mt-6'>
        데이터를 불러오고 있습니다{dots}
      </p>
    </div>
  );
};

export default LoadingIndicator;
