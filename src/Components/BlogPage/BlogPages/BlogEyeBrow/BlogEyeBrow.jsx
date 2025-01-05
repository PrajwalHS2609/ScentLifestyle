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
      <div className="blogMainContent">
        <BlogCard
          img={eyeBrowBanner}
          head="Clearer Skin, Happier You: Acne Cure Facial Secrets"
          para="Acne is one of the most common skin concerns affecting people of all ages..."
          link="/clearer-skin-happier-you-acne-cure-facial-secrets"
        />
      </div>

      <div className="blogMainDisplayContent" ref={switchRef}></div>

      <div className="blogMainReadMore">
        <button onClick={handleRead}>Load {toggle ? "Less" : "More"}</button>
      </div>
    </div>
  );
};

export default BlogEyeBrow;
