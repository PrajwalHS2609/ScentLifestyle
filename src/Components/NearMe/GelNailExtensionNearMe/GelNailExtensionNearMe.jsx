import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import GelNailExtensionNearMeImg from "./GelNailExtensionNearMeImg";
import GelNailExtensionNearMeHead from "./GelNailExtensionNearMeHead";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import GelNailExtensionNearMeRead from "./GelNailExtensionNearMeRead";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";

const GelNailExtensionNearMe = () => {
  return (
    <div className="hairColorContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Gel Nails Extension Salon near Me | Best Gel Nails Extension in
          Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Gel Nails Extension Near Me – At SCENT, we redefine the traditional pedicure, making it a luxurious journey of self-care and relaxation. Book an Appointment! "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/gel-nail-extension-near-me"
        />
      </Helmet>
      <GelNailExtensionNearMeImg />
      <InnerNavi
        link={"/nail-salon"}
        service="Nails Service"
        currService="Gel Nails Extension"
      />
      <GelNailExtensionNearMeHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <GelNailExtensionNearMeRead />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default GelNailExtensionNearMe;
