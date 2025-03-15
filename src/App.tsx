import "./App.css";
import { useAppSelector } from "./hooks/useAppSelector";
import { selectMode } from "./slice/modeSlice";

const App = () => {
  return <h1 className='text-3xl font-bold underline'>Hello world!</h1>;
};

export default App;
