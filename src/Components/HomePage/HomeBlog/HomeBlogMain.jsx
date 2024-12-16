import React from "react";
import "./HomeBlog.css";
import HomeBlogCard from "./HomeBlogCard";
import academyEnrollBanner from "./../../../Images/Blog/Top_10_Reasons_to_ Enroll_in_ Salon_Academy/Banner.png";
import bodyWaxingMythBanner from "./../../../Images/Blog/Body_waxing_myth/Banner.png";
import christmasOfferBanner from "./../../../Images/Blog/Christmas_offer/Banner.png";
import { Link } from "react-router-dom";
import BlogCard from "../../BlogPage/BlogPages/BlogCard";
const HomeBlogMain = () => {
  return (
    <div className="homeBlogMain">
      <div className="homeBlogMainContainer">
        <HomeBlogCard
          img={bodyWaxingMythBanner}
          head="The Truth About Body Waxing: Myths, Facts, and Tips"
          para="Body waxing is a popular hair removal method that has been around for centuries. It’s known for leaving your skin..."
          link="/the-truth-about-body-waxing-myths-facts-and-tips"
        />{" "}
        <HomeBlogCard
          img={christmasOfferBanner}
          head="Get Festive Ready: Top Christmas Beauty Tips for Women & Men"
          para="The holiday season is here, and with it comes an exciting opportunity to get festive, enjoy the celebrations, and..."
          link="/get-festive-ready-top-christmas-beauty-tips-for-women-and-men"
        />
        <HomeBlogCard
          img={academyEnrollBanner}
          head="Top 10 Reasons to Enroll in Our Premier Salon Academy Today"
          para="Are you passionate about beauty, hair, or makeup and dream of turning your passion into a successful career?..."
          link="/top-10-reasons-to-enroll-in-our-premier-salon-academy-today"
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
