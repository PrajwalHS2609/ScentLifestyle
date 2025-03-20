import React from "react";
import { Helmet } from "react-helmet";
import TopNailArtsImg from "./TopNailArtsImg";
import TopNailArtsHead from "./TopNailArtsHead";
import HairServImg from "../../HairBotox/HairServImg";
import ChromeNails from "./ChromeNails";
import AuraNails from "./AuraNails";
import GlazedDonut from "./GlazedDonut";
import ValvetNails from "./ValvetNails";
import FrenchTips from "./FrenchTips";
import ThreeDNailArt from "./ThreeDNailArt";
import AbstractNailArt from "./AbstractNailArt";
import HolographicNail from "./HolographicNail";
import JellyNails from "./JellyNails";
import FlowerNail from "./FlowerNail";
import abstractImg from "./../../../../../Images/Blog/Top_10_Nail_Art/Abstract & Minimalist Nail Art.png";
import chromeImg from "./../../../../../Images/Blog/Top_10_Nail_Art/Chrome Nails_ The Ultimate Shine.png";
import frenchImg from "./../../../../../Images/Blog/Top_10_Nail_Art/French Tips Reinvented.png";

const TopNailArts = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Top 10 Nail Art Trends You Need to Try This Year! </title>
        <meta
          name="description"
          content="Top 10 Nail Art Trends You Need to Try This Year! Nail art is constantly evolving, and every year brings a fresh wave of creative, bold, and elegant designs"
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/top-10-nail-art-trends-you-need-to-try-this-year"
        />
      </Helmet>
      <div className="hairTrimContent">
        <TopNailArtsImg />
        <TopNailArtsHead />
        <br />
        <HairServImg hairBotoxImg={chromeImg} />
        <ChromeNails />
        <br />
        <AuraNails />
        <br />
        <GlazedDonut />
        <br />
        <ValvetNails />
        <br />
        <HairServImg hairBotoxImg={frenchImg} />
        <FrenchTips />
        <br />
        <ThreeDNailArt />
        <br />
        <HairServImg hairBotoxImg={abstractImg} />
        <AbstractNailArt />
        <br />
        <HolographicNail />
        <br />
        <JellyNails />
        <br />
        <FlowerNail />
      </div>
    </div>
  );
};

export default TopNailArts;
