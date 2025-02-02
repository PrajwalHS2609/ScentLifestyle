import React from "react";
import AromaSpaHead from "./AromaSpaHead";
import AromaSpaBenefits from "./AromaSpaBenefits";
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
import NavBg from "../../../NavBg/NavBg";
import AromaSpaXp from "./AromaSpaXp";
import AromaSpaOffering from "./AromaSpaOffering";
import AromaSpaWellness from "./AromaSpaWellness";
import AromaSpaCustomer from "./AromaSpaCustomer";
import AromaSpaBook from "./AromaSpaBook";
import AromaSpaImg from "./AromaSpaImg";

const AromaSpa = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Aroma Massage in Bangalore | Aromatherapy Massage Salon Near Me
        </title>
        <meta
          name="description"
          content="Aroma Massage in Bangalore. One of the most luxurious and therapeutic ways to unwind is through an aroma massage. Book Now!"
        />
        <link rel="canonical" href=" https://scentlifestyle.com/aroma-massage-in-bangalore" />
      </Helmet>
      <NavBg />
      <AromaSpaImg />
      <InnerNavi link="/spa" service="Spa" currService="Aroma Massage" />
      <AromaSpaHead />
      <AromaSpaXp />
      <AromaSpaBenefits />
      <AromaSpaOffering />
      <AromaSpaWellness />
      <AromaSpaCustomer />
      <AromaSpaBook />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BeautyRead />
            
    </div>
  );
};

export default AromaSpa;
