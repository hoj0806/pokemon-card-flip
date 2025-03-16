const SelectButton = ({ children }: { children: React.ReactNode }) => {
  <button className='relative px-4 py-2 text-lg font-bold text-white bg-blue-600 border-4 border-black shadow-[4px_4px_0px_black] active:shadow-none active:translate-x-1 active:translate-y-1'>
    {children}
  </button>;
};

export default SelectButton;
