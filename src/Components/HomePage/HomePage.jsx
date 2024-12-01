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
import ServiceWhy from "./../MainServicePages/ServiceWhy/ServiceWhy";
import TextLocReviews from "./../TextLocReviews/TextLocReviews";
const InstaFeed = React.lazy(() => import("./InstaFeed/InstaFeed"));



const HomePage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          SCENT Salon Spa in Bangalore - Hair, Nail, Skin, Beauty Essentials
        </title>
        <meta
          name="description"
          content="SCENT Salon Spa in Bangalore. Unisex Premium Salon for Hair, Nail, Skin, Beauty Essentials, Eyelashes, Spa & Facials! Book an Appointment Now!"
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
      <Suspense fallback={<p>Loading....</p>}>
        <InstaFeed />
      </Suspense>
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
     <HomeRead />
      
    </div>
  );
};

export default HomePage;
