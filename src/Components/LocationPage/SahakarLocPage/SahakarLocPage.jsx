import React from "react";
import "./SahakarLocPage.css";
import LocationNavBg from "../LocationNavBg/LocationNavBg";
import SahakarLocMap from "./SahakarLocMap/SahakarLocMap";
import LastComp from "./../../LastComp/LastComp";
import LocationArrow from "../LocationArrow/LocationArrow";
import LocationHead from "../LocationHead/LocationHead";
import LocationImg from "../LocationImg/LocationImg";
import loc1 from "./../../../Images/sahakaranagar.jpg";
import ServiceCardContain from "../../MainServicePages/ServiceCards/ServiceCardContain";
import UnisexSalon from "../../MainServicePages/UnisexSalon/UnisexSalon";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import LocationNavi from "../LocationNavi/LocationNavi";
import SahakarReadLoc from "./SahakarReadLoc/SahakarReadLoc";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
const SahakarLocPage = () => {
  return (
    <div className="sahakarLocPageContainer">
      <LocationNavBg />
      <LocationImg img={loc1} />
      <LocationNavi loc="Sahakar Nagar" />
      <LocationArrow leftLink={"/jp"} rightLink={"/lavelle"} />
      <div className="sahakarLocPageContent">
        <LocationHead
          loc="Sahakar Nagar"
          phone="+91-9740322700"
          address="F block, 325/8, 60 Feet Rd, Opp Axis Bank, Sahakar Nagar, Byatarayanapura, Bengaluru, Karnataka 560092"
          map={<SahakarLocMap />}
        />
        <ServiceCardContain />
        <UnisexSalon />
        <Members />
        <OurSalon />
        <Partners />
        <InstaFeed />
        <TextLocReviews />
        <SahakarReadLoc />
      </div>
      <LastComp />
    </div>
  );
};

export default SahakarLocPage;
