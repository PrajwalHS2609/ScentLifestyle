import React from "react";
import MulletHairCutImg from "./MulletHairCutImg";
import MulletHairCutHead from "./MulletHairCutHead";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import MulletHairCutWhat from "./MulletHairCutWhat";
import MulletHairCutWhy from "./MulletHairCutWhy";
import MulletHairCutHow from "./MulletHairCutHow";
import MulletHairCutDestination from "./MulletHairCutDestination";
import MulletHairCutMaintain from "./MulletHairCutMaintain";
import MulletHairCutBottom from "./MulletHairCutBottom";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import { Helmet } from "react-helmet";

const MulletHairCut = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Modern Mullet Haircut for Women in Bangalore </title>
        <meta
          name="description"
          content="Modern Mullet Haircut for Women in Bangalore is making waves, and it's the perfect choice for those looking to make a bold statement while keeping things chic and modern. Call Now! "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/modern-mullet-haircut-for-women-in-bangalore"
        />
      </Helmet>
      <MulletHairCutImg />
      <InnerNavi
        link={"/hair-salon"}
        service="Hair Service"
        currService="Modern Mullet Haircut"
      />
      <MulletHairCutHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <MulletHairCutWhat />
      <MulletHairCutWhy />
      <MulletHairCutHow />
      <MulletHairCutDestination />
      <MulletHairCutMaintain />
      <MulletHairCutBottom />
            
    </div>
  );
};

export default MulletHairCut;
