import PokedexList from "./PokedexList";

const Pokedex = () => {
  return (
    <div className='flex items-center justify-center h-full w-full'>
      <div className='w-[800px] h-[700px] bg-yellow-100 rounded-2xl text-center p-5 flex flex-col gap-12'>
        <h1 className='text-3xl'>포켓몬 도감</h1>
        <PokedexList />
      </div>
    </div>
  );
};

export default Pokedex;
