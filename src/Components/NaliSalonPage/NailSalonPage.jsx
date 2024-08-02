import React from "react";
import NailSalonImg from "./NailSalonImg/NailSalonImg";
import LastComp from "../LastComp/LastComp";
import NailServiceCardContain from "./NailService Card/NailServiceCardContain";
import Members from "./../HomePage/Members/Members";
import OurSalon from "./../HomePage/OurSalon/OurSalon";
import HelpNearYou from "../Help/HelpNearYou";
import ServiceWhy from "./../MainServicePages/ServiceWhy/ServiceWhy";
import NailRead from "./NailSalonRead/NailRead";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import Partners from "../HomePage/Partners/Partners";
import { Helmet } from "react-helmet";
import NavBg from "./../NavBg/NavBg";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import WhatsApp from "../HomePage/WhatsApp/WhatsApp";
import ServBreadCrumb from "../InnerServicePage/InnerNavi/ServBreadCrumb";

const NailSalonPage = () => {
  return (
    <div className="nailMain">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
        Nail Salon in Bangalore | Nail Arts & Gel Near Me
        </title>
        <meta
          name="description"
          content="SCENT Nail Salon offers gel polish, acrylic extensions, nail art, O.P.I nails, chrome, ombre, cat eye gel, gel French, and glam polish services."
        />
         <link
          rel="canonical"
          href="https://scentlifestyle.com/nails-salon"
        />
      </Helmet>
      <NavBg />
      <NailSalonImg />
      <ServBreadCrumb currService="Nail Salon"/>
      <NailServiceCardContain />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WhatsApp/>
      <NailRead />
      <LastComp />
    </div>
  );
};

export default NailSalonPage;
