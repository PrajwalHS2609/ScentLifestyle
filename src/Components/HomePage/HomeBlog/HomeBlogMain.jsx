import React from "react";
import "./HomeBlog.css";
import HomeBlogCard from "./HomeBlogCard";
import academyEnrollBanner from "./../../../Images/Blog/Top_10_Reasons_to_ Enroll_in_ Salon_Academy/Banner.png";
import sheaButterBanner from "./../../../Images/Blog/Shea Butter Hair Spa/Banner.png";
import christmasOfferBanner from "./../../../Images/Blog/Christmas_offer/Banner.png";
import { Link } from "react-router-dom";
const HomeBlogMain = () => {
  return (
    <div className="homeBlogMain">
      <div className="homeBlogMainContainer">
        <HomeBlogCard
          img={sheaButterBanner}
          head="Revitalize Your Hair with the Magic of Shea Butter Hair Spa!"
          para="Hair is one of the most defining aspects of our appearance, yet it often suffers from exposure to pollution..."
          link="/revitalize-you-hair-with-the-magic-of-shea-butter-hair-spa"
        />{" "}
        <HomeBlogCard
          img={academyEnrollBanner}
          head="Top 10 Reasons to Enroll in Our Premier Salon Academy Today"
          para="Are you passionate about beauty, hair, or makeup and dream of turning your passion into a successful career?..."
          link="/top-10-reasons-to-enroll-in-our-premier-salon-academy-today"
        />
        <HomeBlogCard
          img={christmasOfferBanner}
          head="Get Festive Ready: Top Christmas Beauty Tips for Women & Men"
          para="The holiday season is here, and with it comes an exciting opportunity to get festive, enjoy the celebrations, and..."
          link="/get-festive-ready-top-christmas-beauty-tips-for-women-and-men"
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
