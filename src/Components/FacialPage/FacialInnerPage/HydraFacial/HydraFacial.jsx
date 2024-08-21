import React from "react";
import NavBg from "../../../NavBg/NavBg";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../../LastComp/LastComp";
import HydraFacialHead from "./HydraFacialHead";
import HydraFacialBenefits from "./HydraFacialBenefits";
import HydraFacialBook from "./HydraFacialBook";
import HydraFacialWhat from "./HydraFacialWhat";
import HydraFacialWhy from "./HydraFacialWhy";
import HydraFacialCustomer from "./HydraFacialCustomer";
import { Helmet } from "react-helmet";
import HydraFacialImg from "./HybridFacialImg";

const HydraFacial = () => {
  return (
    <div className="organicFacial">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hydra Lifting Ocean Miracle Facial Services in Bangalore </title>
        <meta
          name="description"
          content="Hydra Lifting Ocean Miracle Facial Services in Bangalore. A cutting-edge facial treatment designed to revitalize, lift, and hydrate the skin using the power of marine ingredients and innovative technology."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hydra-lifting-ocean-miracle-facial-services"
        />
      </Helmet>
      <NavBg />
      <HydraFacialImg/>
      <HydraFacialHead />
      <HydraFacialBenefits />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HydraFacialWhat />
      <HydraFacialWhy />
      <HydraFacialCustomer />
      <HydraFacialBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default HydraFacial;
