import React from "react";
import NavBg from "./NavBg/NavBg.jsx";
import FacialImg from "./FacialImg/FacialImg";
import FacialServiceCardContain from "./FacialCards/FacialServiceCardContain.jsx";
import Navi3 from "./Navi3/Navi3.jsx";
import Members from "./../HomePage/Members/Members";
import OurSalon from "./../HomePage/OurSalon/OurSalon";
import HelpNearYou from "../Help/HelpNearYou.jsx";
import LastComp from "../LastComp/LastComp.jsx";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy.jsx";
import FacialRead from "./FacialRead/FacialRead.jsx";
import Partners from "../HomePage/Partners/Partners.jsx";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed.jsx";
const FacialPage = () => {
  return (
    <div>
      <NavBg />
      <FacialImg />
      <Navi3 />
      <FacialServiceCardContain />
      <Members/>
      <OurSalon/>
      <Partners/>
      <InstaFeed/>
      <HelpNearYou />
      <ServiceWhy/>
      <FacialRead/>
      <LastComp/>
    </div>
  );
};

export default FacialPage;
