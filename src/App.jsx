import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ListNews from "./components/ListNews/ListNews";
import Form from "./components/Form/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ListNews" element={<ListNews />} />
            <Route path="/Form" element={<Form />} />
          </Routes>
        </GlobalProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
