import React from "react";
import { Helmet } from "react-helmet";
import HairSalonInLavelleImg from "../../HairLocationServices/HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import HairBotoxNearWhitefieldHead from "./HairBotoxNearWhitefieldHead";
import HairBotoxNearWhitefieldBenefits from "./HairBotoxNearWhitefieldBenefits";
import HairBotoxNearWhitefieldWhyChoose from "./HairBotoxNearWhitefieldWhyChoose";
import HairBotoxNearWhitefieldProcess from "./HairBotoxNearWhitefieldProcess";
import HairBotoxNearWhitefieldTips from "./HairBotoxNearWhitefieldTips";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import hairSahakarnagar from "./../../../../Images/SahakarNagar/Hair.png";

const HairBotoxNearWhitefield = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hair Botox Treatments near Whitefield – SCENT Lifestyle</title>
        <meta
          name="description"
          content="Hair Botox Treatments near Whitefield from SCENT. This non-invasive treatment is designed to rejuvenate your hair, leaving it looking healthier, shinier, and more manageable."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-botox-treatments-near-whitefield"
        />
      </Helmet>
      <HairSalonInLavelleImg img={hairSahakarnagar} alt="hairSahakarnagar" />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair Botox in Whitefield"
      />
      <HairBotoxNearWhitefieldHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairBotoxNearWhitefieldBenefits />
      <HairBotoxNearWhitefieldWhyChoose />
      <HairBotoxNearWhitefieldProcess />
      <HairBotoxNearWhitefieldTips />
    </div>
  );
};

export default HairBotoxNearWhitefield;
