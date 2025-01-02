import React from "react";
import "./Global.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
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
import ShopPage from "./Components/ShopPage/ShopPage";
import SahakarLocPage from "./Components/LocationPage/SahakarLocPage/SahakarLocPage";
import LavellelLocPage from "./Components/LocationPage/LavelleLoc/LavellelLocPage";
import JakkuruLocPage from "./Components/LocationPage/JakkuruLocPage/JakkuruLocPage";
import UpTownLocPage from "./Components/LocationPage/UpTownLocPage/UpTownLocPage";
import MeadowsLocPage from "./Components/LocationPage/MeadowsLocPage/MeadowsLocPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import HairSalonSahakar from "./Components/HairSalonLocations/HairSalonSahakar/HairSalonSahakar";
import HairSalonLavelle from "./Components/HairSalonLocations/HairSalonLavelle/HairSalonLavelle";
import HairSalonJakkur from "./Components/HairSalonLocations/HairSalonJakkur/HairSalonJakkur";
import HairSalonUptown from "./Components/HairSalonLocations/HairSalonUptown/HairSalonUptown";
import HairSalonMeadows from "./Components/HairSalonLocations/HairSalonMedows/HairSalonMeadows";
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
import HairKeratin from "./Components/BlogPage/BlogInnerPages/HairKeratin/HairKeratin";
import BotoxLanding from "./Components/BotoxLanding/BotoxLanding";
import HairTreatmentLandingPage from "./Components/HairTreatmentLandingPage/HairTreatmentLandingPage";
import OlaplexLandingPage from "./Components/OlaplexLandingPage/OlaplexLandingPage";
import HairColorStreaksLandingPage from "./Components/HairColorStreaksLandingPage/HairColorStreaksLandingPage";
import BlogNail from "./Components/BlogPage/BlogPages/BlogNail/BlogNail";
import PediAndManicure from "./Components/BlogPage/BlogInnerPages/NailBlogInnerPages/PediAndManicure/PediAndManicure";
import BlogSpa from "./Components/BlogPage/BlogPages/BlogSpa/BlogSpa";
import SpaDay from "./Components/BlogPage/BlogInnerPages/SpaInnerPages/SpaDay/SpaDay";
import OfferTesting from "./Components/OfferTesting/OfferTesting";
import BlogBeautyEssentials from "./Components/BlogPage/BlogPages/BlogBeautyEssentials/BlogBeautyEssentials";
import BrazilianWaxing from "./Components/BlogPage/BlogInnerPages/BeautyBlogInnerPages/BrazilianWaxing/BrazilianWaxing";
import BrazilWaxingService from "./Components/Beauty/BrazilWaxingService/BrazilWaxingService";
import ChicSleek from "./Components/BlogPage/BlogInnerPages/HairBlogInnerPages/ChicSleek/ChicSleek";
import Botox from "./Components/HairTreatments/Botox/Botox";
import Keratin from "./Components/HairTreatments/Keratin/Keratin";
import Olaplex from "./Components/HairTreatments/Olaplex/Olaplex";
import Top5Spa from "./Components/BlogPage/BlogInnerPages/SpaInnerPages/Top5Spa/Top5Spa";
import SalonFranchise from "./Components/FranchisePage/FranchiseInnerPage/SalonFranchise ";
import HowOlaplex from "./Components/BlogPage/BlogInnerPages/HairBlogInnerPages/HowOlaplex/HowOlaplex";
import StepByStep from "./Components/BlogPage/BlogInnerPages/FranchiseInnerPage/StepByStep/StepByStep";
import WhyEyeBrowPage from "./Components/BlogPage/BlogInnerPages/EyeBrowInnerPages/WhyEyeBrowPage/WhyEyeBrowPage";
import BlogEyeBrow from "./Components/BlogPage/BlogPages/BlogEyeBrow/BlogEyeBrow";
import Glamorous from "./Components/BlogPage/BlogInnerPages/HairBlogInnerPages/Glamorous/Glamorous";
import HairSalonNearMe from "./Components/NearMe/HairSalonNearMe/HairSalonNearMe";
import HairBeautyNearMe from "./Components/NearMe/HairBeautyNearMe/HairBeautyNearMe";
import HairColoristNearMe from "./Components/NearMe/HairColoristNearMe/HairColoristNearMe";
import UnisexHairSalonNearMe from "./Components/NearMe/UnisexHairSalonNearMe/UnisexHairSalonNearMe";
import BrunetteColorNearMe from "./Components/NearMe/BrunetteColorNearMe/BrunetteColorNearMe";
import GlobalColorNearMe from "./Components/NearMe/GlobalColorNearMe/GlobalColorNearMe";
import BalayageColorNearMe from "./Components/NearMe/BalayageColorNearMe/BalayageColorNearMe";
import HairColorServiceNearMe from "./Components/NearMe/HairColorServiceNearMe/HairColorServiceNearMe";
import SchwarzkopfColorNearMe from "./Components/NearMe/SchwarzkopfColorNearMe/SchwarzkopfColorNearMe";
import GoldenColorNearMe from "./Components/NearMe/GoldenColorNearMe/GoldenColorNearMe";
import WhyKeratin from "./Components/BlogPage/BlogInnerPages/HairBlogInnerPages/WhyKeratin/WhyKeratin";
import CurlyHair from "./Components/BlogPage/BlogInnerPages/HairBlogInnerPages/CurlyHair/CurlyHair";
import HairColorTry from "./Components/BlogPage/BlogInnerPages/HairBlogInnerPages/HairColorTry/HairColorTry";
import ButterflyHaircut from "./Components/HairServicePage/ButterflyHaircut/ButterflyHaircut";
import OctopusHairCut from "./Components/HairServicePage/OctopusHairCut/OctopusHairCut";
import MulletHairCut from "./Components/HairServicePage/MulletHairCut/MulletHairCut";
import NailExtensionBangalore from "./Components/NaliSalonPage/NailExtensionBangalore/NailExtensionBangalore";
import HairBotoxTreatment from "./Components/BlogPage/BlogInnerPages/HairBlogInnerPages/HairBotoxTreatment/HairBotoxTreatment";
import HairHydrationSpa from "./Components/HairServicePage/HairHydrationSpa/HairHydrationSpa";
import HairAntiDandruffSpa from "./Components/HairServicePage/HairAntiDandruffSpa/HairAntiDandruffSpa";
import HairStraightening from "./Components/HairServicePage/HairStraightening/HairStraightening";
import HairDetoxSpa from "./Components/HairServicePage/HairDetoxSpa/HairDetoxSpa";
import HairColouredSpa from "./Components/HairServicePage/HairColouredSpa/HairColouredSpa";
import HairSpaTreatment from "./Components/BlogPage/BlogInnerPages/HairBlogInnerPages/HairSpaTreatment/HairSpaTreatment";
import BodyDTanTreatment from "./Components/BlogPage/BlogInnerPages/BeautyBlogInnerPages/BodyDTanTreatment/BodyDTanTreatment";
import LashesExtensionBlog from "./Components/BlogPage/BlogInnerPages/LashesBlogInnerPages/LashesExtension/LashesExtension";
import NailArtNearMe from "./Components/NearMe/NailArtNearMe/NailArtNearMe";
import GelNailExtensionNearMe from "./Components/NearMe/GelNailExtensionNearMe/GelNailExtensionNearMe";
import PedicuristNearMe from "./Components/NearMe/PedicuristNearMe/PedicuristNearMe";
import QAPage from "./Components/QAPage/QAPage";
import HairBleach from "./Components/BlogPage/BlogInnerPages/HairBlogInnerPages/HairBleach/HairBleach";
import Footer from "./Components/Footer/Footer";
import WhatsApp from "./Components/HomePage/WhatsApp/WhatsApp";
import Academy from "./Components/Academy/Academy";
import Christmas from "./Components/Christmas/Christmas";
import SantaClause from "./Components/SantaClause/SantaClause";
import BodyWaxingMyth from "./Components/BlogPage/BlogInnerPages/BeautyBlogInnerPages/BodyWaxingMyth/BodyWaxingMyth";
import ChristmasOffer from "./Components/BlogPage/BlogInnerPages/BlogOffers/ChristmasOffer/ChristmasOffer";
import Questions from "./Components/QAPage/Questions";
import UpperNav from "./Components/UpperNav/UpperNav";
import NavBar from "./Components/NavBar/NavBar";
import QuestionAnswer1 from "./Components/QAPage/QuestionAnswerPage/QuestionAnswer1";
import AcademyEnroll from "./Components/BlogPage/BlogInnerPages/OtherBlogInnerPages/AcademyEnroll/AcademyEnroll";
import BlogOffers from "./Components/BlogPage/BlogPages/BlogOffers/BlogOffers";
import BlogAcademy from "./Components/BlogPage/BlogPages/BlogAcademy/BlogAcademy";
import BlogFacial from "./Components/BlogPage/BlogPages/BlogFacial/BlogFacial";
import ClearerSkinFacial from "./Components/BlogPage/BlogInnerPages/FacialBlogInnerPages/ClearerSkinFacial/ClearerSkinFacial";
import HairSalonInSahakaranagar from "./Components/LocationServices/HairLocationServices/HairSalonInSahakaranagar/HairSalonInSahakaranagar";
import HairSalonInMeadows from "./Components/LocationServices/HairLocationServices/HairSalonInMeadows/HairSalonInMeadows";
import HairSalonInLavelle from "./Components/LocationServices/HairLocationServices/HairSalonInLavelle/HairSalonInLavelle";
import HairSalonInJakkur from "./Components/LocationServices/HairLocationServices/HairSalonInJakkur/HairSalonInJakkur";
import HairSalonInUptown from "./Components/LocationServices/HairLocationServices/HairSalonInUptown/HairSalonInUptown";
import NailExtensionInMeadows from "./Components/LocationServices/NailLocationServices/NailExtensionInMeadows/NailExtensionInMeadows";
import NailExtensionInLavelle from "./Components/LocationServices/NailLocationServices/NailExtensionInLavelle/NailExtensionInLavelle";
import NailSalonInSahakarNagar from "./Components/LocationServices/NailLocationServices/NailSalonInSahakarNagar/NailSalonInSahakarNagar";
import NailSalonInUptown from "./Components/LocationServices/NailLocationServices/NaliSalonInUptown/NailSalonInUptown";
import NailExtensionInJakkur from "./Components/LocationServices/NailLocationServices/NailExtensionInJakkur/NailExtensionInJakkur";
import NailExtensionInUptown from "./Components/LocationServices/NailLocationServices/NailExtensionInUptown/NailExtensionInUptown";
import FacialInMeadows from "./Components/LocationServices/FacialLocationServices/FacialInMeadows/FacialInMeadows";
import FacialInSahakaraNagar from "./Components/LocationServices/FacialLocationServices/FacialInSahakaraNagar/FacialInSahakaraNagar";
import FacialInUptown from "./Components/LocationServices/FacialLocationServices/FacialInUptown/FacialInUptown";
import FacialInJakkur from "./Components/LocationServices/FacialLocationServices/FacialInJakkur/FacialInJakkur";
import LashesInUptown from "./Components/LocationServices/LashesLocationServices/LashesInUptown/LashesInUptown";
import LashesInJakkur from "./Components/LocationServices/LashesLocationServices/LashesInJakkur/LashesInJakkur";
import LashesInLavelle from "./Components/LocationServices/LashesLocationServices/LashesInLavelle/LashesInLavelle";
import LashesInMeadows from "./Components/LocationServices/LashesLocationServices/LashesInMeadows/LashesInMeadows";
import LashesInSahakarNagar from "./Components/LocationServices/LashesLocationServices/LashesInSahakarNagar/LashesInSahakarNagar";
import MicroBladingInUptown from "./Components/LocationServices/MicroBladingLocationServices/MicroBladingInUptown/MicroBladingInUptown";
import MicroBladingInJakkur from "./Components/LocationServices/MicroBladingLocationServices/MicroBladingInJakkur/MicroBladingInJakkur";
import MicroBladingInSahakarNagar from "./Components/LocationServices/MicroBladingLocationServices/MicroBladingInSahakarNagar/MicroBladingInSahakarNagar";
import MicroBladingInMeadows from "./Components/LocationServices/MicroBladingLocationServices/MicroBladingInMeadows/MicroBladingInMeadows";
import MicroBladingInLavelle from "./Components/LocationServices/MicroBladingLocationServices/MicroBladingInLavelle/MicroBladingInLavelle";
import BeautyInSahakarNagar from "./Components/LocationServices/BeautyLocationServices/BeautyInSahakarNagar/BeautyInSahakarNagar";
import BridalMakeUpInSahakarNagar from "./Components/LocationServices/BridalLocationServices/BridalMakeUpInSahakarNagar/BridalMakeUpInSahakarNagar";
import SpaInSahakarNagar from "./Components/LocationServices/SpaLocationServices/SpaInSahakarNagar/SpaInSahakarNagar";
import BridalMakeupInMeadows from "./Components/LocationServices/BridalLocationServices/BridalMakeupInMeadows/BridalMakeupInMeadows";
import SpaInMeadows from "./Components/LocationServices/SpaLocationServices/SpaInMeadows/SpaInMeadows";
import SpaInLavelle from "./Components/LocationServices/SpaLocationServices/SpaInLavelle/SpaInLavelle";
import BridalMakeUpInLavelle from "./Components/LocationServices/BridalLocationServices/BridalMakeUpInLavelle/BridalMakeUpInLavelle";
import SpaInJakkur from "./Components/LocationServices/SpaLocationServices/SpaInJakkur/SpaInJakkur";
import BridalMakeupInJakkur from "./Components/LocationServices/BridalLocationServices/BridalMakeupInJakkur/BridalMakeupInJakkur";
import BeautyInUptown from "./Components/LocationServices/BeautyLocationServices/BeautyInUptown/BeautyInUptown";
import SpaInUptown from "./Components/LocationServices/SpaLocationServices/SpaInUptown/SpaInUptown";
import BridalMakeupInUptown from "./Components/LocationServices/BridalLocationServices/BridalMakeupInUptown/BridalMakeupInUptown";
import NailSalonInLavelle from "./Components/LocationServices/NailLocationServices/NailSalonInLavelle/NailSalonInLavelle";
import BodyWaxingInLavelle from "./Components/LocationServices/BeautyLocationServices/BodyWaxingInLavelle/BodyWaxingInLavelle";
import NailSalonInJakkur from "./Components/LocationServices/NailLocationServices/NailSalonInJakkur/NailSalonInJakkur";
import BodyWaxingInJakkur from "./Components/LocationServices/BeautyLocationServices/BodyWaxingInJakkur/BodyWaxingInJakkur";
import NailSalonInMeadows from "./Components/LocationServices/NailLocationServices/NailSalonInMeadows/NailSalonInMeadows";
import BodyWaxingInMeadows from "./Components/LocationServices/BeautyLocationServices/BodyWaxingInMeadows/BodyWaxingInMeadows";
import HairScalpTreatment from "./Components/HairServicePage/HairScalpTreatment/HairScalpTreatment";

