import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../../NavBg/NavBg";
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
import HairTreatmentBook from "./HairTreatmentBook";
import HairTreatmentWhy from "./HairTreatmentWhy";
import HairTreatmentXp from "./HairTreatmentXp";
import HairTreatmentDiscover from "./HairTreatmentDiscover";
import HairTreatmentHead from "./HairTreatmentHead";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import HairTreatmentImg from "./HairTreatmentImg";

const HairTreatment = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Hair Treatments in Bangalore | Hair Treatment Services Near Me
        </title>
        <meta
          name="description"
          content="Hair Treatments in Bangalore. Our talented team of stylists is dedicated to providing personalized hair care that caters to your unique style and needs."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-treatments"
        />
      </Helmet>
      <NavBg />
      <HairTreatmentImg />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair Treatment"
      />
      <HairTreatmentHead />
      <HairTreatmentDiscover />
      <HairTreatmentXp />
      <HairTreatmentWhy />
      <HairTreatmentBook />
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

export default HairTreatment;