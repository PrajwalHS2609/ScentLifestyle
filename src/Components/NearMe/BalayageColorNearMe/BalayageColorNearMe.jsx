import React from "react";
import { Helmet } from "react-helmet";
import HairColorImg from "../../HairServicePage/HairColorPage/HairColorImg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import BalayageColorNearMeHead from "./BalayageColorNearMeHead";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import BalayageColorNearMeRead from "./BalayageColorNearMeRead";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";

const BalayageColorNearMe = () => {
  return (
    <div className="hairColorContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Balayage Hair Color Salon near Me | Balayage Hair Color & Highlights
          in Bangalore
        </title>
        <meta
          name="description"
          content="Balayage Hair Color Salon near Me – SCENT is the ultimate spot to achieve a chic, natural, and stylish transformation. Call Now!"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/balayage-hair-color-salon-near-me"
        />
      </Helmet>
      <HairColorImg />
      <InnerNavi
        link={"/hair-salon"}
        service="Hair Service"
        currService="Highlights & Streaks"
      />
      <BalayageColorNearMeHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BalayageColorNearMeRead />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default BalayageColorNearMe;
