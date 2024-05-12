import React from "react";
import "./LavellelLocPage.css";
import LocationNavBg from "./../LocationNavBg/LocationNavBg";
import LocEnquire from "../LocEnquire/LocEnquire";
import GoolgeReviews from "../GoogleReviews/GoogleReviews";
import LocationArrow from "../LocationArrow/LocationArrow";
import LastComp from "../../LastComp/LastComp";
import LavellelLocMap from "./LavellelLocMap/LavellelLocMap";
import LocationHead from "../LocationHead/LocationHead";
import LocationImg from "../LocationImg/LocationImg";
import loc2 from "./../../../Images/lavelle road.jpg";
import ServiceCardContain from "../../MainServicePages/ServiceCards/ServiceCardContain";
import UnisexSalon from "../../MainServicePages/UnisexSalon/UnisexSalon";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
const LavellelLocPage = () => {
  return (
    <div className="sahakarLocPageContainer">
      <LocationNavBg />
      <LocationImg img={loc2} />
      <LocationArrow leftLink={"/sahakar"} rightLink={"/jakkuru"} />
      <div className="sahakarLocPageContent">
        <LocationHead
          loc="Lavellel Road"
          phone="+91-9740222700"
          address=" No. 67/2, 1st Floor, Opposite. 3rd Cross Lavelle Road, Bengaluru,
        Karnataka 560001"
        />
        <ServiceCardContain />
        <UnisexSalon />
        <Members />
        <OurSalon />
        <Partners />
        <InstaFeed />
        <LavellelLocMap />
        <TextLocReviews />
        <LocEnquire />
      </div>
      <LastComp />
    </div>
  );
};

export default LavellelLocPage;
