import React from "react";
import Navi1 from "./Navi1/Navi1";
import HairServiceCardContain from "./HairServiceCard/HairServiceCardContain";
import HairSalon from "./HairSalon/HairSalon";
import LastComp from "../LastComp/LastComp";
import HairServiceImg from "./HairServiceImg/HairServiceImg";
import HairRead from "./HairRead/HairRead";
import ServiceWhy from "./../MainServicePages/ServiceWhy/ServiceWhy";
import HelpNearYou from "../Help/HelpNearYou";
import Members from "../HomePage/Members/Members";
import OurSalon from "../HomePage/OurSalon/OurSalon";
import Partners from "../HomePage/Partners/Partners";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import { Helmet } from "react-helmet";
import NavBg from "../NavBg/NavBg";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
const HairServicePage = () => {
  return (
    <div className="hairMain">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Hair Salon in Bangalore for Cuts, Highlights, Treatments & Spa{" "}
        </title>
        <meta
          name="Experience top-notch haircut and styling services at our premier hair salon in Bangalore. Book your appointment with SCENT Salon today and enjoy exclusive offers!"
          content="Scent application"
        />
      </Helmet>
      <NavBg />
      <HairServiceImg />
      <Navi1 />
      <HairServiceCardContain />
      <HairSalon />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews/>
      <ServiceWhy />
      <HairRead />
      <LastComp />
    </div>
  );
};

export default HairServicePage;
