import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./Global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import MainServicePage from "./Components/MainServicePages/MainServicePage";
import HairServicePage from "./Components/HairServicePage/HairServicePage";
import BeardStylingPage from "./Components/BeardServicePage/BeardStylingPage";
import NailSalonPage from "./Components/NaliSalonPage/NailSalonPage";
import FacialPage from "./Components/FacialPage/FacialPage";
import BeautyPage from "./Components/Beauty/BeautyPage";
import SpaPages from "./Components/Spa/SpaPages";
import LashesPage from "./Components/Lashes/LashesPage";
import TermsPage from "./Components/Terms/TermsPage";
import LocationPage from "./Components/LocationPage/LocationPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<MainServicePage />} />
          <Route path="/hair" element={<HairServicePage />} />
          {/* <Route path="/beard" element={<BeardStylingPage />} /> */}
          <Route path="/nails" element={<NailSalonPage />} />
          <Route path="/facial" element={<FacialPage />} />
          <Route path="/beauty" element={<BeautyPage />} />
          <Route path="/spa" element={<SpaPages />} />
          <Route path="/lashes" element={<LashesPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/location" element={<LocationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
