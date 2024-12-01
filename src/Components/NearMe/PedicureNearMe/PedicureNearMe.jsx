import React from "react";
import { Helmet } from "react-helmet";
import PedicureNearMeHead from "./PedicureNearMeHead";
import PedicureNearMeRead from "./PedicureNearMeRead";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import Partners from "../../HomePage/Partners/Partners";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import PedicureNearMeImg from "./PedicureNearMeImg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";

const PedicureNearMe = () => {
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
          href="https://scentlifestyle.com/pedicurist-near-me"
        />
      </Helmet>
      <PedicureNearMeImg />
      <InnerNavi
        link={"/nail-salon"}
        service="Nails Service"
        currService="Pedicure Near Me"
      />
      <PedicureNearMeHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <PedicureNearMeRead />
            
    </div>
  );
};

export default PedicureNearMe;
