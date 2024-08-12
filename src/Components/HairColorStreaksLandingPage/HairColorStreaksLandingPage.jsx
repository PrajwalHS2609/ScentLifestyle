import React from "react";
// import HairColorStreaksLandingCare from './HairColorStreaksLandingCare/HairColorStreaksLandingCare'
import HairColorStreaksLandingCollection from "./HairColorStreaksLandingCollection/HairColorStreaksLandingCollection";
import HairColorStreaksLandingHead from "./HairColorStreaksLandingHead/HairColorStreaksLandingHead";
import HairColorStreaksLandingMission from "./HairColorStreaksLandingMission/HairColorStreaksLandingMission";
import HairColorStreaksLandingMove from "./HairColorStreaksLandingMove/HairColorStreaksLandingMove";
import HairColorStreaksLandingProgram from "./HairColorStreaksLandingProgram/HairColorStreaksLandingProgram";
import OurSalon from "../HomePage/OurSalon/OurSalon";
import Partners from "../HomePage/Partners/Partners";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../Help/HelpNearYou";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../HomePage/WhatsApp/WhatsApp";
import LastComp from "../LastComp/LastComp";

const HairColorStreaksLandingPage = () => {
  return (
    <div>
      <HairColorStreaksLandingHead />
      {/* <HairColorStreaksLandingCare/> */}
      <HairColorStreaksLandingCollection />\
      <HairColorStreaksLandingMove />
      <HairColorStreaksLandingMission />
      <HairColorStreaksLandingProgram />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default HairColorStreaksLandingPage;
