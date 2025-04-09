import React from "react";
import { Helmet } from "react-helmet";
import SheaButterHairSpaHead from "./SheaButterHairSpaHead";
import SheaButterHairSpaWhat from "./SheaButterHairSpaWhat";
import SheaButterHairSpaBenefits from "./SheaButterHairSpaBenefits";
import SheaButterHairSpaHow from "./SheaButterHairSpaHow";
import SheaButterHairSpaHowOften from "./SheaButterHairSpaHowOften";
import SheaButterHairSpaWhyChoose from "./SheaButterHairSpaWhyChoose";
import SheaButterHairSpaImg from "./SheaButterHairSpaImg";
import HairServImg from "../../HairBotox/HairServImg";
import sheaButterHowOften from "./../../../../../Images/Blog/Shea Butter Hair Spa/How Often Should You Get a Shea Butter Hair Spa.png";
import sheaButterHow from "./../../../../../Images/Blog/Shea Butter Hair Spa/How to Do a Shea Butter Hair Spa at Home.png";
import sheaButterWhat from "./../../../../../Images/Blog/Shea Butter Hair Spa/What is Shea Butter Hair Spa.png";
import InstaImages from "../../../../HomePage/InstaFeed/InstaImages";
import BlogSideBar from "../../../BlogSideBar/BlogSideBar";

const BlogSheaButterHairSpa = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Revitalize Your Hair with the Magic of Shea Butter Hair Spa!
        </title>
        <meta
          name="description"
          content="Revitalize Your Hair with the Magic of Shea Butter Hair Spa! This deeply nourishing treatment is designed to hydrate, strengthen, and rejuvenate your locks, leaving them silky, soft, and radiant. "
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/revitalize-you-hair-with-the-magic-of-shea-butter-hair-spa"
        />
      </Helmet>
      <div className="blog-container">
        <div className="blog-wrapper1">
          <SheaButterHairSpaImg />
          <SheaButterHairSpaHead />
          <br />
          <HairServImg hairBotoxImg={sheaButterWhat} />
          <SheaButterHairSpaWhat />
          <br />
          <InstaImages vid="https://www.youtube.com/shorts/NeJANcK7fyg" />

          <SheaButterHairSpaBenefits />
          <br />
          <HairServImg hairBotoxImg={sheaButterHow} />
          <SheaButterHairSpaHow />
          <br />
          <HairServImg hairBotoxImg={sheaButterHowOften} />
          <SheaButterHairSpaHowOften />
          <br />
          <SheaButterHairSpaWhyChoose />
        </div>
        <div className="blog-wrapper2">
        <BlogSideBar/>
        </div>
      </div>
    </div>
  );
};

export default BlogSheaButterHairSpa;
