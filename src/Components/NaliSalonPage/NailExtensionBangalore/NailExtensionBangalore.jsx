import React from "react";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import HelpNearYou from "../../Help/HelpNearYou";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import Partners from "../../HomePage/Partners/Partners";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Members from "../../HomePage/Members/Members";
import { Helmet } from "react-helmet";
import NailExtensionBangaloreVid from "./NailExtensionBangaloreVid";
import NailExtensionBangaloreHead from "./NailExtensionBangaloreHead";
import NailExtensionBangaloreTypes from "./NailExtensionBangaloreTypes";
import NailExtensionBangaloreBenefits from "./NailExtensionBangaloreBenefits";
import NailExtensionBangaloreProcess from "./NailExtensionBangaloreProcess";
import NailExtensionBangaloreTrend from "./NailExtensionBangaloreTrend";
import NailExtensionBangaloreAfford from "./NailExtensionBangaloreAfford";
import NailExtensionBangaloreMaintain from "./NailExtensionBangaloreMaintain";
import NailExtensionBangaloreBook from "./NailExtensionBangaloreBook";

const NailExtensionBangalore = () => {
  return (
    <div className="nailExtensionPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Nail Extensions in Bangalore | Nail Extension Price in Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Nail Extensions in Bangalore. SCENT salon specializes in providing exceptional nail extension services that are crafted to perfection. Call Now!"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/nail-extensions-in-bangalore"
        />
      </Helmet>
      <NailExtensionBangaloreVid />
      <NailExtensionBangaloreHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <NailExtensionBangaloreTypes />
      <NailExtensionBangaloreBenefits />
      <NailExtensionBangaloreProcess />
      <NailExtensionBangaloreTrend />
      <NailExtensionBangaloreAfford />
      <NailExtensionBangaloreMaintain />
      <NailExtensionBangaloreBook />
            
    </div>
  );
};

export default NailExtensionBangalore;
