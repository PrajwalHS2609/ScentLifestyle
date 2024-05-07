import React from "react";
import Video from "./Video/Video"
import Services from './Services/Services';
import Style from './Style/Style';
import About from './About/About';
import Members from './Members/Members';
import OurSalon from './OurSalon/OurSalon';
import Work from './Work/Work';
import Partners from './Partners/Partners';
import InstaFeed from './InstaFeed/InstaFeed';
import HelpNearYou from '../Help/HelpNearYou';
import HomeRead from './HomeRead/HomeRead';
import LastComp from './../LastComp/LastComp';

const HomePage = () => {
  return (
    <div>
      <Video/>
      <Services />
      <Style />
      <About />
      <Members />
      <OurSalon />
      <Work />
      <Partners />
      <InstaFeed/>
      {/* <MakeOver /> */}
      <HelpNearYou />
     <HomeRead/>
      <LastComp/>
    </div>
  );
};

export default HomePage;
