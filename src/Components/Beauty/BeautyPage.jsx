import React from "react";
import BeautyImg from "./BeautyImg/BeautyImg";
import Members from "./../HomePage/Members/Members";
import OurSalon from "./../HomePage/OurSalon/OurSalon";
import HelpNearYou from "../Help/HelpNearYou";
import LastComp from "../LastComp/LastComp";
import BeautyServiceCardContain from "./BeautyServiceCards/BeautyServiceCardContain";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";
import BeautyRead from "./BeautyRead/BeautyRead";
import Partners from "../HomePage/Partners/Partners";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import { Helmet } from "react-helmet";
import NavBg from "../NavBg/NavBg";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import WhatsApp from "../HomePage/WhatsApp/WhatsApp";
import ServBreadCrumb from "../InnerServicePage/InnerNavi/ServBreadCrumb";

const BeautyPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Waxing & Threading in Bangalore | Body D-Tan Service Near Me
        </title>
        <meta
          name="description"
          content="Discover SCENT’s exclusive Bikini & Brazilian waxing, luxurious detanning treatments, and anti-aging regimens. Book today for ultimate pampering and radiant skin."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/beauty-essentials"
        />
      </Helmet>
      <NavBg />
      <BeautyImg />
      <ServBreadCrumb currService="Beauty Essentials" />
      <BeautyServiceCardContain />
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

export default BeautyPage;
