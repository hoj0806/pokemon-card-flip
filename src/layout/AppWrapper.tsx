const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className='relative h-screen w-full'
      style={{
        background: "linear-gradient(to right, #ff7e5f, #feb47b)",
      }}
    >
      {children}
    </div>
  );
};

export default AppWrapper;
