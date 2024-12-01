import React from "react";
import StyleCrewHead from "./StyleCrewHead";
import StyleCrewPara from "./StyleCrewPara";
import StyleCrewImg from "./StyleCrewImg";
import "./StyleCrewPage.css";
import NavBg from "../NavBg/NavBg";
import OurSalon from "../HomePage/OurSalon/OurSalon";
import Partners from "../HomePage/Partners/Partners";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../Help/HelpNearYou";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";
import { Helmet } from "react-helmet";

const StyleCrewPage = () => {
  return (
    <div className="styleCrewPageContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Style Crew of SCENT Salon in Bangalore</title>
        <meta
          name="description"
          content="Best Style Crew of SCENT Salon in Bangalore. At the heart of scent, culture is experienced, specialized professionalism – a service beyond the expectations of our discerning, fastidious guest.
"
        />
        <link rel="canonical" href="https://scentlifestyle.com/crew" />
      </Helmet>
      <NavBg />
      <StyleCrewHead />
      <StyleCrewPara />
      <StyleCrewImg />
      {/* <Members /> */}
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      
    </div>
  );
};

export default StyleCrewPage;
