import React from "react";
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
import SportsSpaHead from "./SportsSpaHead";
import SportsSpaBenefits from "./SportsSpaBenefits";
import SportsSpaWhy from "./SportsSpaWhy";
import NavBg from "../../../NavBg/NavBg";
import SportsSpaXp from "./SportsSpaXp";
import SportsSpaCustomer from "./SportsSpaCustomer";
import SportsSpaBook from "./SportsSpaBook";
import SportsSpaImg from './SportsSpaImg';
const SportsSpa = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {" "}
          Sportz Massage in Bangalore | Best Sportz Massage Salon Near Me
        </title>
        <meta
          name="description"
          content="Sportz Massage in Bangalore. Stands out for its ability to relieve chronic pain, muscle tension, and stress. Book Now!"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/sportz-massage-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <SportsSpaImg />
      <InnerNavi link="/spa" service="Spa" currService="Sportz Massage" />
      <SportsSpaHead />
      <SportsSpaXp />
      <SportsSpaBenefits />
      <SportsSpaWhy />
      <SportsSpaCustomer />
      <SportsSpaBook />
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

export default SportsSpa;
