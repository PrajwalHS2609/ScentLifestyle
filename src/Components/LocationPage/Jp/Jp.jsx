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
import GoogleReviews from "../GoogleReviews/GoogleReviews";
import LocEnquire from "../LocEnquire/LocEnquire";
import LastComp from "../../LastComp/LastComp";
import JpLocMap from "./JpLocMap/JpLocMap";
import "./Jp.css";
import loc6 from "./../../../Images/JP Nagar.jpg";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
const Jp = () => {
  return (
    <div className="jpLocPageContainer">
      <LocationNavBg />
      <LocationImg img={loc6} />
      <LocationArrow leftLink={"/meadows"} rightLink={"/sahakar"} />
      <div className="jpLocPageContent">
        <LocationHead
          loc="J P nagar"
          phone="+91-8861222700"
          address="20th Main Road, Jp Nagar 2nd Phase, Bangalore - 560078, Opp Nexa Showroom "
        />
        <ServiceCardContain />
        <UnisexSalon />
        <Members />
        <OurSalon />
        <Partners />
        <InstaFeed />
        <JpLocMap />
        <TextLocReviews />
        <LocEnquire />
      </div>
      <LastComp />
    </div>
  );
};

export default Jp;