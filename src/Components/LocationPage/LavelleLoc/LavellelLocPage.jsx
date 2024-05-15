import React from "react";
import "./LavellelLocPage.css";
import LocationNavBg from "./../LocationNavBg/LocationNavBg";
import LocEnquire from "../LocEnquire/LocEnquire";
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
import LocationNavi from "../LocationNavi/LocationNavi";
import LavellelReadLoc from "./LavellelReadLoc/LavellelReadLoc";
const LavellelLocPage = () => {
  return (
    <div className="lavellelLocPageContainer">
      <LocationNavBg />
      <LocationImg img={loc2} />
      <LocationNavi loc="Lavelle Road"/>
      <LocationArrow leftLink={"/sahakar"} rightLink={"/jakkuru"} />
      <div className="lavellelLocPageContent">
        <LocationHead
          loc="Lavelle Road"
          phone="+91-9740222700"
          address=" No. 67/2, 1st Floor, Opposite. 3rd Cross Lavelle Road, Bengaluru,
        Karnataka 560001"
        map={<LavellelLocMap/>}
        />
        <ServiceCardContain />
        <UnisexSalon />
        <Members />
        <OurSalon />
        <Partners />
        <InstaFeed />
        <TextLocReviews />
        <LocEnquire />
        <LavellelReadLoc/>
      </div>
      <LastComp />
    </div>
  );
};

export default LavellelLocPage;
