import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import FacialInMeadowsComp from "./FacialInMeadowsComp";
import FacialInMeadowsPersonalized from "./FacialInMeadowsPersonalized";
import FacialInMeadowsHead from "./FacialInMeadowsHead";
import facialMeadowsImg from "./../../../Images/SahakarNagar/Facials.png";
import HairSalonInMeadowsImg from "../../HairServicePage/HairSalonInMeadows/HairSalonInMeadowsImg/HairSalonInMeadowsImg";

const FacialInMeadows = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Facials in Meadows Whitefield, Bangalore | Facials Treatment near
          Whitefield
        </title>
        <meta
          name="description"
          content="Facials in Meadows Whitefield, Bangalore. We specialize in a range of facial treatments that not only enhance your natural beauty but also promote the overall health of your skin."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/facials-in-meadows-whitefield"
        />
      </Helmet>
      <HairSalonInMeadowsImg img={facialMeadowsImg} alt={facialMeadowsImg} />
      <InnerNavi
        link="/facial"
        service="Facial"
        currService="Facial salon in Meadows"
      />
      <FacialInMeadowsHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <FacialInMeadowsComp />
      <FacialInMeadowsPersonalized />
            
    </div>
  );
};

export default FacialInMeadows;
