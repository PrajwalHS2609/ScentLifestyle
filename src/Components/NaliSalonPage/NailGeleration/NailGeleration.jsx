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
import NailGelerationHead from "./NailGelerationHead";
import NailGelerationProcess from "./NailGelerationProcess";
import NailGelerationBenefits from "./NailGelerationBenefits";
import NailGelerationTrend from "./NailGelerationTrend";
import NailGelerationMaintain from "./NailGelerationMaintain";
import NailGelerationCustomer from "./NailGelerationCustomer";
import { Helmet } from "react-helmet";

const NailGeleration = () => {
  return (
    <div className="nailExtensionPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
        Nails Geleration in Bangalore | Nail Geleration Salon Near Me{" "}
        </title>
        <meta
          name="description"
          content="Nails Geleration in Bangalore. Has become a popular choice for those seeking long-lasting, beautiful nails. Book an Appointment!"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/nail-geleration "
        />
      </Helmet>
      <NavBg />
      <NailGelerationHead />
      <NailGelerationProcess />
      <NailGelerationBenefits />
      <NailGelerationTrend />
      <NailGelerationMaintain />
      <NailGelerationCustomer />  
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WhatsApp />
      <LastComp />
    </div>
  );
};

export default NailGeleration;