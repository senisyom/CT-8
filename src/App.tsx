import { Routes } from "react-router-dom";
import ToolBar from "./components/ToolBar/ToolBar";


const App = () => {
  return (
    <>
    <header><ToolBar/></header>
      <div>
        <Routes></Routes>
      </div>
    </>
  );
};

export default App;
