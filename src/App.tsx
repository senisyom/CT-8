import { Route, Routes } from "react-router-dom";
import ToolBar from "./components/ToolBar/ToolBar";
import SubmitNewQuote from "./components/SubmitNewQuote/SubmitNewQuote";
import Container from "./Container/Container"
import QuoteCard from "./components/QuoteCard/QuoteCard";


const App = () => {
  return (
    <>
      <header>
        <ToolBar />
      </header>
      <div>
        <Routes>
          <Route path="/quotes" element={<Container />}></Route>
          <Route path="/quotes/:categoryId" element={<QuoteCard />}></Route>
          <Route path="/add-quote" element={<SubmitNewQuote />}></Route>
          <Route path="/" element={<Container />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
