import React from "react";
import TenHairColorAllAgesImg from "./TenHairColorAllAgesImg";
import TenHairColorAllAgesHead from "./TenHairColorAllAgesHead";
import HairServImg from "../../HairBotox/HairServImg";
import TenHairColorAllAgesTips from "./TenHairColorAllAgesTips";
import TenHairColorAllAgesFinal from "./TenHairColorAllAgesFinal";
import BlogSideBar from "../../../BlogSideBar/BlogSideBar";
import tenHairColorFinal from "./../../../../../Images/Blog/ten_hair_colors_for_all_ages/Final Thoughts.png";
import tenHairColorTips from "./../../../../../Images/Blog/ten_hair_colors_for_all_ages/Tips for Choosing the Right Hair Color for Your Age and Style.png";
import { Helmet } from "react-helmet";

const TenHairColorAllAges = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>10 Stunning Hair Color Ideas for Women of All Ages </title>
        <meta
          name="description"
          content="10 Stunning Hair Color Ideas for Women of All Ages Whether you're looking to go bold with vibrant shades or prefer subtle, timeless tones, the right hair color can uplift your style and confidence. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/10-stunning-hair-color-ideas-for-women-of-all-ages"
        />
      </Helmet>
      <div className="blog-container">
        <div className="blog-wrapper1">
          <TenHairColorAllAgesImg />
          <TenHairColorAllAgesHead />
          <br />
          <HairServImg hairBotoxImg={tenHairColorFinal} />
          <TenHairColorAllAgesTips />
          <br />
          <HairServImg hairBotoxImg={tenHairColorTips} />
          <TenHairColorAllAgesFinal />
        </div>
        <div className="blog-wrapper2">
          <BlogSideBar />
        </div>
      </div>
    </div>
  );
};

export default TenHairColorAllAges;
