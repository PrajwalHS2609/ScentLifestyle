import React from "react";
import { Helmet } from "react-helmet";
import FaceImg from "./FaceImg/FaceImg";

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
          href="https://scentlifestyle.com/face-tan-removal-salon-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <FaceImg />
      <InnerNavi
        link="/beauty-essentials"
        service="Beauty Essentials"
        currService="Face"
      />
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

export default FacePage;
