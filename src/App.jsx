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
import ContactPage from "./Components/ContactPage/ContactPage";
import Haircut from "./Components/HairServicePage/HaircutPage/Haircut";
import HairColor from "./Components/HairServicePage/HairColorPage/HairColor";
import HairSpa from "./Components/HairServicePage/HairSpa/HairSpa";
import BeardStyle from "./Components/HairServicePage/BeardStylePage/BeardStyle";
import HairTreatment from "./Components/HairServicePage/HairTreatment/HairTreatment";
import Mustache from "./Components/HairServicePage/Mustache/Mustache";
import HairSalonSahakar from "./Components/HairSalonLocations/HairSalonSahakar/HairSalonSahakar";
import HairSalonLavelle from "./Components/HairSalonLocations/HairSalonLavelle/HairSalonLavelle";
import HairSalonJakkur from "./Components/HairSalonLocations/HairSalonJakkur/HairSalonJakkur";
import HairSalonUptown from "./Components/HairSalonLocations/HairSalonUptown/HairSalonUptown";
import HairSalonMeadows from "./Components/HairSalonLocations/HairSalonMedows/HairSalonMeadows";
import HairSalonJp from "./Components/HairSalonLocations/HairSalonJp/HairSalonJp";
import NailSalonNearMe from "./Components/NearMe/NailNearMe/NailSalonNearMe";
import PedicureNearMe from './Components/NearMe/PedicureNearMe/PedicureNearMe';
import WomeSpaNearMe from "./Components/NearMe/WomenSpaNearMe/WomeSpaNearMe";
import HairSpaNearMe from "./Components/NearMe/HairSpaNearMe/HairSpaNearMe";
import WomenSalonNearMe from "./Components/NearMe/WomenSalonNearMe/WomenSalonNearMe";
import FacialsNearMe from "./Components/NearMe/FacialsNearMe/FacialsNearMe";
import HairTreatmentNearMe from "./Components/NearMe/HairTreatmentNearMe/HairTreatmentNearMe";
import BodySpaNearMe from "./Components/NearMe/BodySpaNearMe/BodySpaNearMe";
import GentsSalonNearMe from "./Components/NearMe/GentsSalon/GentsSalonNearMe";
import HeadMassageNearMe from './Components/NearMe/HeadMassageNearMe.jsx/HeadMassageNearMe';
import FootMassageNearMe from "./Components/NearMe/FootMassageNearMe/FootMassageNearMe";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <ScrollTo />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<MainServicePage />} />
          <Route path="/hair-salon" element={<HairServicePage />} />
          <Route path="/haircut-and-styling" element={<Haircut />} />
          <Route path="/hair-highlights-and-streaks" element={<HairColor />} />
          <Route path="/hair-spa" element={<HairSpa />} />
          <Route path="/hair-treatments" element={<HairTreatment />} />
          <Route path="/beard" element={<BeardStyle />} />
          <Route path="/mustache-styling" element={<Mustache />} />
          <Route path="/nails-salon" element={<NailSalonPage />} />
          <Route path="/facial" element={<FacialPage />} />
          <Route path="/beauty-essentials" element={<BeautyPage />} />
          <Route path="/spa" element={<SpaPages />} />
          <Route path="/eye-lashes" element={<LashesPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/philosophy" element={<ScentPhiloPage />} />
          <Route path="/crew" element={<StyleCrewPage />} />
          <Route path="/myself" element={<AboutMyselfPage />} />
          <Route path="/salon-membership" element={<MembershipPage />} />
          <Route path="/franchise" element={<FranchisePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/salon-in-sahakar-nagar" element={<SahakarLocPage />} />
          <Route path="/salon-in-lavelle-road" element={<LavellelLocPage />} />
          <Route path="/salon-in-jakkur" element={<JakkuruLocPage />} />
          <Route
            path="/salon-in-uptown-whitefield"
            element={<UpTownLocPage />}
          />
          <Route path="/salon-in-whitefield" element={<MeadowsLocPage />} />
          <Route path="/salon-in-jpnagar" element={<Jp />} />
          <Route
            path="/hair-salon-in-sahakar-nagar"
            element={<HairSalonSahakar />}
          />
          <Route
            path="/hair-salon-in-lavelle-road"
            element={<HairSalonLavelle />}
          />
          <Route path="/hair-salon-in-jakkur" element={<HairSalonJakkur />} />
          <Route
            path="/hair-salon-in-uptown-whitefield"
            element={<HairSalonUptown />}
          />
          <Route
            path="/hair-salon-in-meadows-whitefield"
            element={<HairSalonMeadows />}
          />
          <Route
            path="/hair-salon-in-jp-nagar-bangalore"
            element={<HairSalonJp />}
          />
          <Route path="/nails-salon-near-me" element={<NailSalonNearMe />} />
          <Route path="/pedicure-near-me" element={<PedicureNearMe />} />
          <Route path="/women-spa-near-me" element={<WomeSpaNearMe />} />
          <Route path="/hair-spa-near-me" element={<HairSpaNearMe />} />
          <Route path="/women-salon-near-me" element={<WomenSalonNearMe />} />
          <Route path="/facials-near-me" element={<FacialsNearMe />} />
          <Route path="/hair-treatment-near-me" element={<HairTreatmentNearMe />} />
          <Route path="/body-spa-near-me" element={<BodySpaNearMe/>} />
          <Route path="/gents-salon-near-me" element={<GentsSalonNearMe/>} />
          <Route path="/head-massage-near-me" element={<HeadMassageNearMe/>} />
          <Route path="/foot-massage-near-me" element={<FootMassageNearMe/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
