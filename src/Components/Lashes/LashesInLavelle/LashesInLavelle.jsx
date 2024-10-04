import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import LashesInLavelleHead from "./LashesInLavelleHead";
import LashesInLavelleWhy from "./LashesInLavelleWhy";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import LashesInLavelleBook from "./LashesInLavelleBook";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import HairSalonInLavelleImg from "../../HairServicePage/HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";
import lasheslavelleImg from "./../../../Images/JP_Nagar/Eye Lashes.png";
import LashesInLavelleBenefits from './LashesInLavelleBenefits';

const LashesInLavelle = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Eye Lashes in Lavelle Road, Bangalore | Eye Lash Extensions near
          Lavelle Road
        </title>
        <meta
          name="description"
          content="Eye Lashes in Lavelle Road, Bangalore. We offer a range of lash treatments tailored to give you the perfect look, whether it's subtle enhancement or full-on drama."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/eye-lashes-in-lavelle-road"
        />
      </Helmet>
      <NavBg />
      <HairSalonInLavelleImg img={lasheslavelleImg} alt={lasheslavelleImg} />
      <InnerNavi
        link="/eye-lashes"
        service="Eye Lashes"
        currService="Eye Lashes in Lavelle"
      />
      <LashesInLavelleHead />
      <LashesInLavelleWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <LashesInLavelleBenefits />
      <LashesInLavelleBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default LashesInLavelle;
