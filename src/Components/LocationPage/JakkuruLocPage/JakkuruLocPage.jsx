import React from "react";
import "./JakkuruLocPage.css";
import LocationNavBg from "../LocationNavBg/LocationNavBg";
import LocationArrow from "../LocationArrow/LocationArrow";
import LocEnquire from "../LocEnquire/LocEnquire";
import LastComp from "../../LastComp/LastComp";
import JakkuruLocMap from "./JakkuruLocMap/JakkuruLocMap";
import GoogleReviews from "../GoogleReviews/GoogleReviews";
import LocationHead from "../LocationHead/LocationHead";
import LocationImg from "../LocationImg/LocationImg";
import loc3 from "./../../../Images/jakkur.jpg";
import Members from "../../HomePage/Members/Members";
import UnisexSalon from "../../MainServicePages/UnisexSalon/UnisexSalon";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import ServiceCardContain from "../../MainServicePages/ServiceCards/ServiceCardContain";
import LocationNavi from './../LocationNavi/LocationNavi';
import TextLocReviews from "../TextLocReviews/TextLocReviews";
const JakkuruLocPage = () => {
  return (
    <div className="jakkuruLocPageContainer">
      <LocationNavBg />
      <LocationImg img={loc3} />
      <LocationNavi
      loc="Jakkur"
      />
      <LocationArrow leftLink={"/lavellel"} rightLink={"/uptown"} />
      <div className="jakkuruLocPageContent">
        <LocationHead
          loc="Jakkur"
          phone="+91-9742212700"
          address="Dr.Shivaram Karanth Nagar, Jakkuru, Bengaluru, Karnataka 560077"
        />
          <ServiceCardContain />
        <UnisexSalon />
        <Members />
        <OurSalon />
        <Partners />
        <InstaFeed />
        {/* <JakkuruLocService /> */}
        <JakkuruLocMap />
        <TextLocReviews />
        <LocEnquire />
      </div>
      <LastComp />
    </div>
  );
};

export default JakkuruLocPage;