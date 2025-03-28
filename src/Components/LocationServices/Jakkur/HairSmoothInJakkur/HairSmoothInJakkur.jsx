import React from "react";
import HairSmoothInJakkurHead from "./HairSmoothInJakkurHead";
import HairSmoothInJakkurFooter from "./HairSmoothInJakkurFooter";
import Members from "./../../../HomePage/Members/Members";
import OurSalon from "./../../../HomePage/OurSalon/OurSalon";
import Partners from "./../../../HomePage/Partners/Partners";
import HelpNearYou from "./../../../Help/HelpNearYou";
import TextLocReviews from "./../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "./../../../MainServicePages/ServiceWhy/ServiceWhy";
import hairTreatment from "./../../../../Images/Hair Treatments/Keratin.png";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HairSalonInLavelleImg from "../../Lavelle/HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";
import { Helmet } from "react-helmet";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
const HairSmoothInJakkur = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hair Smoothening in Jakkur | Permanent Hair Smoothening in Jakkur</title>
        <meta
          name="description"
          content="Hair Smoothening in Jakkur. With our expert hair stylists and high-quality treatments, you can achieve sleek, smooth, and shiny hair effortlessly."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-smoothening-in-jakkur"
        />
      </Helmet>
      <HairSalonInLavelleImg img={hairTreatment} alt="Hair Treatment" />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Scalp Massager In Jakkur"
      />
      <HairSmoothInJakkurHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairSmoothInJakkurFooter />
    </div>
  );
};

export default HairSmoothInJakkur;
