import React from "react";
import StyleCrewHead from "./StyleCrewHead";
import StyleCrewPara from "./StyleCrewPara";
import StyleCrewImg from "./StyleCrewImg";
import StyleCrewNavBg from "./StyleCrewNavBg";
import "./StyleCrewPage.css";
import LastComp from "../LastComp/LastComp";

const StyleCrewPage = () => {
  return (
    <div className="styleCrewPageContainer">
      <StyleCrewNavBg />
      <StyleCrewHead />
      <StyleCrewPara />
      <StyleCrewImg />
      <LastComp />
    </div>
  );
};

export default StyleCrewPage;
