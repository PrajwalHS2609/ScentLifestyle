import React from "react";
import Video from "../Video/Video";
import Services from "../Services/Services";
import Style from "../Style/Style";
import About from "../About/About";
import OurSalon from "../OurSalon/OurSalon";
import Work from "../Work/Work";
import Partners from "../Partners/Partners";
import InstaFeed from "../InstaFeed/InstaFeed";
import MakeOver from "../MakeOver/MakeOver";
import Members from "../Members/Members";
import LastComp from "../LastComp/LastComp";
import HelpNearYou from "../Help/HelpNearYou";
const HomePage = () => {
  return (
    <div style={{border:"solid green"}}>
      <Video />
      <Services />
      <Style />
      <About />
      <Members />
      <OurSalon />
      <Work />
      <Partners />
      {/* <InstaFeed /> */}
      {/* <MakeOver /> */}
      <HelpNearYou />
      <LastComp />
    </div>
  );
};

export default HomePage;
