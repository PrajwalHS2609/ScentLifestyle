import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../NavBg/NavBg";
import BridalMakeUpImg from "./BridalMakeUpImg";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../Help/HelpNearYou";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";
import LastComp from "../LastComp/LastComp";
import Partners from "../HomePage/Partners/Partners";
import OurSalon from "../HomePage/OurSalon/OurSalon";
import Members from "../HomePage/Members/Members";
import Navi1 from "../HairServicePage/Navi1/Navi1";
import BridalMakeUpServiceCard from "./BridalMakeUpServiceCard";
import BridalMakeUpAbout from "./BridalMakeUpAbout/BridalMakeUpAbout";
import BridalReadMore from "./BridalReadMore/BridalReadMore";

const BridalMakeUpPage = () => {
  return (
    <div>
      {/* <Helmet>
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
          href="https://scentlifestyle.com/bridal-makeup"
        />
      </Helmet> */}
      <NavBg />
      <BridalMakeUpImg />
      <Navi1 servName="Bridal MakeUp" />
      <BridalMakeUpServiceCard/>
      <BridalMakeUpAbout/>
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BridalReadMore/>
      <LastComp />
    </div>
  );
};

export default BridalMakeUpPage;
