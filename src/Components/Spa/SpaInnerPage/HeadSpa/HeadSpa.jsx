import React from "react";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import { Helmet } from "react-helmet";
import NavBg from "../../../NavBg/NavBg";
import HeadSpaHead from "./HeadSpaHead/HeadSpaHead";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import BeautyRead from "../../../Beauty/BeautyRead/BeautyRead";
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../../LastComp/LastComp";
import HeadSpaProcess from "./HeadSpaProcess";
import HeadSpaBenefits from "./HeadSpaBenefits/HeadSpaBenefits";
import HeadSpaImg from "./HeadSpaImg/HeadSpaImg";

const HeadSpa = () => {
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
      <HeadSpaImg />
      <InnerNavi link="/spa" service="Spa" currService="Head Massage" />
      <HeadSpaHead />
      <HeadSpaBenefits />
      <HeadSpaProcess />
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

export default HeadSpa;
