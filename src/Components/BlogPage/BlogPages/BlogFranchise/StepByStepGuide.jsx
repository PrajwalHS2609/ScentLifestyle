import React, { useRef, useState } from "react";
import BlogCard from "../BlogCard";
import franchiseBanner from "./../../../../Images/Blog/Step-by-Step Guide/Banner.png";

const BlogFranchise = () => {
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
          img={franchiseBanner}
          head="Step-by-Step Guide to Setting up a Successful Salon Franchise in Bangalore"
          para="Setting up a salon franchise in Bangalore is a lucrative business opportunity for ..."
          link="/step-by-step-guide-to-setting-up-a-successful-salon-franchise-in-bangalore "
        />
      </div>

      <div className="blogMainDisplay2" ref={switchRef}></div>

      <div className="blogMainReadMore">
        <button onClick={handleRead}>Load {toggle ? "Less" : "More"}</button>
      </div>
    </div>
  );
};

export default BlogFranchise;
