import React from "react";
import StyleCrewHead from "./StyleCrewHead";
import StyleCrewPara from "./StyleCrewPara";
import StyleCrewImg from "./StyleCrewImg";
import "./StyleCrewPage.css";
import LastComp from "../LastComp/LastComp";
import NavBg from "../NavBg/NavBg";
import OurSalon from "../HomePage/OurSalon/OurSalon";
import Members from "../HomePage/Members/Members";
import Partners from "../HomePage/Partners/Partners";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../Help/HelpNearYou";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";

const StyleCrewPage = () => {
  return (
    <div className="styleCrewPageContainer">
      <NavBg />
      <StyleCrewHead />
      <StyleCrewPara />
      <StyleCrewImg />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <LastComp />
    </div>
  );
};

export default StyleCrewPage;