const MainApp = () => {
  const location = useLocation();

  const hideNavbarPaths = [
    "/offer",
    "/lp-hair-botoxx",
    "/lp-hair-treatment",
    "/lp-olaplex",
    "/lp-hair-highlights-and-streaks",
    "/offer-testing",
  ];
  const disableScrollTo = ["/q-and-a", "/q-and-a/", "/q-and-a/question1"];
  return (
    <div>
      {!hideNavbarPaths.includes(location.pathname) && <UpperNav />}
      {!hideNavbarPaths.includes(location.pathname) && <NavBar />}
      {!(
        hideNavbarPaths.includes(location.pathname) ||
        disableScrollTo.includes(location.pathname)
      ) && <ScrollTo />}

      <SantaClause />
      <Christmas />
      <Routes>
        {/* ----pageNotfound---- */}
        <Route path="*" element={<Navigate to="/" replace />} />
        {/* ----/pageNotfound---- */}
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
        {/* -------------Redirection-------------*/}
        <Route
          path="/beauty-salon-franchise-in-bangalore"
          element={<SalonFranchise />}
        />
        <Route
          path="/franchise"
          element={
            <Navigate to="/beauty-salon-franchise-in-bangalore" replace />
          }
        />
        {/* -------------/Redirection-------------*/}
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/salon-in-sahakar-nagar" element={<SahakarLocPage />} />
        <Route path="/salon-in-lavelle-road" element={<LavellelLocPage />} />
        <Route path="/salon-in-jakkur" element={<JakkuruLocPage />} />
        <Route path="/salon-in-uptown-whitefield" element={<UpTownLocPage />} />
        <Route path="/salon-in-whitefield" element={<MeadowsLocPage />} />
        {/* -------------Redirection-------------*/}
        <Route
          path="/hair-cut-salon-in-sahakar-nagar"
          element={<HairSalonSahakar />}
        />
        <Route
          path="/hair-salon-in-sahakar-nagar"
          element={<Navigate to="/hair-cut-salon-in-sahakar-nagar" replace />}
        />
        {/* -------------/Redirection-------------*/}
        <Route
          path="/hair-cut-salon-in-lavelle-road"
          element={<HairSalonLavelle />}
        />
        <Route path="/hair-cut-salon-in-jakkur" element={<HairSalonJakkur />} />
        <Route
          path="/hair-cut-salon-in-uptown-whitefield"
          element={<HairSalonUptown />}
        />
        <Route
          path="/hair-cut-salon-in-meadows-whitefield"
          element={<HairSalonMeadows />}
        />

        {/* -----------------------------------hairSubService------------------           */}
        <Route
          path="/hair-hydration-boost-spa-in-bangalore"
          element={<HairHydrationSpa />}
        />
        <Route
          path="/hair-anti-dandruff-spa-in-bangalore"
          element={<HairAntiDandruffSpa />}
        />
        <Route
          path="/hair-straightening-salon-in-bangalore"
          element={<HairStraightening />}
        />
        <Route path="/hair-detox-spa-in-bangalore" element={<HairDetoxSpa />} />
        <Route
          path="/hair-spa-for-colored-hair-in-bangalore"
          element={<HairColouredSpa />}
        />
        <Route
          path="/hair-scalp-treatment-in-bangalore"
          element={<HairScalpTreatment />}
        />
        {/* ------------------------------/hairSubService------------------- */}
        {/* --------------------------------------NearMe------------------------ */}
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
        <Route path="/hair-salon-near-me" element={<HairSalonNearMe />} />
        <Route
          path="/hair-and-beauty-salon-near-me"
          element={<HairBeautyNearMe />}
        />
        <Route
          path="/gents-hair-salon-near-me"
          element={<GentsSalonNearMe />}
        />
        <Route
          path="/unisex-hair-salon-near-me"
          element={<UnisexHairSalonNearMe />}
        />
        <Route
          path="/hair-colorist-salon-near-me"
          element={<HairColoristNearMe />}
        />
        <Route
          path="/brunette-hair-color-and-highlights-near-me"
          element={<BrunetteColorNearMe />}
        />
        <Route
          path="/global-hair-color-salon-near-me"
          element={<GlobalColorNearMe />}
        />
        <Route
          path="/balayage-hair-color-salon-near-me"
          element={<BalayageColorNearMe />}
        />
        <Route
          path="/hair-color-services-near-me"
          element={<HairColorServiceNearMe />}
        />
        <Route
          path="/schwarzkopf-hair-color-near-me"
          element={<SchwarzkopfColorNearMe />}
        />
        <Route
          path="/golden-brown-hair-color-near-me"
          element={<GoldenColorNearMe />}
        />
        <Route path="/pedicurist-near-me" element={<PedicuristNearMe />} />
        <Route
          path="/gel-nail-extension-near-me"
          element={<GelNailExtensionNearMe />}
        />
        <Route path="/nail-art-near-me" element={<NailArtNearMe />} />

        {/* -----------------------------/NearMe-------------------------------------------------           */}
        <Route path="/nails-extension" element={<NailExtensionPage />} />
        <Route
          path="/nail-extensions-in-bangalore"
          element={<NailExtensionBangalore />}
        />
        <Route path="/gel-nail-art" element={<GelNailArtPage />} />
        <Route path="/chrome-gel-nail-polish" element={<ChromeGelPage />} />
        <Route path="/ombre-gel-nail-polish" element={<OmbreGelPolishPage />} />
        <Route path="/classic-manicure" element={<ClassicManicurePage />} />
        <Route path="/organic-manicure" element={<OrganicManicurePage />} />
        <Route path="/classic-pedicure" element={<ClassicPedicurePage />} />
        <Route path="/organic-pedicure" element={<OrganicPedicurePage />} />
        <Route path="/candle-spa-manicure" element={<CandleManicurePage />} />
        <Route path="/candle-spa-pedicure" element={<CandlePedicurePage />} />
        <Route path="/nail-cut-and-file" element={<CutFilePage />} />
        <Route path="/nail-color-change" element={<NailColor />} />
        <Route path="/nail-geleration" element={<NailGeleration />} />
        <Route path="/french-nail-geleration" element={<FrenchGeleration />} />
        <Route path="/nails-extension-infill" element={<NailInfill />} />
        <Route
          path="/bridal-makeup-packages"
          element={<BridalMakeUpPackage />}
        />
        {/* ------------------------------hairStyleService------------------------- */}
        <Route
          path="/butterfly-haircut-for-women-in-bangalore"
          element={<ButterflyHaircut />}
        />
        <Route
          path="/octopus-haircut-for-women-in-bangalore"
          element={<OctopusHairCut />}
        />
        <Route
          path="/modern-mullet-haircut-for-women-in-bangalore"
          element={<MulletHairCut />}
        />
        {/* ------------------------------/hairStyleService------------------------- */}

        {/* --------------------Blog------------------------------------- */}
        <Route path="/blog" element={<BlogPage />}>
          <Route path="/blog" element={<BlogMain />} />
          <Route path="/blog/hair-blog" element={<BlogHair />} />
          <Route path="/blog/nail-blog" element={<BlogNail />} />
          <Route path="/blog/facial-blog" element={<BlogFacial />} />

          <Route path="/blog/spa-blog" element={<BlogSpa />} />
          <Route
            path="/blog/beauty-essentials-blog"
            element={<BlogBeautyEssentials />}
          />
          <Route
            path="/blog/eyebrow-microblading-blog"
            element={<BlogEyeBrow />}
          />
          <Route path="/blog/offers" element={<BlogOffers />} />
          <Route path="/blog/academy" element={<BlogAcademy />} />
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
        <Route
          path="/exploring-the-benefits-of-professional-pedicures-and-manicures"
          element={<PediAndManicure />}
        />
        <Route
          path="/how-a-spa-day-can-boost-your-mental-health"
          element={<SpaDay />}
        />
        <Route
          path="/everything-you-need-to-know-about-brazilian-waxing"
          element={<BrazilianWaxing />}
        />
        <Route
          path="/chic-and-sleek-womens-haircuts-that-define-you"
          element={<ChicSleek />}
        />
        <Route
          path="/the-top-5-reasons-to-book-a-hair-spa-today"
          element={<Top5Spa />}
        />
        <Route
          path="/how-olaplex-helps-maintain-healthy-hair-after-coloring"
          element={<HowOlaplex />}
        />
        <Route
          path="/step-by-step-guide-to-setting-up-a-successful-salon-franchise-in-bangalore"
          element={<StepByStep />}
        />
        <Route
          path="/why-eyebrow-shaping-is-the-secret-to-a-polished-look"
          element={<WhyEyeBrowPage />}
        />
        <Route
          path="/get-ready-for-a-glamorous-night-out-5-quick-and-easy-hairstyles"
          element={<Glamorous />}
        />
        <Route
          path="/why-keratin-hair-treatment-is-the-ultimate-solution-for-damaged-hair"
          element={<WhyKeratin />}
        />
        <Route
          path="/is-curly-hair-the-right-style-for-you-heres-how-to-find-out"
          element={<CurlyHair />}
        />
        <Route
          path="/25-hair-colors-every-woman-should-try"
          element={<HairColorTry />}
        />
        <Route
          path="/hair-botox-treatment-all-you-need-to-know"
          element={<HairBotoxTreatment />}
        />
        <Route
          path="/top-benefits-of-regular-hair-spa-treatments"
          element={<HairSpaTreatment />}
        />
        <Route
          path="/the-role-of-body-d-tan-in-anti-aging-skincare"
          element={<BodyDTanTreatment />}
        />
        <Route
          path="/eyelash-extensions-for-special-occasions-your-go-to-glam-look"
          element={<LashesExtensionBlog />}
        />
        <Route
          path="/how-often-should-you-bleach-your-hair"
          element={<HairBleach />}
        />
        <Route
          path="/the-truth-about-body-waxing-myths-facts-and-tips"
          element={<BodyWaxingMyth />}
        />
        <Route
          path="/get-festive-ready-top-christmas-beauty-tips-for-women-and-men"
          element={<ChristmasOffer />}
        />
        <Route
          path="/top-10-reasons-to-enroll-in-our-premier-salon-academy-today"
          element={<AcademyEnroll />}
        />
        <Route
          path="/clearer-skin-happier-you-acne-cure-facial-secrets"
          element={<ClearerSkinFacial />}
        />
        {/* ------------------------/blog------------------------      */}

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
        <Route path="/acne-cure-facial-services" element={<AcneCureFacial />} />
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
        <Route path="/thai-massage-in-bangalore" element={<ThaiMassageSpa />} />
        <Route path="/deep-tissue-massage-in-bangalore" element={<DeepSpa />} />
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

        <Route path="/offer" element={<OfferTesting />} />
        <Route
          path="/brazilian-waxing-services-in-bangalore"
          element={<BrazilWaxingService />}
        />
        <Route path="/hair-botox-treatments-in-bangalore" element={<Botox />} />
        <Route
          path="/keratin-hair-treatments-in-bangalore"
          element={<Keratin />}
        />
        <Route
          path="/olaplex-hair-treatments-in-bangalore"
          element={<Olaplex />}
        />

        {/* -----------------InSahakarNagar-------------- */}
        <Route
          path="/hair-salon-in-sahakara-nagar-bangalore"
          element={<HairSalonInSahakaranagar />}
        />
        <Route
          path="/nail-salon-in-sahakara-nagar-bangalore"
          element={<NailSalonInSahakarNagar />}
        />
        <Route
          path="/facials-in-sahakara-nagar-bangalore"
          element={<FacialInSahakaraNagar />}
        />
        <Route
          path="/body-waxing-threading-and-d-tan-in-sahakara-nagar-bangalore"
          element={<BeautyInSahakarNagar />}
        />
        <Route
          path="/spa-in-sahakara-nagar-bangalore"
          element={<SpaInSahakarNagar />}
        />
        <Route
          path="/eye-lashes-in-sahakara-nagar-bangalore"
          element={<LashesInSahakarNagar />}
        />
        <Route
          path="/bridal-makeup-in-sahakara-nagar-bangalore"
          element={<BridalMakeUpInSahakarNagar />}
        />
        <Route
          path="/eyebrow-microblading-in-sahakara-nagar-bangalore"
          element={<MicroBladingInSahakarNagar />}
        />
        {/* ----------------------/InSahakarnagar---------------------- */}

        {/* ----------------------InMeadows---------------------- */}
        <Route
          path="/hair-salon-in-meadows-whitefield-bangalore"
          element={<HairSalonInMeadows />}
        />
        <Route
          path="/nail-salon-in-meadows-whitefield"
          element={<NailSalonInMeadows />}
        />
        <Route
          path="/facials-in-meadows-whitefield"
          element={<FacialInMeadows />}
        />
        <Route
          path="/body-waxing-threading-and-d-tan-in-meadows-whitefield"
          element={<BodyWaxingInMeadows />}
        />
        <Route path="/spa-in-meadows-whitefield" element={<SpaInMeadows />} />
        <Route
          path="/eye-lashes-in-meadows-whitefield"
          element={<LashesInMeadows />}
        />
        <Route
          path="/bridal-makeup-in-meadows-whitefield"
          element={<BridalMakeupInMeadows />}
        />
        <Route
          path="/eyebrow-microblading-in-meadows-whitefield"
          element={<MicroBladingInMeadows />}
        />
        <Route
          path="/nail-extensions-near-meadows-whitefield"
          element={<NailExtensionInMeadows />}
        />
        {/* ----------------------/InMeadows---------------------- */}

        {/* -------------------InLavelleRoad-------------------- */}
        <Route
          path="/hair-salon-in-lavelle-road"
          element={<HairSalonInLavelle />}
        />
        <Route
          path="/nail-salon-in-lavelle-road"
          element={<NailSalonInLavelle />}
        />
        <Route
          path="/body-waxing-threading-and-d-tan-in-lavelle-road"
          element={<BodyWaxingInLavelle />}
        />
        <Route path="/spa-in-lavelle-road" element={<SpaInLavelle />} />
        <Route
          path="/eye-lashes-in-lavelle-road"
          element={<LashesInLavelle />}
        />
        <Route
          path="/bridal-makeup-in-lavelle-road"
          element={<BridalMakeUpInLavelle />}
        />
        <Route
          path="/eyebrow-microblading-in-lavelle-road"
          element={<MicroBladingInLavelle />}
        />
        <Route
          path="/nail-extensions-near-lavelle-road"
          element={<NailExtensionInLavelle />}
        />
        {/* -----------------------/InLavelleRoad-------------------- */}
        {/*-----------------InJakkur------------------------------------ */}
        <Route path="/hair-salon-in-jakkur" element={<HairSalonInJakkur />} />
        <Route path="/nail-salon-in-jakkur" element={<NailSalonInJakkur />} />
        <Route path="/facials-in-jakkur" element={<FacialInJakkur />} />
        <Route
          path="/body-waxing-threading-and-d-tan-in-jakkur"
          element={<BodyWaxingInJakkur />}
        />
        <Route path="/spa-in-jakkur" element={<SpaInJakkur />} />
        <Route path="/eye-lashes-in-jakkur" element={<LashesInJakkur />} />
        <Route
          path="/bridal-makeup-in-jakkur"
          element={<BridalMakeupInJakkur />}
        />
        <Route
          path="/eyebrow-microblading-in-jakkur"
          element={<MicroBladingInJakkur />}
        />
        <Route
          path="/nail-extensions-near-jakkur"
          element={<NailExtensionInJakkur />}
        />

        {/* -----------------------InUptown--------------------------- */}
        <Route
          path="/hair-salon-in-uptown-whitefield-bangalore"
          element={<HairSalonInUptown />}
        />
        <Route
          path="/nail-salon-in-uptown-whitefield"
          element={<NailSalonInUptown />}
        />
        <Route
          path="/facials-in-uptown-whitefield-bangalore"
          element={<FacialInUptown />}
        />
        <Route
          path="/body-waxing-threading-and-d-tan-in-uptown-whitefield-bangalore"
          element={<BeautyInUptown />}
        />
        <Route
          path="/spa-in-uptown-whitefield-bangalore"
          element={<SpaInUptown />}
        />
        <Route
          path="/eye-lashes-in-uptown-whitefield-bangalore"
          element={<LashesInUptown />}
        />
        <Route
          path="/bridal-makeup-in-uptown-whitefield-bangalore"
          element={<BridalMakeupInUptown />}
        />
        <Route
          path="/eyebrow-microblading-in-uptown-whitefield-bangalore"
          element={<MicroBladingInUptown />}
        />
        <Route
          path="/nail-extensions-near-uptown-whitefield"
          element={<NailExtensionInUptown />}
        />
        {/* -----------------------/InUptown--------------------------- */}
        <Route path="/q-and-a" element={<QAPage />}>
          <Route path="/q-and-a/" element={<Questions />} />
          <Route path="/q-and-a/question1" element={<QuestionAnswer1 />} />
        </Route>
        <Route path="/academy" element={<Academy />} />
      </Routes>
      <WhatsApp />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

export default App;
