const ErrorBlock: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-xl md:text-3xl'>{children}</h1>
    </div>
  );
};

export default ErrorBlock;
