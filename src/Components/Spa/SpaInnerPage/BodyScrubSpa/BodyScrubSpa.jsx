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
import BodyScrubSpaWhy from "./BodyScrubSpaWhy";
import BodyScrubSpaBenefits from "./BodyScrubSpaBenefits";
import BodyScrubSpaCustomer from "./BodyScrubSpaCustomer";
import BodyScrubSpaBook from "./BodyScrubSpaBook";
import BodyScrubSpaXp from "./BodyScrubSpaXp";
import NavBg from "./../../../NavBg/NavBg";
import BodyScrubSpaHead from "./BodyScrubSpaHead";
import BodyScrubSpaImg from './BodyScrubSpaImg';

const BodyScrubSpa = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Body Scrub in Bangalore | Full Body Scrub Salon Near Me</title>
        <meta
          name="description"
          content="Body Scrub in Bangalore. Not only exfoliates and revitalizes your skin but also offers a deeply relaxing escape from the hustle and bustle of city life. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/body-scrub-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <BodyScrubSpaImg />
      <InnerNavi link="/spa" service="Spa" currService="Body Scrub" />
      <BodyScrubSpaHead />
      <BodyScrubSpaXp />
      <BodyScrubSpaWhy />
      <BodyScrubSpaBenefits />
      <BodyScrubSpaCustomer />
      <BodyScrubSpaBook />
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

export default BodyScrubSpa;
