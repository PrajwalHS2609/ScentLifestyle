import React from "react";
import LastComp from "../../LastComp/LastComp";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import NavBg from "../../NavBg/NavBg";
import { Helmet } from "react-helmet";
import BotoxImg from "./BotoxImg/BotoxImg";
import BotoxHead from "./BotoxHead/BotoxHead";
import BotoxBenefits from "./BotoxBenefits/BotoxBenefits";
import BotoxProcess from "./BotoxProcess";
import BotoxWhy from "./BotoxWhy/BotoxWhy";
import BotoxAftercare from "./BotoxAftercare";
import BotoxTreatment from "./../../../Images/Hair Treatments/Botox.png";

const Botox = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Hair Botox Treatments in Bangalore | Hair Botox Salon near Me{" "}
        </title>
        <meta
          name="description"
          content="Hair Botox Treatments in Bangalore are becoming increasingly popular among those seeking a smooth, frizz-free, and rejuvenated look for their hair."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-botox-treatments-in-bangalore"
        />
      </Helmet>
      <NavBg />
      <BotoxImg img={BotoxTreatment}/>
      {/* <InnerNavi link="/spa" service="Spa" currService="Head Massage" /> */}
     <BotoxHead/>
     <BotoxBenefits/>
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BotoxProcess/>
      <BotoxWhy/>
      <BotoxAftercare/>
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default Botox;
