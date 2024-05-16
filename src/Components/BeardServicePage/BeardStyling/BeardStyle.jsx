import React from "react";
import "./BeardStyle.css";
import BeardStyleHead from "./BeardStyleHead";
import BeardStylePara from "./BeardStylePara";
import BeardStyleCard from "./BeardStyleCardContain";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
const BeardStyle = () => {
  return (
    <div className="beardStyleContainer">
      <BeardStyleHead />
      <BeardStylePara />
      <InnerNavi
        service="Hair "
        currService="Beard Styling"
        link={"/hair-salon"}
      />

      <BeardStyleCard />
    </div>
  );
};

export default BeardStyle;
