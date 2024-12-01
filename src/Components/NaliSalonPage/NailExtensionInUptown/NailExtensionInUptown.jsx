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
import NailExtensionInUptownHead from "./NailExtensionInUptownHead";
import NailExtensionInUptownExpertise from "./NailExtensionInUptownExpertise";
import NailExtensionInUptownDesign from "./NailExtensionInUptownDesign";
import NailExtensionInUptownHygienic from "./NailExtensionInUptownHygienic";
import NailExtensionInUptownHow from "./NailExtensionInUptownHow";
import NailExtensionInUptownAfford from "./NailExtensionInUptownAfford";
import NailExtensionInUptownWhy from "./NailExtensionInUptownWhy";
import NailExtensionInUptownBook from "./NailExtensionInUptownBook";
import nailExtensionUptownImg from "./../../../Images/NailSalonInnerPages/Nail Extension.png";

const NailExtensionInUptown = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Nail Extensions near Uptown Whitefield | Nail Extension Price in
          Uptown Whitefield
        </title>
        <meta
          name="description"
          content="Nail Extensions near Uptown Whitefield. We understand that your nails are an essential part of your style, and they deserve to be pampered and enhanced. Call Now!"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/nail-extensions-near-uptown-whitefield"
        />
      </Helmet>
      <HairSalonInMeadowsImg
        img={nailExtensionUptownImg}
        alt={nailExtensionUptownImg}
      />
      <InnerNavi
        link="/nail-salon"
        service="Nail Salon"
        currService="Nail Extension in Uptown"
      />
      <NailExtensionInUptownHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <NailExtensionInUptownExpertise />
      <NailExtensionInUptownDesign />
      <NailExtensionInUptownHygienic />
      <NailExtensionInUptownHow />
      <NailExtensionInUptownAfford />
      <NailExtensionInUptownWhy />
      <NailExtensionInUptownBook />
            
    </div>
  );
};

export default NailExtensionInUptown;
