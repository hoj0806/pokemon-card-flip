const SelectButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className='px-4 py-2 text-lg font-bold text-white bg-blue-600 border-4 border-black shadow-[4px_4px_0px_black] active:shadow-none active:translate-x-1 active:translate-y-1 w-[180px] md:w-[250px] lg:w-[400px] lg:h-[60px] lg:text-2xl'>
      {children}
    </button>
  );
};

export default SelectButton;
