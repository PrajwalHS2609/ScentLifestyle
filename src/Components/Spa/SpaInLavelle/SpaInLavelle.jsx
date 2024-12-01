import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "./../../NavBg/NavBg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import SpaInLavelleHead from "./SpaInLavelleHead";
import SpaInLavelleWhy from "./SpaInLavelleWhy";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import SpaInLavelleService from "./SpaInLavelleService";
import SpaInLavelleXp from "./SpaInLavelleXp";
import SpaInLavelleWhyScent from "./SpaInLavelleWhyScent";
import SpaInLavelleVisit from "./SpaInLavelleVisit";
import HairSalonInLavelleImg from "../../HairServicePage/HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";
import spalavelleImg from "./../../../Images/SahakarNagar/Spa.png";

const SpaInLavelle = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Spa in Lavelle Road, Bangalore | Best Spa near Lavelle Road
        </title>
        <meta
          name="description"
          content="Spa in Lavelle Road, Bangalore. At SCENT, we offer a range of luxurious treatments designed to soothe your mind, body, and soul."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/spa-in-lavelle-road"
        />
      </Helmet>
      <NavBg />
      <HairSalonInLavelleImg img={spalavelleImg} alt={spalavelleImg} />
      <InnerNavi link="/spa" service="Spa" currService="Spa in Lavelle" />
      <SpaInLavelleHead />
      <SpaInLavelleWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <SpaInLavelleService />
      <SpaInLavelleXp />
      <SpaInLavelleWhyScent />
      <SpaInLavelleVisit />
            
    </div>
  );
};

export default SpaInLavelle;
