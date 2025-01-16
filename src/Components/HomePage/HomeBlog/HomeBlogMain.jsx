import React from "react";
import "./HomeBlog.css";
import HomeBlogCard from "./HomeBlogCard";
import clearerBanner from "./../../../Images/Blog/Clearer Skin, Happier You Acne Cure Facial Secrets/Banner.png";
import sheaButterBanner from "./../../../Images/Blog/Shea Butter Hair Spa/Banner.png";
import pedicureTreatmentDryBanner from "./../../../Images/Blog/Best Pedicure Treatments for Dry and Cracked Heels/Banner.png";
import { Link } from "react-router-dom";
const HomeBlogMain = () => {
  return (
    <div className="homeBlogMain">
      <div className="homeBlogMainContainer">
        <HomeBlogCard
          img={pedicureTreatmentDryBanner}
          head="Best Pedicure Treatments for Dry and Cracked Heels"
          para="Dry and cracked heels can be a common yet frustrating issue, especially for those who are on their feet all day or..."
          link="/best-pedicure-treatments-for-dry-and-cracked-heel"
        />{" "}
        <HomeBlogCard
          img={sheaButterBanner}
          head="Revitalize Your Hair with the Magic of Shea Butter Hair Spa!"
          para="Hair is one of the most defining aspects of our appearance, yet it often suffers from exposure to pollution..."
          link="/revitalize-you-hair-with-the-magic-of-shea-butter-hair-spa"
        />
        <HomeBlogCard
          img={clearerBanner}
          head="Clearer Skin, Happier You: Acne Cure Facial Secrets"
          para="Acne is one of the most common skin concerns affecting people of all ages Whether it's a persistent issue or..."
          link="/clearer-skin-happier-you-acne-cure-facial-secrets"
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
