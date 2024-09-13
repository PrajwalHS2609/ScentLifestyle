import React from "react";
import { Helmet } from "react-helmet";
import HowOlaplexImg from "./HowOlaplexImg";
import olplexImpact from "./../../../../../Images/Blog/How Olaplex Helps/The Impact of Coloring on Hair Health.png";
import olaplexWhat from "./../../../../../Images/Blog/How Olaplex Helps/What Makes Olaplex Unique.png";
import OlaplexWhy from "./../../../../../Images/Blog/How Olaplex Helps/Why Choose Olaplex for Maintaining Healthy Hair After Coloring.png";
import olaplexInvest from "./../../../../../Images/Blog/How Olaplex Helps/Invest in Your Hair with Olaplex.png";
import HairServImg from "../../HairBotox/HairServImg";
import HowOlaplexHead from "./HowOlaplexHead";
import HowOlaplexImpact from "./HowOlaplexImpact";
import HowOlaplexWhat from "./HowOlaplexWhat";
import HowOlaplexWhy from "./HowOlaplexWhy";
import HowOlaplexInvest from "./HowOlaplexInvest";
import HowOlaplexMaintain from "./HowOlaplexMaintain";

const HowOlaplex = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>How Olaplex helps maintain healthy Hair after coloring? </title>
        <meta
          name="description"
          content="How Olaplex helps maintain Healthy Hair after coloring? Many people experience dryness, damage, or even breakage after coloring their hair. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/how-olaplex-helps-maintain-healthy-hair-after-coloring"
        />
      </Helmet>
      <div className="hairTrimContent">
        <HowOlaplexImg />
        <HowOlaplexHead />
        <HairServImg hairBotoxImg={olplexImpact} />
        <HowOlaplexImpact />
        <HairServImg hairBotoxImg={olaplexWhat} />
        <HowOlaplexWhat />
        <HowOlaplexMaintain />
        <HairServImg hairBotoxImg={OlaplexWhy} />
        <HowOlaplexWhy />
        <HairServImg hairBotoxImg={olaplexInvest} />
        <HowOlaplexInvest />
      </div>
    </div>
  );
};

export default HowOlaplex;
