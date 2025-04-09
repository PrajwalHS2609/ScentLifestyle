import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../../../NavBg/NavBg";
import BrazilianWaxingImg from "./BrazilianWaxingImg";
import BrazilianWaxingHead from "./BrazilianWaxingHead";
import BrazilianWaxingWhat from "./BrazilianWaxingWhat";
import BrazilianWaxingPrepare from "./BrazilianWaxingPrepare";
import BrazilianWaxingTips from "./BrazilianWaxingTips";
import BrazilianWaxingOften from "./BrazilianWaxingOften";
import BrazilianWaxingBenefits from "./BrazilianWaxingBenefits";
import BrazilianWaxingRight from "./BrazilianWaxingRight";
import BrazilianWaxingAtScent from "./BrazilianWaxingAtScent";
import BrazilianWaxingPain from "./BrazilianWaxingPain";
import BrazilianWaxingMisconception from "./BrazilianWaxingMisconception";
import BrazilianWaxingWhatImg from "./../../../../../Images/Blog/Everything_About_Brazilian_Waxing/What is Brazilian Waxing.png";
import BrazilianWaxingRightImg from "./../../../../../Images/Blog/Everything_About_Brazilian_Waxing/Is Brazilian Waxing Right for You.png";
import BrazilianWaxingPainImg from "./../../../../../Images/Blog/Everything_About_Brazilian_Waxing/Brazilian Waxing_ Pain Level and Comfort.png";
import BrazilianWaxingOftenImg from "./../../../../../Images/Blog/Everything_About_Brazilian_Waxing/How Often Should You Get Brazilian Waxing.png";
import HairServImg from "../../HairBotox/HairServImg";
import InnerNavi from "../../../../InnerServicePage/InnerNavi/InnerNavi";
import BlogSideBar from "../../../BlogSideBar/BlogSideBar";

const BrazilianWaxing = () => {
  return (
    <div className="">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Everything You Need to Know About Brazilian Waxing</title>
        <meta
          name="description"
          content="Everything You Need to Know About Brazilian Waxing! Most popular hair removal treatments across the globe, renowned for its ability to leave skin smooth and hair-free for weeks at a time."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/everything-you-need-to-know-about-brazilian-waxing "
        />
      </Helmet>
      <NavBg />
      <div className="blog-container">
        <div className="blog-wrapper1">
          <BrazilianWaxingImg />
          <InnerNavi
            link="/blog"
            service="Blog"
            currService="Beauty Essentials Blog"
          />
          <BrazilianWaxingHead />
          <HairServImg hairBotoxImg={BrazilianWaxingWhatImg} />
          <BrazilianWaxingWhat />
          <BrazilianWaxingPrepare />
          <HairServImg hairBotoxImg={BrazilianWaxingPainImg} />
          <BrazilianWaxingPain />
          <BrazilianWaxingTips />
          <HairServImg hairBotoxImg={BrazilianWaxingOftenImg} />
          <BrazilianWaxingOften />
          <BrazilianWaxingBenefits />
          <BrazilianWaxingMisconception />
          <HairServImg hairBotoxImg={BrazilianWaxingRightImg} />
          <BrazilianWaxingRight />
          <BrazilianWaxingAtScent />
        </div>
        <div className="blog-wrapper2">
          <BlogSideBar />
        </div>
      </div>
    </div>
  );
};

export default BrazilianWaxing;
