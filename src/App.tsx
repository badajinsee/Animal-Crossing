import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Vilager from "./Pages/Vilager";
import Flower from "./Pages/Flower";
import Furniture from "./Pages/Furniture";
import FurnitureDetail from "./Pages/FurnitureDetail";
import Acc from "./Pages/Acc";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Vilger" element={<Vilager />} />
          <Route path="/Flower" element={<Flower />} />
          <Route path="/Furniture" element={<Furniture />} />
          <Route path="/FurnitureDetail" element={<FurnitureDetail />} />
          <Route path="/Acc" element={<Acc />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
