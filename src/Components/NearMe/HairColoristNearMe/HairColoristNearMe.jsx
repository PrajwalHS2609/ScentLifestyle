import React from "react";
import { Helmet } from "react-helmet";
import HairColorImg from "../../HairServicePage/HairColorPage/HairColorImg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import HairColoristNearMeHead from "./HairColoristNearMeHead";
import HairColoristNearMeRead from "./HairColoristNearMeRead";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";

const HairColoristNearMe = () => {
  return (
    <div className="hairColorContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Hair Colorist Salon Near Me | Salon Hair Color & Highlights in
          Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Hair Colorist Salon near Me – Whether you’re looking for a subtle change, bold transformation, or a customized color that complements your personality. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-colorist-salon-near-me"
        />
      </Helmet>
      <HairColorImg />
      <InnerNavi
        link={"/hair-salon"}
        service="Hair Service"
        currService="Highlights & Streaks"
      />
      <HairColoristNearMeHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairColoristNearMeRead />
            
    </div>
  );
};

export default HairColoristNearMe;
