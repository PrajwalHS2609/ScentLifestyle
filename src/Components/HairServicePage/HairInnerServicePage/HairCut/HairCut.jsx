import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import HairCutHead from "./HairCutHead/HairCutHead";
import HairCutWhy from "./HairCutWhy/HairCutWhy";
import HairCutXp from "./HairCutXp";
import HairCutBook from "./HairCutBook";
import LastComp from "../../../LastComp/LastComp";
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import BeautyRead from "../../../Beauty/BeautyRead/BeautyRead";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import HelpNearYou from "../../../Help/HelpNearYou";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import Partners from "../../../HomePage/Partners/Partners";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Members from "../../../HomePage/Members/Members";
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
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BeautyRead />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default HairCut;
