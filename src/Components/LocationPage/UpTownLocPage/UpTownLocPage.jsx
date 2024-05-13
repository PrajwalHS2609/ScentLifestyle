import React from "react";
import LocEnquire from "../LocEnquire/LocEnquire";
import LastComp from "../../LastComp/LastComp";
import LocationArrow from "../LocationArrow/LocationArrow";
import LocationNavBg from "../LocationNavBg/LocationNavBg";
import "./UpTownLocPage.css";
import GoogleReviews from "../GoogleReviews/GoogleReviews";
import LocationHead from "../LocationHead/LocationHead";
import LocationImg from "../LocationImg/LocationImg";
import loc4 from "./../../../Images/Varthur - whitefield.jpg";
import ServiceCardContain from "../../MainServicePages/ServiceCards/ServiceCardContain";
import UnisexSalon from "../../MainServicePages/UnisexSalon/UnisexSalon";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import UptownLocMap from "./UptownLocMap/UptownLocMap";
import LocationNavi from "../LocationNavi/LocationNavi";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import UptownLocRead from "./UptownLocRead/UptownLocRead";
const UpTownLocPage = () => {
  return (
    <div className="uptownLocPageContainer">
      <LocationNavBg />
      <LocationImg img={loc4} />
      <LocationNavi loc="UpTown Square" />
      <LocationArrow leftLink={"/jakkuru"} rightLink={"/meadows"} />
      <div className="uptownLocPageContent">
        <LocationHead
          loc="Uptown Square"
          phone="+91-9148122700"
          address=" Uptown square, State Highway 35, Seegehalli, Whitefield - Hoskote
    Rd, Bengaluru, Karnataka 560067"
        />
        <ServiceCardContain />
        <UnisexSalon />
        <Members />
        <OurSalon />
        <Partners />
        <InstaFeed />
        <UptownLocMap />
        <TextLocReviews />
        <LocEnquire />
        <UptownLocRead/>
      </div>
      <LastComp />
    </div>
  );
};

export default UpTownLocPage;
