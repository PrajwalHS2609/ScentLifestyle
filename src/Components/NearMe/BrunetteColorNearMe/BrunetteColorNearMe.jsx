import React from "react";
import { Helmet } from "react-helmet";
import HairColorImg from "../../HairServicePage/HairColorPage/HairColorImg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import BrunetteColorNearMeHead from "./BrunetteColorNearMeHead";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import BrunetteColorNearMeRead from "./BrunetteColorNearMeRead";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";

const BrunetteColorNearMe = () => {
  return (
    <div className="hairColorContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Brunette Hair Color & Highlights Near Me | Brunette Hair Color in
          Bangalore
        </title>
        <meta
          name="description"
          content="Brunette Hair Color & Highlights Near Me – Our team of professional stylists is here to offer you the ideal blend of rich, dimensional hair color and expertly placed highlights."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/brunette-hair-color-and-highlights-near-me"
        />
      </Helmet>
      <HairColorImg />
      <InnerNavi
        link={"/hair-salon"}
        service="Hair Service"
        currService="Highlights & Streaks"
      />
      <BrunetteColorNearMeHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />    
      <BrunetteColorNearMeRead />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default BrunetteColorNearMe;
