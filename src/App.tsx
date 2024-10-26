import { Route, Routes } from "react-router-dom";
import ToolBar from "./components/ToolBar/ToolBar";
import SubmitNewQuote from "./components/SubmitNewQuote/SubmitNewQuote";
import Container from "./Container/Container";


const App = () => {
  return (
    <>
    <header><ToolBar/></header>
      <div>
        <Routes>
          <Route path='/quotes' element={<Container/>}></Route>
          <Route path='/add-quote' element={<SubmitNewQuote/>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
