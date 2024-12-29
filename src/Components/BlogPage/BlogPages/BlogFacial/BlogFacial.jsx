import React, { useRef, useState } from "react";
import BlogCard from "../BlogCard";
import clearerBanner from "./../../../../Images/Blog/Clearer Skin, Happier You Acne Cure Facial Secrets/Banner.png";

const BlogFacial = () => {
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
          img={clearerBanner}
          head="Clearer Skin, Happier You: Acne Cure Facial Secrets"
          para="Acne is one of the most common skin concerns affecting people of all ages Whether it's a persistent issue or..."
          link="/clearer-skin-happier-you-acne-cure-facial-secrets"
        />
      </div>

      <div className="blogMainDisplay2" ref={switchRef}></div>

      <div className="blogMainReadMore">
        <button onClick={handleRead}>Load {toggle ? "Less" : "More"}</button>
      </div>
    </div>
  );
};

export default BlogFacial;
