import React from "react";
import { Helmet } from "react-helmet";
import nailExtensionMeadowsImg from "./../../../../Images/NailSalonInnerPages/Nail Extension.png";
import NailExtensionInMeadowsHead from "./NailExtensionInMeadowsHead";
import InnerNavi from "../../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../../HomePage/Members/Members";
import OurSalon from "../../../HomePage/OurSalon/OurSalon";
import Partners from "../../../HomePage/Partners/Partners";
import InstaFeed from "../../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../../Help/HelpNearYou";
import TextLocReviews from "../../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../../MainServicePages/ServiceWhy/ServiceWhy";
import NailExtensionInMeadowsTypes from "./NailExtensionInMeadowsTypes";
import NailExtensionInMeadowsBenefits from "./NailExtensionInMeadowsBenefits";
import NailExtensionInMeadowsWhy from "./NailExtensionInMeadowsWhy";
import NailExtensionInMeadowsBook from "./NailExtensionInMeadowsBook";
import NailLocationImg from "../NailLocationImg";

const NailExtensionInMeadows = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Nail Extensions near Meadows Whitefield | Nail Extension Price in
          Meadows Whitefield
        </title>
        <meta
          name="description"
          content="Nail Extensions near Meadows Whitefield. We understand that your nails are an essential part of your style, and they deserve to be pampered and enhanced. Call Now! "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/nail-extensions-near-meadows-whitefield"
        />
      </Helmet>
      <NailLocationImg
        img={nailExtensionMeadowsImg}
        alt={nailExtensionMeadowsImg}
      />
      <InnerNavi
        link="/nail-salon"
        service="Nail Salon"
        currService="Nail Extension in Meadows"
      />
      <NailExtensionInMeadowsHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <NailExtensionInMeadowsTypes />
      <NailExtensionInMeadowsBenefits />
      <NailExtensionInMeadowsWhy />
      <NailExtensionInMeadowsBook />
            
    </div>
  );
};

export default NailExtensionInMeadows;
