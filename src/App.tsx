import { useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const currentMode = useSelector((state) => state.mode);
  return <h1 className='text-3xl font-bold underline'>Hello world!</h1>;
};

export default App;
