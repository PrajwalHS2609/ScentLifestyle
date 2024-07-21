import React from "react";
import "./HairTrim.css";
import NavBg from "../../../NavBg/NavBg";
import HairTrimHead from "./HairTrimHead";
import HairTrimImg from "./HairTrimImg";
import HairTrimFaq from "./HairTrimFaq";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
const HairTrim = () => {
  return (
    <div className="hairTrim">
      <NavBg />
      <div className="hairTrimContent">
        <HairTrimImg />
        <InnerNavi
        link="/blog"
        service="Blog"
        currService="Hair Trim"
      />
        <HairTrimHead />
        <HairTrimFaq/>
      </div>
    </div>
  );
};

export default HairTrim;
