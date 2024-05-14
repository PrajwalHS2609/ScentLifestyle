import React from "react";
import StyleCrewHead from "./StyleCrewHead";
import StyleCrewPara from "./StyleCrewPara";
import StyleCrewImg from "./StyleCrewImg";
import "./StyleCrewPage.css";
import LastComp from "../LastComp/LastComp";
import NavBg from "../NavBg/NavBg";

const StyleCrewPage = () => {
  return (
    <div className="styleCrewPageContainer">
      <NavBg />
      <StyleCrewHead />
      <StyleCrewPara />
      <StyleCrewImg />
      <LastComp />
    </div>
  );
};

export default StyleCrewPage;
