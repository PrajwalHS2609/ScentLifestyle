import React from "react";
import OlaplexLandingHead from "./OlaplexLandingHead/OlaplexLandingHead";
import BotoxLandingAbout from "../BotoxLanding/BotoxLandingAbout/BotoxLandingAbout";
import OlaplexLandingWork from "./OlaplexLandingWork/OlaplexLandingWork";
import OlaplexLandingProduct from "./OlaplexLandingProduct/OlaplexLandingProduct";
import Members from "../HomePage/Members/Members";
import OurSalon from "../HomePage/OurSalon/OurSalon";
import Partners from "../HomePage/Partners/Partners";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../Help/HelpNearYou";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";

const OlaplexLandingPage = () => {
  return (
    <div>
      <OlaplexLandingHead />
      <BotoxLandingAbout />
      <OlaplexLandingWork />
      <Members />
      <OlaplexLandingProduct />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
            
    </div>
  );
};

export default OlaplexLandingPage;
