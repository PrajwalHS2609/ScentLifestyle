import React from "react";
import NavBg from "../FacialPage/NavBg/NavBg";
import Why from "./Why/Why";
import BeardNear from "./BeardServiceNear/BeardNear";
import LastComp from "../LastComp/LastComp";
import Navi from "./Navi/Navi";
import BeardStyle from "./BeardStyling/BeardStyle";
import BeardImgPara from "./BeardImg/BeardImg";

const BeardStylingPage = () => {
  return (
    <div>
      <NavBg />
      <BeardImgPara />
      <Navi />
      <BeardStyle />
      <BeardNear />
      <Why />
      <LastComp />
    </div>
  );
};

export default BeardStylingPage;
