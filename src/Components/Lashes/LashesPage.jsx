import React from "react";
import LashesImg from "./LashesImg/LashesImg";
import HelpNearYou from "../Help/HelpNearYou";
import Members from "./../HomePage/Members/Members";
import OurSalon from "./../HomePage/OurSalon/OurSalon";
import LashesServiceCardContain from "./LashesServiceCard/LashesServiceCardContain";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";
import LashesRead from "./LashesRead/LashesRead";
import Partners from "../HomePage/Partners/Partners";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import { Helmet } from "react-helmet";
import NavBg from "../NavBg/NavBg";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import ServBreadCrumb from "../InnerServicePage/InnerNavi/ServBreadCrumb";

const LashesPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
        EyeLashes in Bangalore | EyeLash Extension Near Me
        </title>
        <meta
          name="description"
          content="EyeLashes & Extensions in Bangalore. Discover the secret to achieving voluminous eyelashes with both permanent and temporary eyelash extensions."
        />
         <link
          rel="canonical"
          href="https://scentlifestyle.com/eye-lashes"
        />
      </Helmet>
      <NavBg/>
      <LashesImg />
      <ServBreadCrumb currService="Eye Lashes" />
      <LashesServiceCardContain />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <LashesRead />
      
    </div>
  );
};

export default LashesPage;
