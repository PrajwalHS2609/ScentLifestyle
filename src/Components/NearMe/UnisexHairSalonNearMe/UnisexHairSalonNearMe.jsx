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
import UnisexHairSalonNearMeHead from "./UnisexHairSalonNearMeHead";

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
      <UnisexHairSalonNearMeHead />
      <HairServiceCardContain />
      <HairSalon />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <UnisexHairSalonNearMeRead />
            
    </div>
  );
};

export default UnisexHairSalonNearMe;
