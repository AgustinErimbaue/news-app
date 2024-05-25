import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ListNews from "./components/ListNews/ListNews";
import Form from "./components/Form/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ListNews" element={<ListNews />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
