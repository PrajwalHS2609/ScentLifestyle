import React from "react";
import { Helmet } from "react-helmet";
import GlamorousImg from "./GlamorousImg";
import GlamorousHead from "./GlamorousHead";
import InnerNavi from "../../../../InnerServicePage/InnerNavi/InnerNavi";
import GlamorousPony from "./GlamorousPony";
import GlamorousBun from "./GlamorousBun";
import GlamorousTwist from "./GlamorousTwist";
import GlamorousWaves from "./GlamorousWaves";
import GlamorousCrown from "./GlamorousCrown";
import GlamorousFinal from "./GlamorousFinal";
import HairServImg from "../../HairBotox/HairServImg";
import glamorousPony from "./../../../../../Images/Blog/Get Ready for a Glamorous Night/The Sleek Low Ponytail.png";
import glamorousBun from "./../../../../../Images/Blog/Get Ready for a Glamorous Night/The Messy Bun with a Twist.png";
import glamorousTwist from "./../../../../../Images/Blog/Get Ready for a Glamorous Night/The Half-Up, Half-Down Twist.png";
import glamorousWaves from "./../../../../../Images/Blog/Get Ready for a Glamorous Night/The Glamorous Hollywood Waves.png";
import glamorousCrown from "./../../../../../Images/Blog/Get Ready for a Glamorous Night/The Braided Crown.png";
import BlogPost from "../../../BlogPost/BlogPost";
import BlogCategories from "../../../BlogCategories/BlogCategories";

const Glamorous = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Get Ready for a Glamorous Night Out: 5 Quick and Easy Hairstyles{" "}
        </title>
        <meta
          name="description"
          content="Get Ready for a Glamorous Night Out: 5 Quick and Easy Hairstyles that complements your outfit and makes you feel confident and fabulous."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/get-ready-for-a-glamorous-night-out-5-quick-and-easy-hairstyles"
        />
      </Helmet>
      <div className="blog-container">
        <div className="blog-wrapper1">
          <GlamorousImg />
          <InnerNavi link="/blog" service="Blog" currService="Hair blog" />
          <GlamorousHead />
          <br />
          <HairServImg hairBotoxImg={glamorousPony} />
          <GlamorousPony />
          <br />
          <HairServImg hairBotoxImg={glamorousBun} />
          <GlamorousBun />
          <br />
          <HairServImg hairBotoxImg={glamorousTwist} />
          <GlamorousTwist />
          <br />
          <HairServImg hairBotoxImg={glamorousWaves} />
          <GlamorousWaves />
          <br />
          <HairServImg hairBotoxImg={glamorousCrown} />
          <GlamorousCrown />
          <br />
          <GlamorousFinal />
        </div>
        <div className="blog-wrapper2">
          <BlogPost />
          <BlogCategories />
        </div>
      </div>
    </div>
  );
};

export default Glamorous;
