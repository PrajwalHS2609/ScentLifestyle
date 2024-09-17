import React, { useRef, useState } from "react";
import spaDayBanner from "./../../../../Images/Blog/How a Spa Day/Banner Image.png";
import top5Spa from "./../../../../Images/Blog/The_Top_5_Hair_Spa_Today/Banner.png";
import BlogCard from "../BlogCard";

const BlogSpa = () => {
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
          img={spaDayBanner}
          head="How a Spa Day Can Boost Your Mental Health?"
          para="In today’s fast-paced world, where stress and anxiety are common, taking time for ..."
          link="/how-a-spa-day-can-boost-your-mental-health"
        />
        <BlogCard
          img={top5Spa}
          head="The Top 5 Reasons to Book a Hair Spa Today! "
          para="Hair care is more than just shampooing and conditioning—it’s about deep  ..."
          link="/the-top-5-reasons-to-book-a-hair-spa-today"
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

export default BlogSpa;
