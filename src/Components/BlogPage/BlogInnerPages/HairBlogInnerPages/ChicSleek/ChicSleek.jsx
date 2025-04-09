import React from "react";
import { Helmet } from "react-helmet";
import NavBg from "../../../../NavBg/NavBg";
import InnerNavi from "../../../../InnerServicePage/InnerNavi/InnerNavi";
import ChicSleekHead from "./ChicSleekHead";
import ChicSleekPower from "./ChicSleekPower";
import ChicSleekBob from "./ChicSleekBob";
import ChicSleekPixie from "./ChicSleekPixie";
import ChicSleekEffortless from "./ChicSleekEffortless";
import ChicSleekShag from "./ChicSleekShag";
import ChicSleekLob from "./ChicSleekLob";
import ChicSleekBlunt from "./ChicSleekBlunt";
import ChicSleekCurly from "./ChicSleekCurly";
import ChicSleekImp from "./ChicSleekImp";
import ChicSleekMaintain from "./ChicSleekMaintain";
import HairServImg from "../../HairBotox/HairServImg";
import ChicSleekBluntImg from "./../../../../../Images/Blog/Chic & Sleek/The Classic Elegance of the Blunt Cut.png";
import ChicSleekPixieImg from "./../../../../../Images/Blog/Chic & Sleek/Bold and Beautiful_ The Pixie Cut.png";
import ChicSleekCurlyImg from "./../../../../../Images/Blog/Chic & Sleek/Embracing Your Curls_ The Curly Cut.png";
import ChicSleekEffortlessImg from "./../../../../../Images/Blog/Chic & Sleek/The Effortless Appeal of Long Layers.png";
import ChicSleekShagImg from "./../../../../../Images/Blog/Chic & Sleek/The Modern Shag_ Retro Meets Contemporary.png";
import ChicSleekPowerImg from "./../../../../../Images/Blog/Chic & Sleek/The Power of a Good Haircut.png";
import ChicSleekLobImg from "./../../../../../Images/Blog/Chic & Sleek/The Versatility of the Lob.png";
import ChicSleekBobImg from "./../../../../../Images/Blog/Chic & Sleek/Chic and Timeless_ The Bob.png";
import ChicSleekMaintainImg from "./../../../../../Images/Blog/Chic & Sleek/Maintaining Your Chic & Sleek Haircut.png";
import ChicSleekBannerImg from "./ChicSleekBannerImg";
import BlogSideBar from "../../../BlogSideBar/BlogSideBar";

const ChicSleek = () => {
  return (
    <div className="">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Chic & Sleek - Women’s Haircuts That Define You </title>
        <meta
          name="description"
          content="Chic & Sleek - Women’s Haircuts That Define You. A well-chosen haircut not only complements your features but also defines who you are—whether it’s chic and elegant or edgy and modern."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/chic-and-sleek-womens-haircuts-that-define-you"
        />
      </Helmet>
      <NavBg />
      <div className="blog-container">
        <div className="blog-wrapper1">
          <ChicSleekBannerImg />
          <InnerNavi link="/blog" service="Blog" currService="Hair blog" />
          <ChicSleekHead />
          <HairServImg hairBotoxImg={ChicSleekPowerImg} />
          <ChicSleekPower />
          <HairServImg hairBotoxImg={ChicSleekBobImg} />
          <ChicSleekBob />
          <HairServImg hairBotoxImg={ChicSleekPixieImg} />
          <ChicSleekPixie />
          <HairServImg hairBotoxImg={ChicSleekEffortlessImg} />
          <ChicSleekEffortless />
          <HairServImg hairBotoxImg={ChicSleekShagImg} />
          <ChicSleekShag />
          <HairServImg hairBotoxImg={ChicSleekLobImg} />
          <ChicSleekLob />
          <HairServImg hairBotoxImg={ChicSleekBluntImg} />
          <ChicSleekBlunt />
          <HairServImg hairBotoxImg={ChicSleekCurlyImg} />
          <ChicSleekCurly />
          <ChicSleekImp />
          <HairServImg hairBotoxImg={ChicSleekMaintainImg} />
          <ChicSleekMaintain />
        </div>
        <div className="blog-wrapper2">
          <BlogSideBar />
        </div>{" "}
      </div>
    </div>
  );
};

export default ChicSleek;
