import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import SchwarzkopfColorNearMeHead from "./SchwarzkopfColorNearMeHead";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import SchwarzkopfColorNearMeRead from "./SchwarzkopfColorNearMeRead";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import HairColorImg from "../../HairServicePage/HairColorPage/HairColorImg";

const SchwarzkopfColorNearMe = () => {
  return (
    <div className="hairColorContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Schwarzkopf Hair Color Near Me | Schwarzkopf Hair Color in Bangalore
        </title>
        <meta
          name="description"
          content="Schwarzkopf Hair Color Near Me. SCENT is the top salon to visit, ensures that every client leaves with beautiful, healthy hair. Call Now!"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/schwarzkopf-hair-color-near-me"
        />
      </Helmet>
      <HairColorImg />
      <InnerNavi
        link={"/hair-salon"}
        service="Hair Service"
        currService="Highlights & Streaks"
      />
      <SchwarzkopfColorNearMeHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <SchwarzkopfColorNearMeRead />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default SchwarzkopfColorNearMe;
