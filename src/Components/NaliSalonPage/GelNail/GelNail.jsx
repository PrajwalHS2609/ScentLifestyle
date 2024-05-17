import React from "react";
import "./GelNail.css";
import NavBg from "../../NavBg/NavBg";
import InnerServiceTxt from "../../InnerServicePage/InnerServiceTxt/InnerServiceTxt";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import InnerCard from "../../InnerServicePage/InnerCard/InnerCard";
const GelNail = () => {
  return (
    <div className="gelNailContainer">
      <NavBg />
      <div className="gelNailContent">
        <InnerServiceTxt />
        <InnerNavi />
        <div className="gelNailCardContainer">
          <InnerCard />
        </div>
        <InnerServiceTxt />
      </div>
    </div>
  );
};

export default GelNail;
