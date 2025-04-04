const PokeFlipLogo = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <h1
        className='cursor-pointer relative text-5xl md:text-7xl xl:text-9xl font-extrabold text-yellow-400 
        transform rotate-[-5deg] transition-transform duration-300 ease-out 
        drop-shadow-[4px_4px_0px_rgba(0,0,0,0.6)] 
        hover:scale-110 hover:rotate-0 hover:drop-shadow-[6px_6px_0px_rgba(0,0,0,0.8)] 
        mt-16 md:mt-16 xl:mt-24'
      >
        Poke<span className='text-red-500'>Flip</span>
        <div
          className='absolute bottom-[-20px] right-[-40px] md:bottom-[-15px] md:right-[-50px] xl:bottom-[-20px] xl:right-[-70px] 
          w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20
          bg-white border-4 border-black rounded-full flex items-center justify-center 
          shadow-xl transition-transform duration-300 hover:scale-110 cursor-pointer'
        >
          <div className='absolute w-full h-1/2 bg-red-500 top-0 rounded-t-full border-b-4 border-black' />
          <div className='absolute w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 bg-white border-4 border-black rounded-full' />
        </div>
        {/* 3D 효과 */}
        <span className='absolute top-1 left-1 text-black opacity-40 -z-10'>
          PokeFlip
        </span>
        <span className='absolute top-2 left-2 text-black opacity-20 -z-20'>
          PokeFlip
        </span>
      </h1>
    </div>
  );
};

export default PokeFlipLogo;
