import React from "react";
import LocationNavBg from "../LocationNavBg/LocationNavBg";
import LocationImg from "../LocationImg/LocationImg";
import LocationArrow from "../LocationArrow/LocationArrow";
import LocationHead from "../LocationHead/LocationHead";
import ServiceCardContain from "../../MainServicePages/ServiceCards/ServiceCardContain";
import UnisexSalon from "../../MainServicePages/UnisexSalon/UnisexSalon";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import LocEnquire from "../LocEnquire/LocEnquire";
import LastComp from "../../LastComp/LastComp";
import JpLocMap from "./JpLocMap/JpLocMap";
import "./Jp.css";
import loc6 from "./../../../Images/JP Nagar.jpg";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import JpLocRead from "./JpLocRead/JpLocRead";
import LocationNavi from "./../LocationNavi/LocationNavi";
const Jp = () => {
  return (
    <div className="jpLocPageContainer">
      <LocationNavBg />
      <LocationImg img={loc6} />
      <LocationNavi loc="J P Nagar" />
      <LocationArrow leftLink={"/meadows"} rightLink={"/sahakar"} />
      <div className="jpLocPageContent">
        <LocationHead
          loc="J P Nagar"
          phone="+91-8861222700"
          address="20th Main Road, Jp Nagar 2nd Phase, Bangalore - 560078, Opp Nexa Showroom "
          map={<JpLocMap />}
        />
        <ServiceCardContain />
        <UnisexSalon />
        <Members />
        <OurSalon />
        <Partners />
        <InstaFeed />
        <TextLocReviews />
        <LocEnquire />
        <JpLocRead />
      </div>
      <LastComp />
    </div>
  );
};

export default Jp;
