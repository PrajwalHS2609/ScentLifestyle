import React from "react";
import BodyWaxingMythImg from "./BodyWaxingMythImg";
import BodyWaxingMythHead from "./BodyWaxingMythHead";
import BodyWaxingMythAbout from "./BodyWaxingMythAbout";
import BodyWaxingMythTypes from "./BodyWaxingMythTypes";
import BodyWaxingMythTips from "./BodyWaxingMythTips";
import HairServImg from "../../HairBotox/HairServImg";
import BodyWaxingMythFacts from "./BodyWaxingMythFacts";
import bodyWaxingMythAbout from "./../../../../../Images/Blog/Body_waxing_myth/Myths about Body Waxing.png";
import bodyWaxingMythTypes from "./../../../../../Images/Blog/Body_waxing_myth/Types of Body Waxing.png";
import bodyWaxingMythFacts from "./../../../../../Images/Blog/Body_waxing_myth/Facts About Body Waxing.png";
import bodyWaxingMythTips from "./../../../../../Images/Blog/Body_waxing_myth/Tips for a Better Waxing Experience.png";
import { Helmet } from "react-helmet";
import BlogCategories from "../../../BlogCategories/BlogCategories";
import BlogPost from "../../../BlogPost/BlogPost";

const BodyWaxingMyth = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>The Truth about Body Waxing: Myths, Facts, and Tips</title>
        <meta
          name="description"
          content="The Truth About Body Waxing: Myths, Facts, and Tips. Whether you're considering hand waxing, leg waxing, or even Brazilian waxing, read on to learn everything you need to know."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/the-truth-about-body-waxing-myths-facts-and-tips"
        />
      </Helmet>
      <div className="blog-container">
        <div className="blog-wrapper1">
          <BodyWaxingMythImg />
          <BodyWaxingMythHead />
          <br />
          <HairServImg hairBotoxImg={bodyWaxingMythAbout} />
          <BodyWaxingMythAbout />
          <br />
          <HairServImg hairBotoxImg={bodyWaxingMythFacts} />
          <BodyWaxingMythFacts />
          <br />
          <HairServImg hairBotoxImg={bodyWaxingMythTypes} />
          <BodyWaxingMythTypes />
          <br />
          <HairServImg hairBotoxImg={bodyWaxingMythTips} />
          <BodyWaxingMythTips />
        </div>
        <div className="blog-wrapper2">
          <BlogPost />
          <BlogCategories />
        </div>{" "}
      </div>
    </div>
  );
};

export default BodyWaxingMyth;
