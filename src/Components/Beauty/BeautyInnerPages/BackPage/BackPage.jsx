import React from "react";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import BeautyRead from "../../BeautyRead/BeautyRead";
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../../LastComp/LastComp";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import NavBg from "../../../NavBg/NavBg";
import { Helmet } from "react-helmet";
import BackHead from "./BackHead";
import BackXp from "./BackXp";
import BackConclusion from "./BackConclusion";
import BackWhat from "./BackWhat";
import BackWhy from "./BackWhy";
import BackBenefits from "./BackBenefits";
import BackAftercare from "./BackAftercare";
import BackImg from './BackImg';

const BackPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Body Back Waxing, De-tan & Threading in Bangalore – Book an
          Appointment!
        </title>
        <meta
          name="description"
          content="Body Back Waxing, De-tan & Threading in Bangalore. At SCENT, we offer a comprehensive range of services designed to address these issues and help you achieve flawless skin."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/body-back-waxing-detan-threading-salon-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <BackImg/>
      <InnerNavi
        link="/beauty-essentials"
        service="Beauty Essentials"
        currService="Back Body"
      />
      <BackHead/>
      <BackXp/>
      <BackWhy/>
      <BackWhat/>
      <BackBenefits/>
      <BackAftercare/>
      <BackConclusion/>
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BeautyRead />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default BackPage;