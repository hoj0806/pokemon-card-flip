import { useAppSelector } from "../hooks/useAppSelector";
import { currentScore } from "../slice/scoreSlice";

const ScoreBoard = () => {
  const score = useAppSelector(currentScore);
  return (
    <div className='absolute md:top-16 right-1/2 translate-x-1/2 top-[200px]'>
      <div className='relative md:w-[180px] md:h-[100px] w-[120px] h-[70px] bg-white border-12 border-black rounded-md shadow-md flex flex-col items-center'>
        <div className='absolute -top-3 bg-white px-3 py-1 text-black text-sm font-bold'>
          SCORE
        </div>
        <div className='w-full h-full flex items-center justify-center border-4 border-black bg-white'>
          <span className='text-black md:text-[48px] text-3xl font-bold '>
            {score}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
