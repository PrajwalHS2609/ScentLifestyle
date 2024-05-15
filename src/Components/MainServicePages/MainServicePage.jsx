import React from "react";
import ServicePage from "./ServicePage/ServicePage";
import Navi from "./Navi/Navi";
import ServiceCardContain from "./ServiceCards/ServiceCardContain";
import UnisexSalon from "./UnisexSalon/UnisexSalon";
import LastComp from "../LastComp/LastComp";
import ServiceWhy from "./ServiceWhy/ServiceWhy";
import ServiceRead from "./ServiceRead/ServiceRead";
import HelpNearYou from "../Help/HelpNearYou";
import Members from "./../HomePage/Members/Members";
import OurSalon from "./../HomePage/OurSalon/OurSalon";
import Partners from "./../HomePage/Partners/Partners";
import InstaFeed from "./../HomePage/InstaFeed/InstaFeed";
import { Helmet } from "react-helmet";
import NavBg from "./../NavBg/NavBg";
import TextLocReviews from "../TextLocReviews/TextLocReviews";

const MainServicePage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Scent Salon Services in Bangalore | Hair & Spa Services Near Me
        </title>
        <meta
          name="Experience SCENT's top-quality salon & spa services, from haircuts for men & women, facials, waxing, bridal makeup, to spa treatments. Book now at our Sahakar Nagar, Lavelle Road, JP Nagar, Jakkuru, and Whitefield locations.																"
          content="scent application"
        />
      </Helmet>
      <NavBg/>
      <ServicePage />
      <Navi />
      <ServiceCardContain />
      <UnisexSalon />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews/>
      <ServiceWhy />
      <ServiceRead />
      <LastComp />
    </div>
  );
};

export default MainServicePage;
