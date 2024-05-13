import React, { Suspense } from "react";
import Video from "./Video/Video";
import { Helmet } from "react-helmet";
import Services from "./Services/Services";
import Style from "./Style/Style";
import About from "./About/About";
import Members from "./Members/Members";
import OurSalon from "./OurSalon/OurSalon";
import Work from "./Work/Work";
import Partners from "./Partners/Partners";
import HelpNearYou from "../Help/HelpNearYou";
import HomeRead from "./HomeRead/HomeRead";
import LastComp from "./../LastComp/LastComp";
const InstaFeed = React.lazy(() => import("./InstaFeed/InstaFeed"));

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          SCENT Salon Spa in Bangalore - Hair, Nail, Skin, Beauty Essentials
        </title>
        <meta
          name="SCENT Salon Spa in Bangalore. Unisex Premium Salon for Hair, Nail, Skin, Beauty Essentials, Eyelashes, Spa & Facials! Book an Appointment Now!"
          content="Scent application"
        />
      </Helmet>
      <Video />
      <Services />
      <Style />
      <About />
      <Members />
      <OurSalon />
      <Work />
      <Partners />
      <Suspense fallback={<p>This is Loading....</p>}>
        <InstaFeed />
      </Suspense>
      <HelpNearYou />
      <HomeRead />
      <LastComp />
    </div>
  );
};

export default HomePage;
