import React from "react";
import { Helmet } from "react-helmet";
import FaceImg from "./FaceImg/FaceImg";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../../LastComp/LastComp";
import FaceHeader from "./FaceHeader/FaceHeader";
import FaceWhy from "./FaceWhy/FaceWhy";
import NavBg from "../../../NavBg/NavBg";
import FaceWaxing from "./FaceWaxing/FaceWaxing";
import FaceDetan from "./FaceDetan";
import FaceThreading from "./FaceThreading";
import FaceOffering from "./FaceOffering";
import FaceBook from "./FaceBook";

const FacePage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Face Tan Removal Salon in Bangalore | Face De-Tan Pack Removal in
          Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Face Tan Removal Salon in Bangalore. Offering an array of specialized treatments, SCENT ensures your skin regains its natural glow and radiance"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/face-waxing-detan-threading-salon-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <FaceImg />
      <InnerNavi
        link="/beauty-essentials"
        service="Beauty Essentials"
        currService="Face"
      />
      <FaceHeader />
      <FaceWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <FaceWaxing />
      <FaceDetan />
      <FaceThreading />
      <FaceOffering />
      <FaceBook/>
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default FacePage;
