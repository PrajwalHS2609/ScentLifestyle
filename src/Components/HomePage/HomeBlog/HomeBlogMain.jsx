import React from "react";
import "./HomeBlog.css";
import HomeBlogCard from "./HomeBlogCard";
import doScalpMassagesBanner from "./../../../Images/Blog/Do_Scalp_Massage_Promote/Banner.png";
import HairTrends from "./../../../Images/Blog/2025HairTrends/Banner.png";
import aromaBodySpaBanner from "./../../../Images/Blog/Aroma_Body_Spa/Banner.png";
import { Link } from "react-router-dom";
const HomeBlogMain = () => {
  return (
    <div className="homeBlogMain">
      <div className="homeBlogMainContainer">
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
        <HomeBlogCard
          img={HairTrends}
          head="2025 Trendy Hair Highlights You’ll Love!"
          para="Are you looking to refresh your look with the hottest hair highlights trends of 2025? Whether you're..."
          link="/2025-trendy-hair-highlights-youll-love"
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
