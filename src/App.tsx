import "./App.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Vilager from "./Pages/Vilager";
import Encyclopedia from "./Pages/Encyclopedia";
import Furniture from "./Pages/Furniture";
import FurnitureDetail from "./Pages/FurnitureDetail";
import FurnitureSearch from "./Pages/FurnitureSearch";
import Acc from "./Pages/Acc";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow w-full px-3 ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Vilager/:name" element={<Vilager />} />
              <Route path="/Encyclopedia" element={<Encyclopedia />} />
              <Route path="/Furniture" element={<Furniture />} />
              <Route
                path="/FurnitureDetail/:itemname"
                element={<FurnitureDetail />}
              />
              <Route path="/FurnitureSearch" element={<FurnitureSearch />} />
              <Route path="/Acc" element={<Acc />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
