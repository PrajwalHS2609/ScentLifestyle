import React from "react";
import ThaiMassageSpaHead from "./ThaiMassageSpaHead";
import ThaiReflexoSpaBenefits from "../ThaiReflexoSpa/ThaiReflexoSpaBenefits";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import { Helmet } from "react-helmet";
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
import NavBg from "../../../NavBg/NavBg";
import ThaiMassageSpaXp from "./ThaiMassageSpaXp";
import ThaiMassageSpaOffering from "./ThaiMassageSpaOffering";
import ThaiMassageSpaWellness from "./ThaiMassageSpaWellness";
import ThaiMassageSpaCustomer from "./ThaiMassageSpaCustomer";
import ThaiMassageSpaBook from "./ThaiMassageSpaBook";
import ThaiMassageSpaImgs from "./ThaiMassageSpaImgs";

const ThaiMassageSpa = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Thai Massage in Bangalore | Best Thai Massage Salon Near Me
        </title>
        <meta
          name="description"
          content="Thai Massage in Bangalore. One of the most luxurious and therapeutic ways to unwind is through an aroma massage. Book Now!"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/thai-massage-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <ThaiMassageSpaImgs />
      <InnerNavi link="/spa" service="Spa" currService="Thai Massage" />
      <ThaiMassageSpaHead />
      <ThaiMassageSpaXp />
      <ThaiReflexoSpaBenefits />
      <ThaiMassageSpaOffering />
      <ThaiMassageSpaWellness />
      <ThaiMassageSpaCustomer />
      <ThaiMassageSpaBook />
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

export default ThaiMassageSpa;
