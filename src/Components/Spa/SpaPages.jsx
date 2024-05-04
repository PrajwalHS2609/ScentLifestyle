import React from "react";
import NavBg from "./NavBg/NavBg";
import SpaImg from "./SpaImg/SpaImg";
import Members from "./../Members/Members";
import OurSalon from "./../OurSalon/OurSalon";
import HelpNearYou from "./../Help/HelpNearYou";
import HairRead from "./../HairServicePage/HairRead/HairRead";
import LastComp from "./../LastComp/LastComp";
import Navi5 from "./Navi5/Navi5";
import SpaServiceCardContain from "./SpaServiceCard/SpaServiceCardContain";

const SpaPages = () => {
  return (
    <div>
      <NavBg />
      <SpaImg />
      <Navi5/>
      <SpaServiceCardContain/>
      <Members />
      <OurSalon />
      <HelpNearYou />
      <HairRead />
      <LastComp />
    </div>
  );
};

export default SpaPages;
