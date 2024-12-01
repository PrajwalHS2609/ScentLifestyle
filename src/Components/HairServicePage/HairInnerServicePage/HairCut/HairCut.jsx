import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import HairCutHead from "./HairCutHead/HairCutHead";
import HairCutWhy from "./HairCutWhy/HairCutWhy";
import HairCutXp from "./HairCutXp";
import HairCutBook from "./HairCutBook";
import NavBg from "../../../NavBg/NavBg";
import HairCutImg from "./HairCutImg/HairCutImg";

const HairCut = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Head Massage in Bangalore | Best Head Massage Spa Near Me</title>
        <meta
          name="description"
          content="Head Massage in Bangalore. Whether you're a resident or a visitor, discovering the perfect head massage can be a transformative experience."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/head-massage-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <HairCutImg />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="HairCut and Style"
      />
      <HairCutHead />
      <HairCutWhy />
      <HairCutXp />
      <HairCutBook />
            
    </div>
  );
};

export default HairCut;
