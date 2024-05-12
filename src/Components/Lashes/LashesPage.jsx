import React from "react";
import NavBg from "./NavBg/NavBg";
import LashesImg from "./LashesImg/LashesImg";
import LastComp from "../LastComp/LastComp";
import HelpNearYou from "../Help/HelpNearYou";
import Members from "./../HomePage/Members/Members";
import OurSalon from "./../HomePage/OurSalon/OurSalon";
import LashesServiceCardContain from "./LashesServiceCard/LashesServiceCardContain";
import Navi6 from "./Navi6/Navi6";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";
import LashesRead from "./LashesRead/LashesRead";
import Partners from "../HomePage/Partners/Partners";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import { Helmet } from "react-helmet";
import TextLocReviews from './../LocationPage/TextLocReviews/TextLocReviews';

const LashesPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          SCENT Eye Lashes in Bangalore | Eyelash Extensions Salon Near Me
        </title>
        <meta
          name="Indulge in premium SCENT spa services in Bangalore. Explore our luxurious body massages and rejuvenate your mind and body. Book now for ultimate relaxation!"
          content="Scent application"
        />
      </Helmet>
      <NavBg />
      <LashesImg />
      <Navi6 />
      <LashesServiceCardContain />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews/>
      <TextLocReviews/>
      <ServiceWhy />
      <LashesRead />
      <LastComp />
    </div>
  );
};

export default LashesPage;
