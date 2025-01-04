import React from "react";
import { Helmet } from "react-helmet";
import HairSalonInMeadowsImg from "../../LocationServices/HairLocationServices/HairSalonInMeadows/HairSalonInMeadowsImg/HairSalonInMeadowsImg";
import hairScalpMassage from "./../../../Images/SahakarNagar/Hair.png";
import HairScalpMassagerHead from "./HairScalpMassagerHead";
import HairScalpMassagerBenefits from "./HairScalpMassagerBenefits";
import HairScalpMassagerWhyChoose from "./HairScalpMassagerWhyChoose";
import HairScalpMassagerService from "./HairScalpMassagerService";
import HairScalpMassagerXp from "./HairScalpMassagerXp";
import HairScalpMassagerHow from "./HairScalpMassagerHow";
import HairScalpMassagerWellness from "./HairScalpMassagerWellness";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";

const HairScalpMassager = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Scalp Massagers in Bangalore | Scalp Treatments in Bangalore
        </title>
        <meta
          name="description"
          content="Scalp Massagers in Bangalore. From improving blood circulation to promoting hair growth, scalp massaging is a practice rooted in ancient traditions and enhanced with modern techniques."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/scalp-massagers-in-bangalore"
        />
      </Helmet>
      <HairSalonInMeadowsImg img={hairScalpMassage} alt="hairScalpMassage" />{" "}
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair Scalp Massager"
      />
      <HairScalpMassagerHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy  />
      <HairScalpMassagerBenefits />
      <HairScalpMassagerWhyChoose />
      <HairScalpMassagerService />
      <HairScalpMassagerXp />
      <HairScalpMassagerHow />
      <HairScalpMassagerWellness />
    </div>
  );
};

export default HairScalpMassager;
