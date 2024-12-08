import React from "react";
import "./HomeBlog.css";
import HomeBlogCard from "./HomeBlogCard";
import hairBleachBanner from "./../../../Images/Blog/How Often Should You Bleach Your Hair/Banner.png";
import bodyWaxingMythBanner from "./../../../Images/Blog/Body_waxing_myth/Banner.png";
import christmasOfferBanner from "./../../../Images/Blog/Christmas_offer/Banner.png";
import { Link } from "react-router-dom";
const HomeBlogMain = () => {
  return (
    <div className="homeBlogMain">
      <div className="homeBlogMainContainer">
        <HomeBlogCard
          img={hairBleachBanner}
          head="How Often Should You Bleach Your Hair? Expert Advice"
          para="Bleaching your hair can be a transformative experience, offering a fresh and..."
          link="/how-often-should-you-bleach-your-hair"
        />
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
