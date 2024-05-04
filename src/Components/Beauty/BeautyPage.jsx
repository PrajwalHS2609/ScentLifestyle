import React from "react";
import NavBg from "./NavBg/NavBg";
import BeautyImg from "./BeautyImg/BeautyImg";
import Members from "../Members/Members";
import OurSalon from "../OurSalon/OurSalon";
import HelpNearYou from "../Help/HelpNearYou";
import HairRead from "../HairServicePage/HairRead/HairRead";
import LastComp from "../LastComp/LastComp";
import BeautyServiceCardContain from "./BeautyServiceCards/BeautyServiceCardContain";
import Navi4 from './Navi4/Navi4';

const BeautyPage = () => {
  return (
    <div>
      <NavBg />
      <BeautyImg />
      <Navi4/>
      <BeautyServiceCardContain/>
      <Members />
      <OurSalon />
      <HelpNearYou />
      <HairRead />
      <LastComp />
    </div>
  );
};

export default BeautyPage;
