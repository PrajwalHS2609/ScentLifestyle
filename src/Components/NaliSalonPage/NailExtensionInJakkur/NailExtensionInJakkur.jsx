import React from "react";
import { Helmet } from "react-helmet";
import HairSalonInMeadowsImg from "../../HairServicePage/HairSalonInMeadows/HairSalonInMeadowsImg/HairSalonInMeadowsImg";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import nailExtensionJakkurImg from "./../../../Images/NailSalonInnerPages/Nail Extension.png";
import NailExtensionInJakkurHead from "./NailExtensionInJakkurHead";
import NailExtensionInJakkurExpertise from "./NailExtensionInJakkurExpertise";
import NailExtensionInJakkurHigh from "./NailExtensionInJakkurHigh";
import NailExtensionInJakkurDesign from "./NailExtensionInJakkurDesign";
import NailExtensionInJakkurXp from "./NailExtensionInJakkurXp";
import NailExtensionInJakkurMaintain from "./NailExtensionInJakkurMaintain";
import NailExtensionInJakkurLuxury from "./NailExtensionInJakkurLuxury";
import NailExtensionInJakkurBook from "./NailExtensionInJakkurBook";
import NailExtensionInJakkurWhy from "./NailExtensionInJakkurWhy";

const NailExtensionInJakkur = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
        Nail Extensions near Jakkur | Nail Extension Price in Jakkur 
        </title>
        <meta
          name="description"
          content="Nail Extensions near Jakkur. We understand that your nails are an essential part of your style, and they deserve to be pampered and enhanced. Call Now!"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/nail-extensions-near-jakkur"
        />
      </Helmet>
      <HairSalonInMeadowsImg
        img={nailExtensionJakkurImg}
        alt={nailExtensionJakkurImg}
      />
      <InnerNavi
        link="/nail-salon"
        service="Nail Salon"
        currService="Nail Extension in Jakkur"
      />
      <NailExtensionInJakkurHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <NailExtensionInJakkurExpertise />
      <NailExtensionInJakkurHigh />
      <NailExtensionInJakkurDesign />
      <NailExtensionInJakkurXp />
      <NailExtensionInJakkurMaintain />
      <NailExtensionInJakkurLuxury />
      <NailExtensionInJakkurWhy />
      <NailExtensionInJakkurBook />
            
    </div>
  );
};

export default NailExtensionInJakkur;
