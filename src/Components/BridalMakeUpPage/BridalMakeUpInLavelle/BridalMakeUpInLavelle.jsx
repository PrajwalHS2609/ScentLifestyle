import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import BridalMakeUpInLavelleHead from "./BridalMakeUpInLavelleHead";
import BridalMakeUpInLavelleImg from "./BridalMakeUpInLavelleImg";
import BridalMakeUpInLavelleWhy from "./BridalMakeUpInLavelleWhy";
import BridalMakeUpInLavelleWhyChoose from "./BridalMakeUpInLavelleWhyChoose";
import BridalMakeUpInLavellePerfect from "./BridalMakeUpInLavellePerfect";
import BridalMakeUpInLavelleEnchance from "./BridalMakeUpInLavelleEnchance";
import BridalMakeUpInLavelleBook from "./BridalMakeUpInLavelleBook";

const BridalMakeUpInLavelle = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Bridal Makeup in Lavelle Road, Bangalore | Bridal Makeup near Lavelle
          Road
        </title>
        <meta
          name="description"
          content="Bridal Makeup in Lavelle Road, Bangalore. Whether you're envisioning a traditional bridal style or a modern twist, our expert makeup artists are here to bring your vision to life."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/bridal-makeup-in-lavelle-road"
        />
      </Helmet>
      <NavBg />
      <BridalMakeUpInLavelleImg />
      <InnerNavi
        link="/facial"
        service="Bridal MakeUp"
        currService="Bridal MakeUp in Lavelle"
      />
      <BridalMakeUpInLavelleHead />
      <BridalMakeUpInLavelleWhyChoose />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <BridalMakeUpInLavellePerfect />
      <BridalMakeUpInLavelleEnchance />
      <BridalMakeUpInLavelleWhy />
      <BridalMakeUpInLavelleBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default BridalMakeUpInLavelle;