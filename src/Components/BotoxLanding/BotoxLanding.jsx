import React, { Suspense } from "react";
import "./BotoxLanding.css";
// import BotoxLandingHead from "./BotoxLandingHead/BotoxLandingHead";
// import BotoxLandingCollection from "./BotoxLandingCollection/BotoxLandingCollection";
import BotoxLandingAbout from "./BotoxLandingAbout/BotoxLandingAbout";
// import BotoxLandingWork from "./BotoxLandingWork/BotoxLandingWork";
import Members from "./../HomePage/Members/Members";
import BotoxLandingProducts from "./BotoxLandingProducts/BotoxLandingProducts";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";
import OurSalon from "../HomePage/OurSalon/OurSalon";
import Partners from "../HomePage/Partners/Partners";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../Help/HelpNearYou";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import OfferBenefits from "../OfferPage/OfferBenefits";
import { Helmet } from "react-helmet";
const BotoxLandingHead = React.lazy(() =>
  import("./BotoxLandingHead/BotoxLandingHead")
);
const BotoxLandingWork = React.lazy(() =>
  import("./BotoxLandingWork/BotoxLandingWork")
);

const BotoxLanding = () => {
  return (
    <div className="botoxLanding">
      <Helmet>
        <title>Scent Promotion</title>
        <link
          rel="canonical"
          href="https://scentlifestyle.com/lp-hair-botoxx"
        />
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        <BotoxLandingHead />
      </Suspense>

      <BotoxLandingAbout />
      <Suspense fallback={<div>Loading...</div>}>
        <BotoxLandingWork />
      </Suspense>

      <Members />
      <BotoxLandingProducts />
      <OfferBenefits />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
            
    </div>
  );
};

export default BotoxLanding;
