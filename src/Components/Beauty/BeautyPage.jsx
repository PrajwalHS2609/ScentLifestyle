import React from "react";
import BeautyImg from "./BeautyImg/BeautyImg";
import Members from "./../HomePage/Members/Members";
import OurSalon from "./../HomePage/OurSalon/OurSalon";
import HelpNearYou from "../Help/HelpNearYou";
import LastComp from "../LastComp/LastComp";
import BeautyServiceCardContain from "./BeautyServiceCards/BeautyServiceCardContain";
import Navi4 from "./Navi4/Navi4";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";
import BeautyRead from "./BeautyRead/BeautyRead";
import Partners from "../HomePage/Partners/Partners";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import { Helmet } from "react-helmet";
import NavBg from "../NavBg/NavBg";
import TextLocReviews from "../TextLocReviews/TextLocReviews";

const BeautyPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          SCENT Waxing & Threading in Bangalore | Detan Service Near Me
        </title>
        <meta
          name="Experience effortless beauty with our waxing, threading, and detanning services at SCENT Salon. Our skilled professionals will pamper you with flawless results, leaving you feeling refreshed and beautiful."
          content="Scent application"
        />
      </Helmet>
      <NavBg />
      <BeautyImg />
      <Navi4 />
      <BeautyServiceCardContain />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BeautyRead />
      <LastComp />
    </div>
  );
};

export default BeautyPage;
