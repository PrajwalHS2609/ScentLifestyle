import React from "react";
import "./HomeBlog.css";
import HomeBlogCard from "./HomeBlogCard";
import doScalpMassagesBanner from "./../../../Images/Blog/Do_Scalp_Massage_Promote/Banner.png";
import HairTrends from "./../../../Images/Blog/2025HairTrends/Banner.png";
import prefectPreDateBanner from "./../../../Images/Blog/PerfectPreDate/Banner.png";
import { Link } from "react-router-dom";
const HomeBlogMain = () => {
  return (
    <div className="homeBlogMain">
      <div className="homeBlogMainContainer">
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
        <HomeBlogCard
          img={prefectPreDateBanner}
          head="The Perfect Pre-Date Beauty Routine for a Magical Valentine's Day"
          para="Valentine’s Day is the perfect occasion to celebrate love, whether you’re planning a romantic..."
          link="/the-perfect-pre-date-beauty-routine-for-a-magical-valentines-day"
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
