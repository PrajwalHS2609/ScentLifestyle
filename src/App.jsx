import React from "react";
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
import HairSalonSahakar from "./Components/HairSalonLocations/HairSalonSahakar/HairSalonSahakar";
import HairSalonLavelle from "./Components/HairSalonLocations/HairSalonLavelle/HairSalonLavelle";
import HairSalonJakkur from "./Components/HairSalonLocations/HairSalonJakkur/HairSalonJakkur";
import HairSalonUptown from "./Components/HairSalonLocations/HairSalonUptown/HairSalonUptown";
import HairSalonMeadows from "./Components/HairSalonLocations/HairSalonMedows/HairSalonMeadows";
import HairSalonJp from "./Components/HairSalonLocations/HairSalonJp/HairSalonJp";
import NailSalonNearMe from "./Components/NearMe/NailNearMe/NailSalonNearMe";
import PedicureNearMe from "./Components/NearMe/PedicureNearMe/PedicureNearMe";
import WomeSpaNearMe from "./Components/NearMe/WomenSpaNearMe/WomeSpaNearMe";
import HairSpaNearMe from "./Components/NearMe/HairSpaNearMe/HairSpaNearMe";
import WomenSalonNearMe from "./Components/NearMe/WomenSalonNearMe/WomenSalonNearMe";
import FacialsNearMe from "./Components/NearMe/FacialsNearMe/FacialsNearMe";
import HairTreatmentNearMe from "./Components/NearMe/HairTreatmentNearMe/HairTreatmentNearMe";
import BodySpaNearMe from "./Components/NearMe/BodySpaNearMe/BodySpaNearMe";
import GentsSalonNearMe from "./Components/NearMe/GentsSalon/GentsSalonNearMe";
import HeadMassageNearMe from "./Components/NearMe/HeadMassageNearMe.jsx/HeadMassageNearMe";
import FootMassageNearMe from "./Components/NearMe/FootMassageNearMe/FootMassageNearMe";
import OfferPage from "./Components/OfferPage/OfferPage";
import MainLayout from "./Components/MainLayout/MainLayout";
import NailExtensionPage from "./Components/NaliSalonPage/NailExtensionPage/NailExtensionPage";
import GelNailArtPage from "./Components/NaliSalonPage/GelNailArtPage/GelNailArtPage";
import ChromeGelPage from "./Components/NaliSalonPage/ChromeGelPage/ChromeGelPage";
import OmbreGelPolishPage from "./Components/NaliSalonPage/OmbreGelPolish/OmbreGelPolishPage";
import ClassicManicurePage from "./Components/NaliSalonPage/ClassicManicurePage/ClassicManicurePage";
import OrganicManicurePage from "./Components/NaliSalonPage/OrganicManicurePage/OrganicManicurePage";
import ClassicPedicurePage from "./Components/NaliSalonPage/ClassicPedicurePage/ClassicPedicurePage";
import OrganicPedicurePage from "./Components/NaliSalonPage/OrganicPedicurePage/OrganicPedicurePage";
import CutFilePage from "./Components/NaliSalonPage/CutFilePage/CutFilePage";
import CandlePedicurePage from "./Components/NaliSalonPage/CandlePedicurePage/CandlePedicurePage";
import CandleManicurePage from "./Components/NaliSalonPage/CandleManicurePage/CandleManicurePage";
import BridalMakeUpPage from "./Components/BridalMakeUpPage/BridalMakeUpPage";
import MicroBladingPage from "./Components/MicroBladingPage/MicroBladingPage";
import BlogPage from "./Components/BlogPage/BlogPage";
import NailColor from "./Components/NaliSalonPage/NailColor/NailColor";
import NailGeleration from "./Components/NaliSalonPage/NailGeleration/NailGeleration";
import FrenchGeleration from "./Components/NaliSalonPage/FrenchGeleration/FrenchGeleration";
import NailInfill from "./Components/NaliSalonPage/NailInfill/NailInfill";
import BridalMakeUpPackage from "./Components/BridalMakeUpPage/BridalInnerPages/BridalMakeUpPackage/BridalMakeUpPackage";
import PrebridalPackage from "./Components/BridalMakeUpPage/BridalInnerPages/Pre-bridalPackage/PrebridalPackage";
import HairTrim from "./Components/BlogPage/BlogInnerPages/HairTrim/HairTrim";
import OrganicFacial from "./Components/FacialPage/FacialInnerPage/OrganicFacial/OrganicFacial";
import SnowWhiteFacial from "./Components/FacialPage/FacialInnerPage/SnowWhiteFacial/SnowWhiteFacial";
import BlogMain from "./Components/BlogPage/BlogPages/BlogMain/BlogMain";
import BlogHair from "./Components/BlogPage/BlogPages/BlogHair/BlogHair";
import ChocolateFacialPage from "./Components/FacialPage/FacialInnerPage/ChocolateFacialPage/ChocolateFacialPage";
import WhiteSecretFacial from "./Components/FacialPage/FacialInnerPage/WhiteSecretFacial/WhiteSecretFacial";
import AcneCureFacial from "./Components/FacialPage/FacialInnerPage/AcneCureFacial/AcneCureFacial";
import DiamondFacial from "./Components/FacialPage/FacialInnerPage/DiamondFacial/DiamondFacial";
import AntiAgeFacial from "./Components/FacialPage/FacialInnerPage/AntiAgeFacial/AntiAgeFacial";
import GoldFacial from "./Components/FacialPage/FacialInnerPage/GoldFacial/GoldFacial";
import EyeProtectFacial from "./Components/FacialPage/FacialInnerPage/EyeProtectFacial/EyeProtectFacial";
import HydraFacial from "./Components/FacialPage/FacialInnerPage/HydraFacial/HydraFacial";
import LuminousFacial from "./Components/FacialPage/FacialInnerPage/LuminosFacial/LuminousFacial";
import BrazilianFacial from "./Components/FacialPage/FacialInnerPage/BrazilianFacial/BrazilianFacial";
import DeadSeaFacial from "./Components/FacialPage/FacialInnerPage/DeadSeaFacial/DeadSeaFacial";
import BouncyHair from "./Components/BlogPage/BlogInnerPages/BouncyHair/BouncyHair";
import FacePage from "./Components/Beauty/BeautyInnerPages/FacePage/FacePage";
import ArmsPage from "./Components/Beauty/BeautyInnerPages/ArmsPage/ArmsPage";
import LegsPage from "./Components/Beauty/BeautyInnerPages/LegsPage/LegsPage";
import BackPage from "./Components/Beauty/BeautyInnerPages/BackPage/BackPage";
import NeckPage from "./Components/Beauty/BeautyInnerPages/NeckPage/NeckPage";
import HeadSpa from "./Components/Spa/SpaInnerPage/HeadSpa/HeadSpa";
import FootSpa from "./Components/Spa/SpaInnerPage/FootSpa/FootSpa";
import ThaiReflexoSpa from "./Components/Spa/SpaInnerPage/ThaiReflexoSpa/ThaiReflexoSpa";
import BackSpa from "./Components/Spa/SpaInnerPage/BackSpa/BackSpa";
import AromaSpa from "./Components/Spa/SpaInnerPage/AromaSpa/AromaSpa";
import ThaiMassageSpa from "./Components/Spa/SpaInnerPage/ThaiMassageSpa/ThaiMassageSpa";
import DeepSpa from "./Components/Spa/SpaInnerPage/DeepSpa/DeepSpa";
import SportsSpa from "./Components/Spa/SpaInnerPage/SportsSpa/SportsSpa";
import BodyScrubSpa from "./Components/Spa/SpaInnerPage/BodyScrubSpa/BodyScrubSpa";
import BodyPolishSpa from "./Components/Spa/SpaInnerPage/BodyPolishSpa/BodyPolishSpa";
import StoneSpa from "./Components/Spa/SpaInnerPage/StoneSpa/StoneSpa";
import ScentMassageSpa from "./Components/Spa/SpaInnerPage/ScentMassageSpa/ScentMassageSpa";
import BalineseseSpa from "./Components/Spa/SpaInnerPage/BalineseseSpa/BalineseseSpa";
import LashesExtension from "./Components/Lashes/LashesInnerPage/LashesExtension/LashesExtension";
import Top10HairColor from "./Components/BlogPage/BlogInnerPages/Top10HairColor/Top10HairColor";
import HairBotox from "./Components/BlogPage/BlogInnerPages/HairBotox/HairBotox";
import HairCut from "./Components/HairServicePage/HairInnerServicePage/HairCut/HairCut";
import HairColor from "./Components/HairServicePage/HairInnerServicePage/HairColor/HairColor";
import HairSpa from "./Components/HairServicePage/HairInnerServicePage/HairSpa/HairSpa";
import HairTreatment from "./Components/HairServicePage/HairInnerServicePage/HairTreatment/HairTreatment";
import BeardPage from "./Components/HairServicePage/HairInnerServicePage/BeardPage/BeardPage";
import MustachePage from "./Components/HairServicePage/HairInnerServicePage/MustachePage/MustachePage";
import NavBg from "./Components/NavBg/NavBg";
import HairKeratin from "./Components/BlogPage/BlogInnerPages/HairKeratin/HairKeratin";
import BotoxLanding from "./Components/BotoxLanding/BotoxLanding";
import HairTreatmentLandingPage from "./Components/HairTreatmentLandingPage/HairTreatmentLandingPage";
import OlaplexLandingPage from "./Components/OlaplexLandingPage/OlaplexLandingPage";
import HairColorStreaksLandingPage from "./Components/HairColorStreaksLandingPage/HairColorStreaksLandingPage";
const NotFound = () => (
  <div
    style={{
      fontSize: "100px",
      width: "100%",
      textAlign: "center",
      backgroundColor: "grey",
      height: "100vh",
    }}
  >
    <NavBg />
    Page Not Found
  </div>
);

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MainLayout />
        <ScrollTo />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<MainServicePage />} />
          <Route path="/hair-salon" element={<HairServicePage />} />
          <Route path="/haircut-and-styling" element={<HairCut />} />
          <Route path="/hair-highlights-and-streaks" element={<HairColor />} />
          <Route path="/hair-spa" element={<HairSpa />} />
          <Route path="/hair-treatments" element={<HairTreatment />} />
          <Route path="/beard" element={<BeardPage />} />
          <Route path="/mustache-styling" element={<MustachePage />} />
          <Route path="/nails-salon" element={<NailSalonPage />} />
          <Route path="/facial" element={<FacialPage />} />
          <Route path="/beauty-essentials" element={<BeautyPage />} />
          <Route path="/spa" element={<SpaPages />} />
          <Route path="/eye-lashes" element={<LashesPage />} />
          <Route path="/bridal-makeup" element={<BridalMakeUpPage />} />
          <Route path="/eyebrow-microblading" element={<MicroBladingPage />} />
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
          <Route
            path="/hair-treatment-near-me"
            element={<HairTreatmentNearMe />}
          />
          <Route path="/body-spa-near-me" element={<BodySpaNearMe />} />
          <Route path="/gents-salon-near-me" element={<GentsSalonNearMe />} />
          <Route path="/head-massage-near-me" element={<HeadMassageNearMe />} />
          <Route path="/foot-massage-near-me" element={<FootMassageNearMe />} />
          <Route path="/offer" element={<OfferPage />} />
          <Route path="/nails-extension" element={<NailExtensionPage />} />
          <Route path="/gel-nail-art" element={<GelNailArtPage />} />
          <Route path="/chrome-gel-nail-polish" element={<ChromeGelPage />} />
          <Route
            path="/ombre-gel-nail-polish"
            element={<OmbreGelPolishPage />}
          />
          <Route path="/classic-manicure" element={<ClassicManicurePage />} />
          <Route path="/organic-manicure" element={<OrganicManicurePage />} />
          <Route path="/classic-pedicure" element={<ClassicPedicurePage />} />
          <Route path="/organic-pedicure" element={<OrganicPedicurePage />} />
          <Route path="/candle-spa-manicure" element={<CandleManicurePage />} />
          <Route path="/candle-spa-pedicure" element={<CandlePedicurePage />} />
          <Route path="/nail-cut-and-file" element={<CutFilePage />} />
          <Route path="/nail-color-change" element={<NailColor />} />
          <Route path="/nail-geleration" element={<NailGeleration />} />
          <Route
            path="/french-nail-geleration"
            element={<FrenchGeleration />}
          />
          <Route path="/nails-extension-infill" element={<NailInfill />} />
          <Route
            path="/bridal-makeup-packages"
            element={<BridalMakeUpPackage />}
          />

          <Route path="/blog" element={<BlogPage />}>
            <Route path="/blog" element={<BlogMain />} />
            <Route path="/blog/hair-blog" element={<BlogHair />} />
          </Route>
          <Route
            path="/does-trimming-hair-make-it-grow-faster"
            element={<HairTrim />}
          />
          <Route
            path="/tips-for-maintaining-hair-bouncy-and-beautiful-curls-during-monsoon"
            element={<BouncyHair />}
          />
          <Route
            path="/how-hair-botox-treatments-can-transform-your-tresses"
            element={<HairBotox />}
          />
          <Route
            path="/top-10-trending-women-hair-colours-and-highlights-for-2024"
            element={<Top10HairColor />}
          />
          <Route
            path="/why-you-should-consider-keratin-hair-treatment"
            element={<HairKeratin />}
          />
          <Route path="/pre-bridal-treatments" element={<PrebridalPackage />} />

          <Route path="/organic-facial-services" element={<OrganicFacial />} />
          <Route
            path="/snow-white-facial-services"
            element={<SnowWhiteFacial />}
          />
          <Route
            path="/dead-sea-mineral-facial-services"
            element={<DeadSeaFacial />}
          />
          <Route
            path="/chocolate-mint-facial-services"
            element={<ChocolateFacialPage />}
          />
          <Route
            path="/white-secret-facial-services"
            element={<WhiteSecretFacial />}
          />
          <Route
            path="/acne-cure-facial-services"
            element={<AcneCureFacial />}
          />
          <Route
            path="/diamond-glow-facial-services"
            element={<DiamondFacial />}
          />
          <Route
            path="/anti-ageing-facial-services"
            element={<AntiAgeFacial />}
          />
          <Route path="/gold-facial-services" element={<GoldFacial />} />
          <Route
            path="/eye-protection-facial-services"
            element={<EyeProtectFacial />}
          />
          <Route
            path="/hydra-lifting-ocean-miracle-facial-services"
            element={<HydraFacial />}
          />
          <Route
            path="/luminous-lightening-facial-services"
            element={<LuminousFacial />}
          />
          <Route
            path="/brazilian-skin-lightening-facial-services"
            element={<BrazilianFacial />}
          />
          <Route
            path="/face-waxing-detan-threading-salon-in-bangalore"
            element={<FacePage />}
          />
          <Route
            path="/arms-waxing-detan-threading-salon-in-bangalore"
            element={<ArmsPage />}
          />
          <Route
            path="/legs-waxing-detan-threading-salon-in-bangalore"
            element={<LegsPage />}
          />
          <Route
            path="/neck-waxing-detan-threading-salon-in-bangalore"
            element={<NeckPage />}
          />
          <Route
            path="/body-back-waxing-detan-threading-salon-in-bangalore"
            element={<BackPage />}
          />
          <Route path="/head-massage-in-bangalore" element={<HeadSpa />} />
          <Route path="/foot-massage-in-bangalore" element={<FootSpa />} />
          <Route
            path="/thai-reflexology-massage-in-bangalore"
            element={<ThaiReflexoSpa />}
          />
          <Route path="/back-massage-in-bangalore" element={<BackSpa />} />
          <Route path="/aroma-massage-in-bangalore" element={<AromaSpa />} />
          <Route
            path="/thai-massage-in-bangalore"
            element={<ThaiMassageSpa />}
          />
          <Route
            path="/deep-tissue-massage-in-bangalore"
            element={<DeepSpa />}
          />
          <Route path="/sportz-massage-in-bangalore" element={<SportsSpa />} />
          <Route
            path="/balinese-massage-in-bangalore"
            element={<BalineseseSpa />}
          />
          <Route
            path="/scent-signature-massage-in-bangalore"
            element={<ScentMassageSpa />}
          />
          <Route
            path="/hot-stone-therapy-massage-in-bangalore"
            element={<StoneSpa />}
          />
          <Route path="/body-polish-in-bangalore" element={<BodyPolishSpa />} />
          <Route path="/body-scrub-in-bangalore" element={<BodyScrubSpa />} />
          <Route
            path="/eye-lash-extensions-in-bangalore"
            element={<LashesExtension />}
          />
          <Route path="/lp-hair-botoxx" element={<BotoxLanding />} />
          <Route
            path="/lp-hair-treatments"
            element={<HairTreatmentLandingPage />}
          />
          <Route path="/lp-olaplex" element={<OlaplexLandingPage />} />
          <Route
            path="/lp-hair-highlights-and-streaks"
            element={<HairColorStreaksLandingPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
