import React, { useRef, useState } from "react";
import BlogCard from "../BlogCard";
import pedimanicurebanner from "./../../../../Images/Blog/Pedi&manicureBlog/Banner Image.png";
import reasonsToTreatFeetBanner from "./../../../../Images/Blog/top_reasons_treat_feet/Banner.png";

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
          head="Exploring the Benefits of Professional Pedicures and Manicures "
          para="When it comes to self-care and personal grooming, professional pedicures and manicures are ..."
          link="/exploring-the-benefits-of-professional-pedicures-and-manicures"
        />
        <BlogCard
          img={reasonsToTreatFeetBanner}
          head="Top Reasons to Treat Your Feet to a Pedicalm-Glyco Foot Facial "
          para="Time to give your feet the happy feet they deserve! Pedicalm-Glyco Foot Facial will have them feeling..."
          link="/top-reasons-to-treat-your-feet-to-a-pedicalm-glyco-foot-facial"
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

export default BlogNail;
