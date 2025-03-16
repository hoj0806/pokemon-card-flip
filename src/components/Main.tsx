import SelectButton from "../ui/SelectButton";

const Main = () => {
  return (
    <div className='absolute bottom-[120px] left-1/2 -translate-x-1/2'>
      <div className='flex flex-col gap-5'>
        <SelectButton>게임시작</SelectButton>
        <SelectButton>도감보기</SelectButton>
      </div>
    </div>
  );
};

export default Main;
