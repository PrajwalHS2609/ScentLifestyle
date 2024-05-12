import React from "react";
import LocationNavBg from "../LocationNavBg/LocationNavBg";
import LocationArrow from "../LocationArrow/LocationArrow";
import LocEnquire from "../LocEnquire/LocEnquire";
import LastComp from "../../LastComp/LastComp";
import GoogleReviews from "../GoogleReviews/GoogleReviews";
import LocationHead from "../LocationHead/LocationHead";
import LocationImg from "../LocationImg/LocationImg";
import loc5 from "./../../../Images/seegehalli - whitefield.jpg";
import ServiceCardContain from "../../MainServicePages/ServiceCards/ServiceCardContain";
import UnisexSalon from "../../MainServicePages/UnisexSalon/UnisexSalon";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import MeadowsLocMap from "./MeadowsLocMap/MeadowsLocMap";
import "./MeadowsLocPage.css";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
const MeadowsLocPage = () => {
  return (
    <div className="meadowsLocPageContainer">
      <LocationNavBg />
      <LocationImg img={loc5} />
      <LocationArrow leftLink={"/uptown"} rightLink={"/jp"} />
      <div className="meadowsLocPageContent">
        <LocationHead
          loc="Meadows"
          phone="+91-9686221700"
          address=" Palm Meadows, No. 3/3, Ramaiah building, Palm Meadows, Boulevard
Varthur Main Road Ramagondanahalli, Whitefield Bengaluru Karnataka
560066"
        />
        <ServiceCardContain />
        <UnisexSalon />
        <Members />
        <OurSalon />
        <Partners />
        <InstaFeed />
        <MeadowsLocMap />
        <TextLocReviews />
        <LocEnquire />
      </div>
      <LastComp />
    </div>
  );
};

export default MeadowsLocPage;
