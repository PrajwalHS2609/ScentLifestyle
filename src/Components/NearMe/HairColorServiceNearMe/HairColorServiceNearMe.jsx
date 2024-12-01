import React from "react";
import { Helmet } from "react-helmet";
import HairColorImg from "../../HairServicePage/HairColorPage/HairColorImg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import HairColorServiceNearMeHead from "./HairColorServiceNearMeHead";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import HairColorServiceNearMeRead from "./HairColorServiceNearMeRead";

const HairColorServiceNearMe = () => {
  return (
    <div className="hairColorContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Hair Color Services near Me | Best Hair Color & Highlights in
          Bangalore
        </title>
        <meta
          name="description"
          content="Hair Color Services near Me. With SCENT’s expert stylists and top-tier products, you can trust that your hair color will be flawless, vibrant, and long-lasting."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-color-services-near-me"
        />
      </Helmet>
      <HairColorImg />
      <InnerNavi
        link={"/hair-salon"}
        service="Hair Service"
        currService="Highlights & Streaks"
      />
      <HairColorServiceNearMeHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairColorServiceNearMeRead />
            
    </div>
  );
};

export default HairColorServiceNearMe;
