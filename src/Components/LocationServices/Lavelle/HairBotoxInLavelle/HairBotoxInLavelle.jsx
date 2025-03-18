import React from "react";
import HairBotoxInLavelleHead from "./HairBotoxInLavelleHead";
import HairBotoxInLavelleWhyChoose from "./HairBotoxInLavelleWhyChoose";
import HairBotoxInLavelleHow from './HairBotoxInLavelleHow';
import HairBotoxInLavelleWho from "./HairBotoxInLavelleWho";
import HairBotoxInLavelleMaintain from "./HairBotoxInLavelleMaintain";
import HairBotoxInLavelleWhy from "./HairBotoxInLavelleWhy";
import HairBotoxInLavelleBook from './HairBotoxInLavelleBook';
import { Helmet } from "react-helmet";
import hairSahakarnagar from "./../../../../Images/SahakarNagar/Hair.png";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import HairSalonInLavelleImg from "../HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";

const HairBotoxInLavelle = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
        Hair Botox Treatment in Lavelle Road | Hair Treatment Salon near Lavelle Road
        </title>
        <meta
          name="description"
          content="Hair Botox Treatment in Lavelle Road, Bangalore is the perfect solution to bring back the shine, smoothness, and strength your hair deserves. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-botox-treatment-in-lavelle-road"
        />
      </Helmet>
      <HairSalonInLavelleImg img={hairSahakarnagar} alt="hairSahakarnagar" />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair Botox in Lavelle"
      />
      <HairBotoxInLavelleHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairBotoxInLavelleWhyChoose />
      <HairBotoxInLavelleHow/>
      <HairBotoxInLavelleWho/>
      <HairBotoxInLavelleMaintain/>
      <HairBotoxInLavelleWhy/>
      <HairBotoxInLavelleBook/>
    </div>
  );
};

export default HairBotoxInLavelle;
