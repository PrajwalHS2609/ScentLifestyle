import React from "react";
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
import { Helmet } from "react-helmet";
import NavBg from "../../../NavBg/NavBg";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import HairSpaHead from "./HairSpaHead";
import HairSpaBenefits from "./HairSpaBenefits";
import HairSpaService from "./HairSpaService";
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
      <HairSpaService />
      <HairSpaWhy />
      <HairSpaBook />
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

export default HairSpa;
