import React, { useRef, useState } from "react";
import BlogCard from "../BlogCard";
import pedimanicurebanner from "./../../../../Images/Blog/Pedi&manicureBlog/Banner Image.png";
import reasonsToTreatFeetBanner from "./../../../../Images/Blog/top_reasons_treat_feet/Banner.png";
import topNailArtBanner from "./../../../../Images/Blog/Top_10_Nail_Art/Banner.png";

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
        <BlogCard
          img={topNailArtBanner}
          head="Top 10 Nail Art Trends You Need to Try This Year!"
          para="Nail art is constantly evolving, and every year brings a fresh wave of creative, bold, and elegant..."
          link="/top-10-nail-art-trends-you-need-to-try-this-year"
        />
      </div>

      <div className="blogMainReadMore">
        <button onClick={handleRead}>Load {toggle ? "Less" : "More"}</button>
      </div>
    </div>
  );
};

export default BlogNail;
