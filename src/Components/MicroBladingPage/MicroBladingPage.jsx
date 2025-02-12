import React from "react";
import NavBg from "../NavBg/NavBg";
import MicroBladingImg from "./MicroBladingImg";
import Members from "../HomePage/Members/Members";
import OurSalon from "../HomePage/OurSalon/OurSalon";
import Partners from "../HomePage/Partners/Partners";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../Help/HelpNearYou";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";
import MicroBladingReadMore from "./MicroBladingReadMore/MicroBladingReadMore";
import { Helmet } from "react-helmet";
import MicroBladingContent from "./MicroBladingReadMore/MicroBladingContent/MicroBladingContent";
import MicroBladingCompare from "./MicroBladingCompare/MicroBladingCompare";
import ServBreadCrumb from "../InnerServicePage/InnerNavi/ServBreadCrumb";

const MicroBladingPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Eyebrow Microblading in Bangalore - Microblading Services</title>
        <meta
          name="description"
          content="Eyebrow Microblading in Bangalore. A semi-permanent solution for perfectly shaped and fuller eyebrows. Book Now!."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/eyebrow-microblading"
        />
      </Helmet>
      <NavBg />
      <MicroBladingImg />
      <ServBreadCrumb currService="Micro Blading" />
      <MicroBladingContent />
      <MicroBladingCompare/>
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <MicroBladingReadMore />
      
    </div>
  );
};

export default MicroBladingPage;
