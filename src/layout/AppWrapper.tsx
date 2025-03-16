const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className='relative h-screen'>{children}</div>;
};

export default AppWrapper;
