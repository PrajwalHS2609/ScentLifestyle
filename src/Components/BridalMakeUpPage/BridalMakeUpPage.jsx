import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../NavBg/NavBg";
import BridalMakeUpImg from "./BridalMakeUpImg";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../Help/HelpNearYou";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";
import Partners from "../HomePage/Partners/Partners";
import OurSalon from "../HomePage/OurSalon/OurSalon";
import Members from "../HomePage/Members/Members";
import BridalMakeUpServiceCard from "./BridalMakeUpServiceCard";
import BridalMakeUpAbout from "./BridalMakeUpAbout/BridalMakeUpAbout";
import BridalReadMore from "./BridalReadMore/BridalReadMore";
import ServBreadCrumb from "../InnerServicePage/InnerNavi/ServBreadCrumb";
// import BridalGallery from "./BridalGallery/BridalGallery";

const BridalMakeUpPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Bridal Makeup Artists in Bangalore - Wedding Makeup Artists
        </title>
        <meta
          name="description"
          content="Bridal Makeup Artists in Bangalore. Look your absolute best even before your D-Day with our exclusive pre-bridal services."
        />
        <link rel="canonical" href="https://scentlifestyle.com/bridal-makeup" />
      </Helmet>
      <NavBg />
      <BridalMakeUpImg />
      <ServBreadCrumb currService="Bridal MakeUp" />
      <BridalMakeUpServiceCard />
      <BridalMakeUpAbout />
      {/* <BridalGallery/> */}
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BridalReadMore />
      
    </div>
  );
};

export default BridalMakeUpPage;
