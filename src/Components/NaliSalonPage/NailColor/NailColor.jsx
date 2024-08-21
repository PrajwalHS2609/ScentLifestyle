import React from "react";
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
import { Helmet } from "react-helmet";
import NailColorHead from "./NailColorHead";
import NailColorProcess from "./NailColorProcess";
import NailColorBenefits from "./NailColorBenefits";
import NailColorMaintain from "./NailColorMaintain";
import NailCustomer from "./NailCustomer";
import NailColorTrend from "./NailColorTrend";
import NailColorImg from "./NailColorImg";

const NailColor = () => {
  return (
    <div className="nailExtensionPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Nails Color Change in Bangalore | Best Nail Color Salon Near Me{" "}
        </title>
        <meta
          name="description"
          content="Nails Color Change in Bangalore. A popular beauty service that allows individuals to express their personal style and enhance their overall appearance."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/nail-color-change"
        />
      </Helmet>
      <NavBg />
      <NailColorImg/>
      <NailColorHead/>
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <NailColorProcess/>
      <NailColorBenefits/>
      <NailColorTrend/>
      <NailColorMaintain/>
      <NailCustomer/>
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default NailColor;
