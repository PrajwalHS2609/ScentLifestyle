import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../../NavBg/NavBg";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import HairSpaHead from "./HairSpaHead";
import HairSpaBenefits from "./HairSpaBenefits";
import HairSpaWhy from "./HairSpaWhy";
import HairSpaBook from "./HairSpaBook";
import HairSpaImg from "./HairSpaImg";

const HairSpa = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hair Spa in Bangalore | Hair Spa Services Near Me</title>
        <meta
          name="description"
          content="Hair Spa in Bangalore. Our talented team of stylists is dedicated to providing personalized hair care that caters to your unique style and needs."
        />
        <link rel="canonical" href="https://scentlifestyle.com/hair-spa" />
      </Helmet>
      <NavBg />
      <HairSpaImg />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair Spa"
      />
      <HairSpaHead />
      <HairSpaBenefits />
      <HairSpaWhy />
      <HairSpaBook />
            
    </div>
  );
};

export default HairSpa;
