const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative flex justify-center items-center h-screen'>
      {children}
    </div>
  );
};

export default AppWrapper;
