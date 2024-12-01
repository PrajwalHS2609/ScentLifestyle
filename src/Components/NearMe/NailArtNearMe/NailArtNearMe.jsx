import React from "react";
import { Helmet } from "react-helmet";
import NailArtNearMeImg from "./NailArtNearMeImg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import NailArtNearMeHead from "./NailArtNearMeHead";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import NailArtNearMeRead from "./NailArtNearMeRead";

const NailArtNearMe = () => {
  return (
    <div className="hairColorContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nail Art Near Me | Best Nail Art Studio in Bangalore </title>
        <meta
          name="description"
          content="Nail Art Near Me – Lavelle Road, Sahakara Nagar, Jakkur, & Whitefield. SCENT is the place to be! Nail art has become an essential part of beauty and self-expression. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/nail-art-near-me"
        />
      </Helmet>
      <NailArtNearMeImg />
      <InnerNavi
        link={"/nail-salon"}
        service="Nails Service"
        currService="Nail Art Near ME"
      />
      <NailArtNearMeHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <NailArtNearMeRead />
            
    </div>
  );
};

export default NailArtNearMe;
