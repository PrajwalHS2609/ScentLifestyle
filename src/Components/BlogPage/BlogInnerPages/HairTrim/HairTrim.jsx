import React from "react";
import "./HairTrim.css";
import NavBg from "../../../NavBg/NavBg";
import HairTrimHead from "./HairTrimHead";
import HairTrimImg from "./HairTrimImg";
import HairTrimFaq from "./HairTrimFaq";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import LastComp from "../../../LastComp/LastComp";
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import { Helmet } from "react-helmet";
const HairTrim = () => {
  return (
    <div className="hairTrim">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Does Trimming Hair Make It Grow Faster?</title>
        <meta
          name="description"
          content="Does Trimming Hair Make It Grow Faster? Trimming your hair regularly is key to maintaining long, healthy locks. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair/does-trimming-hair-make-it-grow-faster"
        />
      </Helmet>
      <NavBg />
      <div className="hairTrimContent">
        <HairTrimImg />
        <InnerNavi link="/blog" service="Blog" currService="Hair" />
        <HairTrimHead />
        <HairTrimFaq />
      </div>
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default HairTrim;
