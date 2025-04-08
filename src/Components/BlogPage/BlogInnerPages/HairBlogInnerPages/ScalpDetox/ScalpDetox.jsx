import React from "react";
import { Helmet } from "react-helmet";
import HairServImg from "../../HairBotox/HairServImg";
import ScalpDetoxImg from "./ScalpDetoxImg";
import ScalpDetoxHead from "./ScalpDetoxHead";
import ScalpDetoxWhat from "./ScalpDetoxWhat";
import ScalpDetoxBenefits from "./ScalpDetoxBenefits";
import ScalpDetoxHow from "./ScalpDetoxHow";
import ScalpDetoxBest from "./ScalpDetoxBest";
import ScalpDetoxTherapy from "./ScalpDetoxTherapy";
import ScalpDetoxHowOften from "./ScalpDetoxHowOften";

import scalpDetoxBestWhat from "./../../../../../Images/Blog/Scalp_Detox/What is Scalp Detox.png";
import scalpDetoxHowOften from "./../../../../../Images/Blog/Scalp_Detox/How Often Should You Detox Your Scalp.png";
import scalpDetoxBest from "./../../../../../Images/Blog/Scalp_Detox/Best Products for Scalp Detox – Beauty Garage Scalp Sense Range.png";
import scalpDetoxHow from "./../../../../../Images/Blog/Scalp_Detox/How Can Hair Scalp Massages Aid in Scalp Detox.png";
import scalpDetoxBenefits from "./../../../../../Images/Blog/Scalp_Detox/The Benefits of Scalp Detox.png";
import scalpDetoxTherapy from "./../../../../../Images/Blog/Scalp_Detox/Hair Scalp Therapy_ Long-Term Benefits.png";
import BlogPost from "../../../BlogPost/BlogPost";
import BlogCategories from "../../../BlogCategories/BlogCategories";

const ScalpDetox = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Scalp Detox - Why It’s the Secret to Gorgeous Hair? </title>
        <meta
          name="description"
          content="Scalp Detox - Why It's the Secret to Gorgeous Hair?  When it comes to achieving long, thick, and shiny hair, most people focus on the quality of the products they use on their hair strands."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/scalp-detox-why-its-the-secret-to-gorgeous-hair"
        />
      </Helmet>
      <div className="blog-container">
        <div className="blog-wrapper1">
          <ScalpDetoxImg />
          <ScalpDetoxHead />
          <br />
          <HairServImg hairBotoxImg={scalpDetoxBestWhat} />
          <ScalpDetoxWhat />
          <br />
          <HairServImg hairBotoxImg={scalpDetoxBenefits} />
          <ScalpDetoxBenefits />
          <br />
          <HairServImg hairBotoxImg={scalpDetoxHow} />
          <ScalpDetoxHow />
          <br />
          <HairServImg hairBotoxImg={scalpDetoxBest} />
          <ScalpDetoxBest />
          <br />
          <HairServImg hairBotoxImg={scalpDetoxTherapy} />
          <ScalpDetoxTherapy />
          <br />
          <HairServImg hairBotoxImg={scalpDetoxHowOften} />
          <ScalpDetoxHowOften />
        </div>
        <div className="blog-wrapper2">
          <BlogPost />
          <BlogCategories />
        </div>
      </div>
    </div>
  );
};

export default ScalpDetox;
