import React from "react";
import { Helmet } from "react-helmet";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";
import OctopusHairCutHead from "./OctopusHairCutHead";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import OctopusHairCutWhy from "./OctopusHairCutWhy";
import OctopusHairCutHow from "./OctopusHairCutHow";
import OctopusHairCutWhyChoose from "./OctopusHairCutWhyChoose";
import OctopusHairCutBottom from "./OctopusHairCutBottom";
import OctopusHairCutImg from "./OctopusHairCutImg";

const OctopusHairCut = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Octopus Hair Cut for Women in Bangalore </title>
        <meta
          name="description"
          content="Octopus Hair Cut for Women in Bangalore is making waves, and it's the perfect choice for those looking to make a bold statement while keeping things chic and modern. Call Now! "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/octopus-haircut-for-women-in-bangalore"
        />
      </Helmet>
      <OctopusHairCutImg />
      <InnerNavi
        link={"/hair-salon"}
        service="Hair Service"
        currService="Octopus Haircut"
      />
      <OctopusHairCutHead />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <OctopusHairCutWhy />
      <OctopusHairCutHow />
      <OctopusHairCutWhyChoose />
      <OctopusHairCutBottom />
            
    </div>
  );
};

export default OctopusHairCut;
