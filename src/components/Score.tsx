import { ScoreProps } from "../types/types";

const Score: React.FC<ScoreProps> = ({ children, text }) => {
  return (
    <div className='relative md:w-[180px] md:h-[100px] w-[120px] h-[70px] bg-white border-12 border-black rounded-xl shadow-md flex flex-col items-center'>
      <div className='absolute -top-3 bg-[#EF4444] px-3 py-1 text-black text-sm font-bold uppercase rounded-xl'>
        {text}
      </div>
      <div className='w-full h-full flex items-center justify-center border-4 rounded-xl border-black bg-white'>
        <span className='text-black md:text-[48px] text-3xl font-bold '>
          {children}
        </span>
      </div>
    </div>
  );
};

export default Score;
