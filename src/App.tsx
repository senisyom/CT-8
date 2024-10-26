import { Route, Routes } from "react-router-dom";
import ToolBar from "./components/ToolBar/ToolBar";
import SubmitNewQuote from "./components/SubmitNewQuote/SubmitNewQuote";


const App = () => {
  return (
    <>
    <header><ToolBar/></header>
      <div>
        <Routes>
          <Route path='/add-quote' element={<SubmitNewQuote/>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
