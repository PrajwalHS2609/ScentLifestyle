import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../../NavBg/NavBg";
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../../LastComp/LastComp";
import BouncyHairImg from "./BouncyHairImg";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import BouncyHairHead from "./BouncyHairHead";

const BouncyHair = () => {
  return (
    <div className="hairTrim">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Tips for Maintaining Hair Bouncy and Beautiful Curls During Monsoon
        </title>
        <meta
          name="description"
          content="Tips for Maintaining Hair Bouncy and Beautiful Curls During Monsoon. Learn how to combat frizz and keep your curls hydrated with the right products and techniques."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/tips-for-maintaining-hair-bouncy-and-beautiful-curls-during-monsoon"
        />
      </Helmet>
      <NavBg />
      <div className="hairTrimContent">
        <BouncyHairImg />
        <InnerNavi link="/blog" service="Blog" currService="Hair Blog" />
        <BouncyHairHead />
      </div>
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default BouncyHair;
