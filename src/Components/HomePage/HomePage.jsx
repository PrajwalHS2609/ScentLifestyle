import React, { Suspense } from "react";
import Video from "./Video/Video";
import { Helmet } from "react-helmet";
import Services from "./Services/Services";
import Members from "./Members/Members";
import OurSalon from "./OurSalon/OurSalon";
import Partners from "./Partners/Partners";
import HelpNearYou from "../Help/HelpNearYou";
import HomeRead from "./HomeRead/HomeRead";
import ServiceWhy from "./../MainServicePages/ServiceWhy/ServiceWhy";
import TextLocReviews from "./../TextLocReviews/TextLocReviews";
import HomeBlog from "./HomeBlog/HomeBlog";
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
      {/* <Style />
      <About /> */}
      <Members />
      {/* <Work /> */}
      <OurSalon />
      <Partners />
      <Suspense fallback={<p>Loading....</p>}>
        <InstaFeed />
      </Suspense>
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HomeBlog />
      <HomeRead />
    </div>
  );
};

export default HomePage;
