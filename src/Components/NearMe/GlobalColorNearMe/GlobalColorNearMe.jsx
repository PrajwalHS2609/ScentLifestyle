import React from "react";
import { Helmet } from "react-helmet";
import HairColorImg from "../../HairServicePage/HairColorPage/HairColorImg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import GlobalColorNearMeHead from "./GlobalColorNearMeHead";
import Members from "../../HomePage/Members/Members";
import Partners from "../../HomePage/Partners/Partners";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import GlobalColorNearMeRead from "./GlobalColorNearMeRead";

const GlobalColorNearMe = () => {
  return (
    <div className="hairColorContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Global Hair Color Salon near Me | Hair Color & Highlights in Bangalore
        </title>
        <meta
          name="description"
          content="Global Hair Color Salon near Me – Whether you’re looking for a subtle change or a bold transformation, a professional colorist can help you achieve the look you desire."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/global-hair-color-salon-near-me"
        />
      </Helmet>
      <HairColorImg />
      <InnerNavi
        link={"/hair-salon"}
        service="Hair Service"
        currService="Highlights & Streaks"
      />
      <GlobalColorNearMeHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <GlobalColorNearMeRead />
            
    </div>
  );
};

export default GlobalColorNearMe;
