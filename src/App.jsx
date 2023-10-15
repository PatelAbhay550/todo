import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Todolist from "./components/Todolist";
import Todoform from "./components/Todoform";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Todolist />
      <Todoform />
    </>
  );
}

export default App;
