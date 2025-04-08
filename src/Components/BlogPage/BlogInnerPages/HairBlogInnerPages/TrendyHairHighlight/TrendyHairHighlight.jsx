import React from "react";
import { Helmet } from "react-helmet";
import TrendyHairHighlightImg from "./TrendyHairHighlightImg";
import TrendyHairHighlightHead from "./TrendyHairHighlightHead";
import TrendyHairHighlightWhy from "./TrendyHairHighlightWhy";
import TrendyHairHighlightFaceFraming from "./TrendyHairHighlightFaceFraming";
import TrendyHairHighlightCaramel from "./TrendyHairHighlightCaramel";
import TrendyHairHighlightMocha from "./TrendyHairHighlightMocha";
import TrendyHairHighlightIcy from "./TrendyHairHighlightIcy";
import TrendyHairHighlightRoseGold from "./TrendyHairHighlightRoseGold";
import TrendyHairHighlightChunky from "./TrendyHairHighlightChunky";
import TrendyHairHighlightChocolate from "./TrendyHairHighlightChocolate";
import TrendyHairHighlightAshBrown from "./TrendyHairHighlightAshBrown";
import TrendyHairHighlightPeekaboo from "./TrendyHairHighlightPeekaboo";
import TrendyHairHighlightEspresso from "./TrendyHairHighlightEspresso";
import TrendyHairHighlightHow from "./TrendyHairHighlightHow";
import TrendyHairHighlightFinal from "./TrendyHairHighlightFinal";
import HairServImg from "../../HairBotox/HairServImg";
import HairTrendsWhy from "./../../../../../Images/Blog/2025HairTrends/Why Hair Highlights.png";
import HairTrendsHow from "./../../../../../Images/Blog/2025HairTrends/How to Maintain Your Hair Highlights.png";
import BlogPost from "../../../BlogPost/BlogPost";
import BlogCategories from "../../../BlogCategories/BlogCategories";

const TrendyHairHighlight = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>2025 Trendy Hair Highlights You’ll Love! </title>
        <meta
          name="description"
          content="2025 Trendy Hair Highlights You’ll Love! From warm caramel hues to icy platinum streaks, there’s a perfect hair highlights for women of every style and personality."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/2025-trendy-hair-highlights-youll-love"
        />
      </Helmet>
      <div className="blog-container">
        <div className="blog-wrapper1">
          <TrendyHairHighlightImg />
          <TrendyHairHighlightHead />
          <br />
          <HairServImg hairBotoxImg={HairTrendsWhy} />
          <TrendyHairHighlightWhy />
          <br />
          <TrendyHairHighlightFaceFraming />
          <br />
          <TrendyHairHighlightCaramel />
          <br />
          <TrendyHairHighlightMocha />
          <br />
          <TrendyHairHighlightIcy />
          <br />
          <TrendyHairHighlightRoseGold />
          <br />
          <TrendyHairHighlightChunky />
          <br />
          <TrendyHairHighlightChocolate />
          <br />
          <TrendyHairHighlightAshBrown />
          <br />
          <TrendyHairHighlightPeekaboo />
          <br />
          <TrendyHairHighlightEspresso />
          <br />
          <HairServImg hairBotoxImg={HairTrendsHow} />
          <TrendyHairHighlightHow />
          <br />
          <TrendyHairHighlightFinal />
        </div>
        <div className="blog-wrapper2">
          <BlogPost />
          <BlogCategories />
        </div>
      </div>
    </div>
  );
};

export default TrendyHairHighlight;
