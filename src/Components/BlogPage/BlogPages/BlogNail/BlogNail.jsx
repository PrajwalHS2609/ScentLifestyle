import React, { useRef, useState } from "react";
import BlogCard from "../BlogCard";
import pedimanicurebanner from "./../../../../Images/Blog/Pedi&manicureBlog/Banner Image.png";

const BlogNail = () => {
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
          img={pedimanicurebanner}
          head="How a Spa Day Can Boost Your Mental Health "
          para="In today’s fast-paced world, where stress and anxiety are common, taking time for ..."
          link="/how-a-spa-day-can-boost-your-mental-health"
        />
      </div>

      <div className="blogMainDisplay2" ref={switchRef}>
        <BlogCard
          img="https://img.freepik.com/free-photo/portrait-attractive-woman-studio_329181-9782.jpg?ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
          head="Raccoon Eyes: Causes, Treatment, and How to Get Rid of It"
          para="Ever noticed those unsightly dark circles around your eyes? In..."
          link="/"
        />
        <BlogCard
          img="https://img.freepik.com/free-photo/portrait-attractive-woman-studio_329181-9782.jpg?ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
          head="Raccoon Eyes: Causes, Treatment, and How to Get Rid of It"
          para="Ever noticed those unsightly dark circles around your eyes? In..."
          link="/"
        />
        <BlogCard
          img="https://img.freepik.com/free-photo/portrait-attractive-woman-studio_329181-9782.jpg?ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
          head="Raccoon Eyes: Causes, Treatment, and How to Get Rid of It"
          para="Ever noticed those unsightly dark circles around your eyes? In..."
          link="/"
        />
      </div>

      <div className="blogMainReadMore">
        <button onClick={handleRead}>Load {toggle ? "Less" : "More"}</button>
      </div>
    </div>
  );
};

export default BlogNail;