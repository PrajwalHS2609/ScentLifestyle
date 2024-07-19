import React from "react";
import "./NailExtensionPage.css";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import NailExtensionHead from "./NailExtensionHead/NailExtensionHead";
import NailExtensionMaintain from "./NailExtensionMaintain/NailExtensionMaintain";
import NailExtensionWhy from "./NailExtensionWhy/NailExtensionWhy";
import NailSalonBook from "./NailSalonBook/NailSalonBook";
import SalonXp from "./SalonXp/SalonXp";
import NailArtDesign from "./NailArtDesign/NailArtDesign";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import LastComp from "../../LastComp/LastComp";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";

const NailExtensionPage = () => {
  return (
    <div className="nailExtensionPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Nail Extension in Bangalore | Nail Extension Salon Near Me
        </title>
        <meta
          name="description"
          content="Experience the Best Nail Extension in Bangalore, offering top-notch nail services that combine creativity, precision, and high-quality products. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/nails-extension "
        />
      </Helmet>
      <NavBg />
      <NailExtensionHead />
      <NailExtensionMaintain />
      <NailExtensionWhy />
      <SalonXp/>
      <NailArtDesign/>
      <NailSalonBook/>
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WhatsApp/>
      <LastComp />
    </div>
  );
};

export default NailExtensionPage;
