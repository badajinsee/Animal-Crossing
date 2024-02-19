import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Vilager from "./Pages/Vilager";
import Flower from "./Pages/Flower";
import Furniture from "./Pages/Furniture";
import FurnitureDetail from "./Pages/FurnitureDetail";
import Acc from "./Pages/Acc";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow w-full px-3 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Vilger" element={<Vilager />} />
            <Route path="/Flower" element={<Flower />} />
            <Route path="/Furniture" element={<Furniture />} />
            <Route path="/FurnitureDetail" element={<FurnitureDetail />} />
            <Route path="/Acc" element={<Acc />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
