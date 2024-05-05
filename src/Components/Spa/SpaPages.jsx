import React from "react";
import NavBg from "./NavBg/NavBg";
import SpaImg from "./SpaImg/SpaImg";
import Members from "./../HomePage/Members/Members";
import OurSalon from "./../HomePage/OurSalon/OurSalon";
import HelpNearYou from "./../Help/HelpNearYou";
import LastComp from "./../LastComp/LastComp";
import Navi5 from "./Navi5/Navi5";
import SpaServiceCardContain from "./SpaServiceCard/SpaServiceCardContain";
import SpaRead from "./SpaRead/SpaRead";

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
      <SpaRead/>
      <LastComp />
    </div>
  );
};

export default SpaPages;
