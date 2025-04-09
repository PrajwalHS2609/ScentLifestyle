import React from "react";
import { Helmet } from "react-helmet";
import ChristmasOfferImg from "./ChristmasOfferImg";
import ChristmasOfferHead from "./ChristmasOfferHead";
import HairServImg from "../../HairBotox/HairServImg";
import GlowingSkin from "./GlowingSkin";
import NailCare from "./NailCare";
import HairCare from "./HairCare";
import MakeupTips from "./MakeupTips";
import MensGroomingTips from "./MensGroomingTips";
import FitnessAndBodyCare from "./FitnessAndBodyCare";
import glowingImg from "./../../../../../Images/Blog/Christmas_offer/Achieve Glowing Skin for the Holidays.png";
import nailCareImg from "./../../../../../Images/Blog/Christmas_offer/Nail Care_ Festive and Fun Nails.png";
import hairCareImg from "./../../../../../Images/Blog/Christmas_offer/Hair Care_ Get Ready for the Holiday Season.png";
import makeUpTipsImg from "./../../../../../Images/Blog/Christmas_offer/Makeup Tips_ Get the Perfect Holiday Look.png";
import mensGroomingTips from "./../../../../../Images/Blog/Christmas_offer/Men’s Christmas Grooming Tips.png";
import fitnessAndBodyCareTips from "./../../../../../Images/Blog/Christmas_offer/Fitness and Body Care for the Holidays.png";
import BlogSideBar from "../../../BlogSideBar/BlogSideBar";

const ChristmasOffer = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Get Festive Ready: Top Christmas Beauty Tips for Women & Men
        </title>
        <meta
          name="description"
          content="Get Festive Ready: Top Christmas Beauty Tips for Women & Men. From glowing skin to perfect nails, achieving that festive-ready look doesn’t have to be overwhelming"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/get-festive-ready-top-christmas-beauty-tips-for-women-and-men"
        />
      </Helmet>
      <div className="blog-container">
        <div className="blog-wrapper1">
          <ChristmasOfferImg />
          <ChristmasOfferHead />
          <br />
          <HairServImg hairBotoxImg={glowingImg} />
          <GlowingSkin />
          <br />
          <HairServImg hairBotoxImg={nailCareImg} />
          <NailCare />
          <br />
          <HairServImg hairBotoxImg={hairCareImg} />
          <HairCare />
          <br />
          <HairServImg hairBotoxImg={makeUpTipsImg} />
          <MakeupTips />
          <br />
          <HairServImg hairBotoxImg={mensGroomingTips} />
          <MensGroomingTips />
          <br />
          <HairServImg hairBotoxImg={fitnessAndBodyCareTips} />
          <FitnessAndBodyCare />
        </div>
        <div className="blog-wrapper2">
        <BlogSideBar/>

        </div>
      </div>
    </div>
  );
};

export default ChristmasOffer;
