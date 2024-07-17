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
import LastComp from "../LastComp/LastComp";
import Navi1 from "../HairServicePage/Navi1/Navi1";
import MicroBladingReadMore from "./MicroBladingReadMore/MicroBladingReadMore";
import { Helmet } from "react-helmet";
import MicroBladingContent from "./MicroBladingReadMore/MicroBladingContent/MicroBladingContent";

const MicroBladingPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Bridal Makeup Artists in Bangalore - Wedding Makeup Artists
        </title>
        <meta
          name="description"
          content="Eyebrow Microblading in Bangalore. A semi-permanent solution for perfectly shaped and fuller eyebrows. Book Now!."
        />
        {/* <link rel="canonical" href="https://scentlifestyle.com/bridal-makeup" /> */}
      </Helmet>
      <NavBg />
      <MicroBladingImg />
      <Navi1 servName="MicroBlading" />
      <MicroBladingContent/>
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <MicroBladingReadMore />
      <LastComp />
    </div>
  );
};

export default MicroBladingPage;
