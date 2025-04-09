import React from "react";
import { Helmet } from "react-helmet";
import AromaBodySpaHead from "./AromaBodySpaHead";
import AromaBodySpaBenefits from "./AromaBodySpaBenefits";
import AromaBodySpaProcess from "./AromaBodySpaProcess";
import AromaBodySpaChoosing from "./AromaBodySpaChoosing";
import AromaBodySpaHow from "./AromaBodySpaHow";
import AromaBodySpaTips from "./AromaBodySpaTips";
import HairServImg from "../../HairBotox/HairServImg";
import aromaBodySpaBenefits from "./../../../../../Images/Blog/Aroma_Body_Spa/The Benefits of an Aroma Body Spa.png";
import aromaBodySpaProcess from "./../../../../../Images/Blog/Aroma_Body_Spa/The Process of an Aroma Body Spa.png";
import aromaBodySpaTips from "./../../../../../Images/Blog/Aroma_Body_Spa/Tips for an Enhanced Spa Experience.png";
import AromaBodySpaImg from "./AromaBodySpaImg";
import BlogSideBar from "../../../BlogSideBar/BlogSideBar";

const AromaBodySpa = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Aroma Body Spa: Rejuvenate Your Senses with the Power of Essential
          Oils
        </title>
        <meta
          name="description"
          content="Aroma Body Spa: Rejuvenate Your Senses with the Power of Essential Oils. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/aroma-body-spa-rejuvenate-your-senses-with-the-power-of-essential-oils"
        />
      </Helmet>
      <div className="blog-container">
        <div className="blog-wrapper1">
          <AromaBodySpaImg />
          <AromaBodySpaHead />
          <br />
          <HairServImg hairBotoxImg={aromaBodySpaBenefits} />
          <AromaBodySpaBenefits />
          <br />
          <HairServImg hairBotoxImg={aromaBodySpaProcess} />
          <AromaBodySpaProcess />
          <br />
          <AromaBodySpaChoosing />
          <br />
          <AromaBodySpaHow />
          <br />
          <HairServImg hairBotoxImg={aromaBodySpaTips} />
          <AromaBodySpaTips />
          <br />
        </div>
        <div className="blog-wrapper2">
          <BlogSideBar />
        </div>
      </div>
    </div>
  );
};

export default AromaBodySpa;
