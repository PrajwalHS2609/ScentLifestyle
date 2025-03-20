import React from "react";
import "./HomeBlog.css";
import HomeBlogCard from "./HomeBlogCard";
import doScalpMassagesBanner from "./../../../Images/Blog/Do_Scalp_Massage_Promote/Banner.png";
import topNailArtBanner from "./../../../Images/Blog/Top_10_Nail_Art/Banner.png";
import aromaBodySpaBanner from "./../../../Images/Blog/Aroma_Body_Spa/Banner.png";
import { Link } from "react-router-dom";
const HomeBlogMain = () => {
  return (
    <div className="homeBlogMain">
      <div className="homeBlogMainContainer">
        <HomeBlogCard
          img={topNailArtBanner}
          head="Top 10 Nail Art Trends You Need to Try This Year!"
          para="Nail art is constantly evolving, and every year brings a fresh wave of creative, bold, and elegant..."
          link="/top-10-nail-art-trends-you-need-to-try-this-year"
        />
        <HomeBlogCard
          img={aromaBodySpaBanner}
          head="Aroma Body Spa: Rejuvenate Your Senses with the Power of Essential Oils"
          para="In today's fast-paced world, stress, fatigue, and tension have become a part of daily life..."
          link="/aroma-body-spa-rejuvenate-your-senses-with-the-power-of-essential-oils"
        />
        <HomeBlogCard
          img={doScalpMassagesBanner}
          head="Do Scalp Massages Truly Promote Hair Growth?"
          para="Hair care is a universal concern, and everyone dreams of lush, healthy hair. Among the many hair care..."
          link="/do-scalp-massages-truly-promote-hair-growth"
        />
      </div>
      <div className="homeBlogBtn">
        <Link to={"/blog"}>
          <button>View More</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeBlogMain;
