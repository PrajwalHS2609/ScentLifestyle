import React from "react";
import "./BotoxLanding.css";
import BotoxLandingHead from "./BotoxLandingHead/BotoxLandingHead";
// import BotoxLandingCollection from "./BotoxLandingCollection/BotoxLandingCollection";
import BotoxLandingAbout from "./BotoxLandingAbout/BotoxLandingAbout";
import BotoxLandingWork from "./BotoxLandingWork/BotoxLandingWork";
import Members from "./../HomePage/Members/Members";
import BotoxLandingProducts from "./BotoxLandingProducts/BotoxLandingProducts";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../HomePage/WhatsApp/WhatsApp";
import LastComp from "../LastComp/LastComp";
import OurSalon from "../HomePage/OurSalon/OurSalon";
import Partners from "../HomePage/Partners/Partners";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../Help/HelpNearYou";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import OfferBenefits from "../OfferPage/OfferBenefits";

const BotoxLanding = () => {
  return (
    <div className="botoxLanding">
      <BotoxLandingHead />
      <BotoxLandingAbout />
      <BotoxLandingWork />
      <Members />
      <BotoxLandingProducts />
      <OfferBenefits/>
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default BotoxLanding;
