import React from "react";
import LocationNavBg from "../LocationNavBg/LocationNavBg";
import LocationArrow from "../LocationArrow/LocationArrow";
import LastComp from "../../LastComp/LastComp";
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
import LocationNavi from "../LocationNavi/LocationNavi";
import MeadowsLocRead from "./MeadowsLocRead/MeadowsLocRead";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
const MeadowsLocPage = () => {
  return (
    <div className="meadowsLocPageContainer">
      <LocationNavBg />
      <LocationImg img={loc5} />
      <LocationNavi loc="Palm Meadows" />

      <LocationArrow leftLink={"/uptown"} rightLink={"/jp"} />
      <div className="meadowsLocPageContent">
        <LocationHead
          loc="Palm Meadows"
          phone="+91-9686221700"
          address=" Palm Meadows, No. 3/3, Ramaiah building, Palm Meadows, Boulevard
Varthur Main Road Ramagondanahalli, Whitefield Bengaluru Karnataka
560066"
          map={<MeadowsLocMap />}
        />
        <ServiceCardContain />
        <UnisexSalon />
        <Members />
        <OurSalon />
        <Partners />
        <InstaFeed />
        <TextLocReviews />
        <MeadowsLocRead />
      </div>
      <LastComp />
    </div>
  );
};

export default MeadowsLocPage;
