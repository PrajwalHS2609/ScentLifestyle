import React from "react";
import { Helmet } from "react-helmet";
import PedicuristNearMeImg from "./PedicuristNearMeImg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import PedicuristNearMeHead from "./PedicuristNearMeHead";
import PedicuristNearMeRead from "./PedicuristNearMeRead";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import HelpNearYou from "../../Help/HelpNearYou";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import Partners from "../../HomePage/Partners/Partners";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Members from "../../HomePage/Members/Members";

const PedicuristNearMe = () => {
  return (
    <div className="hairColorContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pedicure Near Me | Best Pedicure Salon in Bangalore </title>
        <meta
          name="description"
          content="Pedicure Near Me – At SCENT, we redefine the traditional pedicure, making it a luxurious journey of self-care and relaxation. Book an Appointment! "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/pedicure-near-me"
        />
      </Helmet>
      <PedicuristNearMeImg />
      <InnerNavi
        link={"/nail-salon"}
        service="Nails Service"
        currService="Pedicurist Near Me"
      />
      <PedicuristNearMeHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <PedicuristNearMeRead />
            
    </div>
  );
};

export default PedicuristNearMe;
