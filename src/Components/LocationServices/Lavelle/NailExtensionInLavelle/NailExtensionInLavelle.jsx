import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import NailExtensionInLavelleHead from "./NailExtensionInLavelleHead";
import NailExtensionInLavelleFocus from "./NailExtensionInLavelleFocus";
import NailExtensionInLavelleDesign from "./NailExtensionInLavelleDesign";
import NailExtensionInLavelleCommitment from "./NailExtensionInLavelleCommitment";
import NailExtensionInLavelleMaintain from "./NailExtensionInLavelleMaintain";
import NailExtensionInLavelleAfford from "./NailExtensionInLavelleAfford";
import NailExtensionInLavelleWhy from "./NailExtensionInLavelleWhy";
import NailExtensionInLavelleBook from "./NailExtensionInLavelleBook";
import nailExtensionLavelleImg from "./../../../../Images/NailSalonInnerPages/Nail Extension.png";
import LocationServicesImg from "../../LocationServicesImg";

const NailExtensionInLavelle = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Nail Extensions near Lavelle Road | Nail Extension Price in Lavelle
          Road
        </title>
        <meta
          name="description"
          content="Nail Extensions near Lavelle Road. We understand that your nails are an essential part of your style, and they deserve to be pampered and enhanced. Call Now! "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/nail-extensions-near-lavelle-road"
        />
      </Helmet>
      <LocationServicesImg
        img={nailExtensionLavelleImg}
        alt="nailExtensionLavelleImg"
      />
      <InnerNavi
        link="/nail-salon"
        service="Nail Salon"
        currService="Nail Extension in Lavelle"
      />
      <NailExtensionInLavelleHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <NailExtensionInLavelleFocus />
      <NailExtensionInLavelleDesign />
      <NailExtensionInLavelleCommitment />
      <NailExtensionInLavelleMaintain />
      <NailExtensionInLavelleAfford />
      <NailExtensionInLavelleWhy />
      <NailExtensionInLavelleBook />
            
    </div>
  );
};

export default NailExtensionInLavelle;
