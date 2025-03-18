import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import hairSahakarnagar from "./../../../../Images/SahakarNagar/Hair.png";
import HairBotoxInJakkurHead from "./HairBotoxInJakkurHead";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import HairBotoxInJakkurWhyChoose from "./HairBotoxInJakkurWhyChoose";
import HairBotoxInJakkurWho from "./HairBotoxInJakkurWho";
import HairBotoxInJakkurHow from "./HairBotoxInJakkurHow";
import HairBotoxInJakkurVerses from "./HairBotoxInJakkurVerses";
import HairBotoxInJakkurMaintain from "./HairBotoxInJakkurMaintain";
import HairBotoxInJakkurBook from "./HairBotoxInJakkurBook";
import HairBotoxInJakkurWhy from "./HairBotoxInJakkurWhy";
import HairSalonInLavelleImg from "../../Lavelle/HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";


const HairBotoxInJakkur = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Hair Botox Treatment in Jakkur | Hair Treatment Salon near Jakkur
        </title>
        <meta
          name="description"
          content="Hair Botox Treatment in Jakkur, Bangalore is the perfect solution to bring back the shine, smoothness, and strength your hair deserves. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-botox-treatment-in-jakkur"
        />
      </Helmet>
      <HairSalonInLavelleImg img={hairSahakarnagar} alt="hairSahakarnagar" />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair Botox in Jakkur"
      />
      <HairBotoxInJakkurHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairBotoxInJakkurWhyChoose />
      <HairBotoxInJakkurWho />
      <HairBotoxInJakkurHow />
      <HairBotoxInJakkurVerses />
      <HairBotoxInJakkurMaintain />
      <HairBotoxInJakkurWhy />
      <HairBotoxInJakkurBook />
    </div>
  );
};

export default HairBotoxInJakkur;
