import React from "react";
import HairSmoothLavelleHead from "./HairSmoothLavelleHead";
import HairSmoothLavelleFooter from "./HairSmoothLavelleFooter";
import { Helmet } from "react-helmet";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "./../../../HomePage/Members/Members";
import OurSalon from "./../../../HomePage/OurSalon/OurSalon";
import Partners from "./../../../HomePage/Partners/Partners";
import HelpNearYou from "./../../../Help/HelpNearYou";
import TextLocReviews from "./../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "./../../../MainServicePages/ServiceWhy/ServiceWhy";
import hairTreatment from "./../../../../Images/Hair Treatments/Keratin.png";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HairSalonInLavelleImg from "../../Lavelle/HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";
const HairSmoothLavelle = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
           Hair Smoothening in Lavelle Road| Permanent Hair Smoothening in
          Lavelle Road{" "}
        </title>
        <meta
          name="description"
          content="Hair Smoothening in Lavelle Road. With our expert hair stylists and high-quality treatments, you can achieve sleek, smooth, and shiny hair effortlessly."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-smoothening-in-lavelle-road"
        />
      </Helmet>
      <HairSalonInLavelleImg img={hairTreatment} alt="Hair Treatment" />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair Smoothening In Lavelle"
      />
      <HairSmoothLavelleHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairSmoothLavelleFooter />
    </div>
  );
};

export default HairSmoothLavelle;
