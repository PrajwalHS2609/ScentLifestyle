import React, { useRef, useState } from "react";
import BlogCard from "../BlogCard";
import christmasOfferBanner from "./../../../../Images/Blog/Christmas_offer/Banner.png";

const BlogOffers = () => {
  let [toggle, setToggle] = useState(false);
  let switchRef = useRef();
  let handleRead = () => {
    if (!toggle) {
      setToggle(true);
      switchRef.current.style.display = "flex";
    } else {
      setToggle(false);
      switchRef.current.style.display = "none";
    }
  };
  return (
    <div className="blogMainContainer">
      <div className="blogMainDisplay1">
        <BlogCard
          img={christmasOfferBanner}
          head="Get Festive Ready: Top Christmas Beauty Tips for Women & Men"
          para="The holiday season is here, and with it comes an exciting opportunity to get festive, enjoy the celebrations, and..."
          link="/get-festive-ready-top-christmas-beauty-tips-for-women-and-men"
        />
      </div>

      <div className="blogMainDisplay2" ref={switchRef}>
        {/* <BlogCard
        img="https://img.freepik.com/free-photo/portrait-attractive-woman-studio_329181-9782.jpg?ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
        head="Raccoon Eyes: Causes, Treatment, and How to Get Rid of It"
        para="Ever noticed those unsightly dark circles around your eyes? In..."
        link="/"
      /> */}
      </div>

      <div className="blogMainReadMore">
        <button onClick={handleRead}>Load {toggle ? "Less" : "More"}</button>
      </div>
    </div>
  );
};

export default BlogOffers;
