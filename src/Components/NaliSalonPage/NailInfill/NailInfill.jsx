import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import NailInfillHead from "./NailInfillHead";
import NailInfillProcess from "./NailInfillProcess";
import NailInfillBenefits from "./NailInfillBenefits";
import NailInfillMaintain from "./NailInfillMaintain";
import NailInfillCustomer from "./NailInfillCustomer";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import NailInfillTrend from "./NailInfillTrend";
import NailInfillImg from "./NailInfillImg";

const NailInfill = () => {
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
      <NailInfillImg />
      <NailInfillHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <NailInfillProcess />
      <NailInfillBenefits />
      <NailInfillTrend />
      <NailInfillMaintain />
      <NailInfillCustomer />
            
    </div>
  );
};

export default NailInfill;
