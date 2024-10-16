import React from "react";
import { Helmet } from "react-helmet";
import HairServiceImg from "../../HairServicePage/HairServiceImg/HairServiceImg";
import Navi1 from "../../HairServicePage/Navi1/Navi1";
import HairServiceCardContain from "../../HairServicePage/HairServiceCard/HairServiceCardContain";
import HairSalon from "../../HairServicePage/HairSalon/HairSalon";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import UnisexHairSalonNearMeRead from "./UnisexHairSalonNearMeRead";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";

const UnisexHairSalonNearMe = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Unisex Hair Salon near Me – Hair Cut, Coloring & Hair Spa Treatments{" "}
        </title>
        <meta
          name="description"
          content="Unisex Hair Salon near Me – Hair Cut, Coloring & Hair Spa Treatments. We specialize in offering an unparalleled grooming experience tailored to the modern man"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/unisex-hair-salon-near-me"
        />{" "}
      </Helmet>
      <HairServiceImg />
      <Navi1 />
      <HairServiceCardContain />
      <HairSalon />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <UnisexHairSalonNearMeRead />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default UnisexHairSalonNearMe;
