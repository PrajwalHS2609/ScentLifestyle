import React from "react";
import InnerNavi from "../../../../InnerServicePage/InnerNavi/InnerNavi";
import NavBg from "../../../../NavBg/NavBg";
import { Helmet } from "react-helmet";
import SpaDayHead from "./SpaDayHead";
import SpadayStress from "./SpadayStress";
import SpaDayBenefits from "./SpaDayBenefits";
import SpaDayImg from "./SpaDayImg";
import SpaDayEnhanced from "./SpaDayEnhanced";
import SpaDaySleep from "./SpaDaySleep";
import SpaDayIncorporating from "./SpaDayIncorporating ";
import spaDayEnhance from "./../../../../../Images/Blog/How a Spa Day/Enhanced Mood and Emotional Well-Being.png";
import spaDayBenefits from "./../../../../../Images/Blog/How a Spa Day/The Social and Psychological Benefits.png";
import spaDayStress from "./../../../../../Images/Blog/How a Spa Day/Stress Relief Through Spa Treatments.png";
import HairServImg from "../../HairBotox/HairServImg";
import BlogSideBar from "../../../BlogSideBar/BlogSideBar";

const SpaDay = () => {
  return (
    <div className="">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>How a Spa Day Can Boost Your Mental Health? </title>
        <meta
          name="description"
          content="How a Spa Day Can Boost Your Mental Health? At SCENT Salon & Spa, we understand the profound impact a spa experience can have on your overall well-being."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/how-a-spa-day-can-boost-your-mental-health"
        />
      </Helmet>
      <NavBg />
      <div className="blog-container">
        <div className="blog-wrapper1">
          <SpaDayImg />
          <InnerNavi link="/blog" service="Blog" currService="Spa Blog" />
          <SpaDayHead />
          <HairServImg hairBotoxImg={spaDayStress} />
          <SpadayStress />
          <HairServImg hairBotoxImg={spaDayEnhance} />
          <SpaDayEnhanced />
          <SpaDaySleep />
          <HairServImg hairBotoxImg={spaDayBenefits} />
          <SpaDayBenefits />
          <SpaDayIncorporating />
        </div>
        <div className="blog-wrapper2">
        <BlogSideBar/>
        </div>
      </div>
    </div>
  );
};

export default SpaDay;
