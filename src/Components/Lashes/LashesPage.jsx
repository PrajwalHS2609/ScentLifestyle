import React from "react";
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
import TextLocReviews from "./../LocationPage/TextLocReviews/TextLocReviews";
import NavBg from "../NavBg/NavBg";

const LashesPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          SCENT Eye Lashes in Bangalore | Eyelash Extensions Salon Near Me
        </title>
        <meta
          name="Transform your look with stunning eyelash extensions at SCENT Salon. Enhance your beauty with permanent lashes that make your eyes look beautiful and dynamic. Book your appointment today!"
          content="Scent application"
        />
      </Helmet>
      <NavBg/>
      <LashesImg />
      <Navi6 />
      <LashesServiceCardContain />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <LashesRead />
      <LastComp />
    </div>
  );
};

export default LashesPage;
