import React from "react";
import ServicePage from "./ServicePage/ServicePage";
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
import WhatsApp from "../HomePage/WhatsApp/WhatsApp";
import BreadCrumb from "../InnerServicePage/InnerNavi/BreadCrumb";

const MainServicePage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Salon Services in Bangalore - Hair, Nail, Spa, Facials & Beauty
          Essentials
        </title>
        <meta
          name="description"
          content="Experience top salon services in Bangalore with SCENT. Expert hair care, stunning nails, rejuvenating spa treatments, luxurious facials, and essential beauty services."
        />
        <link rel="canonical" href="https://scentlifestyle.com/service" />
      </Helmet>
      <NavBg />
      <ServicePage />
      <BreadCrumb currService="Service" />
      <ServiceCardContain />
      <UnisexSalon />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WhatsApp />
      <ServiceRead />
      <LastComp />
    </div>
  );
};

export default MainServicePage;
