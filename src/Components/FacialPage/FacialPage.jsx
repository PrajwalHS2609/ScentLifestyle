import React from "react";
import NavBg from "./NavBg/NavBg.jsx";
import FacialImg from "./FacialImg/FacialImg";
import FacialServiceCardContain from "./FacialCards/FacialServiceCardContain.jsx";
import Navi3 from "./Navi3/Navi3.jsx";
import Members from "../Members/Members.jsx";
import OurSalon from "../OurSalon/OurSalon.jsx";
import HelpNearYou from "../Help/HelpNearYou.jsx";
import HairRead from "../HairServicePage/HairRead/HairRead.jsx";
import LastComp from "../LastComp/LastComp.jsx";
const FacialPage = () => {
  return (
    <div>
      <NavBg />
      <FacialImg />
      <Navi3 />
      <FacialServiceCardContain />
      <Members />
      <OurSalon />
      <HelpNearYou />
      <HairRead />
      <LastComp/>
    </div>
  );
};

export default FacialPage;
