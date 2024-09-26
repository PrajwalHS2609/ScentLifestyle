import React, { useRef, useState } from "react";
import eyeBrowBanner from "./../../../../Images/Blog/Why_Eyebrow_Shaping/Banner.png";
import BlogCard from "../BlogCard";

const BlogEyeBrow = () => {
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
          img={eyeBrowBanner}
          head="Why Eyebrow Shaping is the Secret to a Polished Look"
          para="When it comes to beauty and grooming, eyebrows often take center stage. They frame your..."
          link="/why-eyebrow-shaping-is-the-secret-to-a-polished-look"
        />
      </div>

      <div className="blogMainDisplay2" ref={switchRef}></div>

      <div className="blogMainReadMore">
        <button onClick={handleRead}>Load {toggle ? "Less" : "More"}</button>
      </div>
    </div>
  );
};

export default BlogEyeBrow;
