import React from "react";
import LastComp from "../LastComp/LastComp";
import BeardStyle from "./BeardStyling/BeardStyle";
import BeardImgPara from "./BeardImg/BeardImg";
import NavBg from "../NavBg/NavBg";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";
import HelpNearYou from "../Help/HelpNearYou";
import OurSalon from "../HomePage/OurSalon/OurSalon";
import Members from "../HomePage/Members/Members";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import TextLocReviews from "../TextLocReviews/TextLocReviews";

const BeardStylingPage = () => {
  return (
    <div>
      <NavBg />
      {/* <BeardImgPara /> */}
      <BeardStyle />
      <OurSalon />
      <Members />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <LastComp />
    </div>
  );
};

export default BeardStylingPage;
