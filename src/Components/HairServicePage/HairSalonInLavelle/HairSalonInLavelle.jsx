import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import HairSalonInLavelleHead from "./HairSalonInLavelleHead/HairSalonInLavelleHead";
import HairSalonInLavelleWhy from "./HairSalonInLavelleWhy/HairSalonInLavelleWhy";
import HairSalonInLavelleService from "./HairSalonInLavelleService/HairSalonInLavelleService";
import HairSalonInLavelleXp from "./HairSalonInLavelleXp";
import HairSalonInLavelleDiff from "./HairSalonInLavelleDiff";
import HairSalonInLavelleCustomer from "./HairSalonInLavelleCustomer/HairSalonInLavelleCustomer";
import HairSalonInLavelleBook from "./HairSalonInLavelleBook";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import HairSalonInLavelleImg from "./HairSalonInLavelleImg/HairSalonInLavelleImg";
import hairlavelleImg from "./../../../Images/SahakarNagar/Hair.png";

const HairSalonInLavelle = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Hair Salon in Lavelle Road, Bangalore | Hair Spa near Lavelle Road
        </title>
        <meta
          name="description"
          content="Hair Salon in Lavelle Road, Bangalore. Whether you're looking for a fresh haircut, a complete makeover, or simply a relaxing day of pampering. Call Now!"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/hair-salon-in-lavelle-road"
        />
      </Helmet>
      <NavBg />
      <HairSalonInLavelleImg img={hairlavelleImg} alt={hairlavelleImg} />
      <InnerNavi
        link="/hair-salon"
        service="Hair Salon"
        currService="Hair salon in Lavelle"
      />
      <HairSalonInLavelleHead />
      <HairSalonInLavelleWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <HairSalonInLavelleService />
      <HairSalonInLavelleXp />
      <HairSalonInLavelleDiff />
      <HairSalonInLavelleCustomer />
      <HairSalonInLavelleBook />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default HairSalonInLavelle;
