import React from "react";
import NavBg from "../../NavBg/NavBg";
import InnerCard from "../../InnerServicePage/InnerCard/InnerCard";
import InnerServiceTxt from "../../InnerServicePage/InnerServiceTxt/InnerServiceTxt";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import "./NailExtension.css"
const NailExtension = () => {
  return (
    <div className="haircutContainer">
      <NavBg />
      <div className="haircutContent">
        <InnerServiceTxt />
        <InnerNavi />
        <div className="haircutCardContainer">
            <InnerCard/>
        </div>
        <InnerServiceTxt/>
        
      </div>
    </div>
  );
};

export default NailExtension;
