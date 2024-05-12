import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./Global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import MainServicePage from "./Components/MainServicePages/MainServicePage";
import HairServicePage from "./Components/HairServicePage/HairServicePage";
import NailSalonPage from "./Components/NaliSalonPage/NailSalonPage";
import FacialPage from "./Components/FacialPage/FacialPage";
import BeautyPage from "./Components/Beauty/BeautyPage";
import SpaPages from "./Components/Spa/SpaPages";
import LashesPage from "./Components/Lashes/LashesPage";
import TermsPage from "./Components/Terms/TermsPage";
import LocationPage from "./Components/LocationPage/LocationPage";
import AboutPage from "./Components/AboutPage/AboutPage";
import ScrollTo from "./Components/ScrollTo/ScrollTo";
import ScentPhiloPage from "./Components/ScentPhiloPage/ScentPhiloPage";
import StyleCrewPage from "./Components/StyleCrewPage/StyleCrewPage";
import AboutMyselfPage from "./Components/AboutMyselfPage/AboutMyselfPage";
import MembershipPage from "./Components/MembershipPage/MembershipPage";
import FranchisePage from "./Components/FranchisePage/FranchisePage";
import ShopPage from "./Components/ShopPage/ShopPage";
import SahakarLocPage from "./Components/LocationPage/SahakarLocPage/SahakarLocPage";
import LavellelLocPage from "./Components/LocationPage/LavelleLoc/LavellelLocPage";
import JakkuruLocPage from "./Components/LocationPage/JakkuruLocPage/JakkuruLocPage";
import UpTownLocPage from "./Components/LocationPage/UpTownLocPage/UpTownLocPage";
import MeadowsLocPage from "./Components/LocationPage/MeadowsLocPage/MeadowsLocPage";
import Jp from "./Components/LocationPage/Jp/Jp";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <ScrollTo />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<MainServicePage />} />
          <Route path="/hair" element={<HairServicePage />} />
          <Route path="/nails" element={<NailSalonPage />} />
          <Route path="/facial" element={<FacialPage />} />
          <Route path="/beauty" element={<BeautyPage />} />
          <Route path="/spa" element={<SpaPages />} />
          <Route path="/lashes" element={<LashesPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/philosophy" element={<ScentPhiloPage />} />
          <Route path="/crew" element={<StyleCrewPage />} />
          <Route path="/myself" element={<AboutMyselfPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/franchise" element={<FranchisePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/sahakar" element={<SahakarLocPage />} />
          <Route path="/lavellel" element={<LavellelLocPage />} />
          <Route path="/jakkuru" element={<JakkuruLocPage />} />
          <Route path="/uptown" element={<UpTownLocPage />} />
          <Route path="/meadows" element={<MeadowsLocPage />} />
          <Route path="/jp" element={<Jp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
