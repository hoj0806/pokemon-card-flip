const Main = () => {
  return (
    <div className='flex flex-col gap-4 w-[180px] absolute'>
      <button className='relative px-4 py-2 text-lg font-bold text-white bg-blue-600 border-4 border-black shadow-[4px_4px_0px_black] active:shadow-none active:translate-x-1 active:translate-y-1'>
        게임시작
      </button>
      <button className='relative px-4 py-2 text-lg font-bold text-white bg-blue-600 border-4 border-black shadow-[4px_4px_0px_black] active:shadow-none active:translate-x-1 active:translate-y-1'>
        도감으로
      </button>
    </div>
  );
};

export default Main;
