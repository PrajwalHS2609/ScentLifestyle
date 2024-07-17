import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../NavBg/NavBg";
import ClassicManicureHead from "./ClassicManicureHead";
import ClassicManicureWhy from "./ClassicManicureWhy";
import ClassicManiBenefits from "./ClassicManicureBenefits";
import ClassicManicureProcess from "./ClassicManicureProcess";
import ClassicManiMaintain from "./ClassicManicureMaintain";
import ClassicManiBook from "./ClassicManicureBook";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import Partners from "../../HomePage/Partners/Partners";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import LastComp from "../../LastComp/LastComp";

const ClassicManicurePage = () => {
  return (
    <div className="nailExtensionPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Classic Manicure in Bangalore | Best Manicure Treatment Near Me
        </title>
        <meta
          name="description"
          content="SCENT Classic Manicure in Bangalore, service combines expert care with luxurious pampering to deliver results that are both beautiful and long-lasting."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/classic-manicure"
        />
      </Helmet>
      <NavBg />
      <ClassicManicureHead/>
      <ClassicManicureWhy/>
      <ClassicManiBenefits/>
      <ClassicManicureProcess/>
      <ClassicManiMaintain/>
      <ClassicManiBook/>
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <LastComp />
    </div>
  );
};

export default ClassicManicurePage;
