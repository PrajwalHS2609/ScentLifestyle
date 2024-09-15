import React from "react";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import NailSalonInLavelleHead from './NailSalonInLavelleHead';
import NailSalonInLavelleWhy from './NailSalonInLavelleWhy';
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import NailSalonInLavelleService from './NailSalonInLavelleService';
import NailSalonInLavelleXp from './NailSalonInLavelleXp';
import NailSalonInLavelleWhyScent from "./NailSalonInLavelleWhyScent";
import NailSalonInLavelleVisit from './NailSalonInLavelleVisit';
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import LastComp from "../../LastComp/LastComp";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import HairSalonInLavelleImg from "../../HairServicePage/HairSalonInLavelle/HairSalonInLavelleImg/HairSalonInLavelleImg";
import naillavelleImg from "./../../../Images/JP_Nagar/Nail.png";

const NailSalonInLavelle = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Nail Salon in Lavelle Road, Bangalore | Hair Spa near Lavelle Road{" "}
        </title>
        <meta
          name="description"
          content="Nail Salon in Lavelle Road, Bangalore. Scent offers a perfect blend of luxury, comfort, and exceptional services to cater to all your nail care needs."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/nail-salon-in-lavelle-road"
        />
      </Helmet>
      <NavBg />
      <HairSalonInLavelleImg img={naillavelleImg} alt={naillavelleImg} />
      <InnerNavi
        link="/nails-salon"
        service="Nail Salon"
        currService="Nail salon in Lavelle"
      />
      <NailSalonInLavelleHead />
      <NailSalonInLavelleWhy />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <NailSalonInLavelleService />
      <NailSalonInLavelleXp />
      <NailSalonInLavelleWhyScent />
      <NailSalonInLavelleVisit />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default NailSalonInLavelle;
