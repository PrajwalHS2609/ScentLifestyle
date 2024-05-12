import React from "react";
import NavBg from "./NavBg/NavBg";
import BeautyImg from "./BeautyImg/BeautyImg";
import Members from "./../HomePage/Members/Members";
import OurSalon from "./../HomePage/OurSalon/OurSalon";
import HelpNearYou from "../Help/HelpNearYou";
import LastComp from "../LastComp/LastComp";
import BeautyServiceCardContain from "./BeautyServiceCards/BeautyServiceCardContain";
import Navi4 from './Navi4/Navi4';
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";
import BeautyRead from "./BeautyRead/BeautyRead";
import Partners from "../HomePage/Partners/Partners";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";

const BeautyPage = () => {
  return (
    <div>
      <NavBg />
      <BeautyImg />
      <Navi4/>
      <BeautyServiceCardContain/>
      <Members/>
      <OurSalon/>
      <Partners/>
      <InstaFeed/>
      <HelpNearYou />
      <ServiceWhy/>
      <BeautyRead/>
      <LastComp />
    </div>
  );
};

export default BeautyPage;
