import React from "react";
import NavBg from "../../NavBg/NavBg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import MicroBladingInLavelleHead from "./MicroBladingInLavelleHead";
import MicroBladingInLavelleWhy from "./MicroBladingInLavelleWhy";
import MicroBladingInLavelleProcess from "./MicroBladingInLavelleProcess";
import MicroBladingInLavelleWhyChoose from "./MicroBladingInLavelleWhyChoose";
import MicroBladingInLavelleBenefits from "./MicroBladingInLavelleBenefits";
import { Helmet } from "react-helmet";
import LastComp from "../../LastComp/LastComp";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import MicroBladingInLavelleImg from "./MicroBladingInLavelleImg";
import MicroBladingInLavelleBook from "./MicroBladingInLavelleBook";

const MicroBladingInLavelle = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Eyebrow Microblading in Lavelle Road, Bangalore | Eyebrow Microblading
          near Lavelle Road
        </title>
        <meta
          name="description"
          content="Eyebrow Microblading in Lavelle Road, Bangalore. Whether you're looking to fill in sparse areas or completely redefine your brow shape, our skilled technicians are here to help you achieve stunning results."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/eyebrow-microblading-in-lavelle-road"
        />
      </Helmet>
      <NavBg />
      <MicroBladingInLavelleImg />
      <InnerNavi
        link="/facial"
        service="Hair Salon"
        currService="Hair salon in Lavelle"
      />
      <MicroBladingInLavelleHead />
      <MicroBladingInLavelleWhy />

      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <MicroBladingInLavelleWhyChoose />
      <MicroBladingInLavelleProcess />
      <MicroBladingInLavelleWhy />
      <MicroBladingInLavelleBenefits />
      <MicroBladingInLavelleBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default MicroBladingInLavelle;
