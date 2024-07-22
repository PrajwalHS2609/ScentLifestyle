import React, { useRef, useState } from "react";
import "./BlogMain.css";
import BlogCard from "../BlogCard";
const BlogMain = () => {
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
          img="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-049d16b/www.bodycraft.co.in/wp-content/uploads/raccoon-eyes.png"
          head="Raccoon Eyes: Causes, Treatment, and How to Get Rid of It"
          para="Ever noticed those unsightly dark circles around your eyes? In..."
          link="/"
        />
        <BlogCard
          img="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-049d16b/www.bodycraft.co.in/wp-content/uploads/raccoon-eyes.png"
          head="Raccoon Eyes: Causes, Treatment, and How to Get Rid of It"
          para="Ever noticed those unsightly dark circles around your eyes? In..."
          link="/"
        />
        <BlogCard
          img="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-049d16b/www.bodycraft.co.in/wp-content/uploads/raccoon-eyes.png"
          head="Raccoon Eyes: Causes, Treatment, and How to Get Rid of It"
          para="Ever noticed those unsightly dark circles around your eyes? In..."
          link="/"
        />
      </div>

      <div className="blogMainDisplay2" ref={switchRef}>
        <BlogCard
          img="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-049d16b/www.bodycraft.co.in/wp-content/uploads/raccoon-eyes.png"
          head="Raccoon Eyes: Causes, Treatment, and How to Get Rid of It"
          para="Ever noticed those unsightly dark circles around your eyes? In..."
          link="/"
        />
        <BlogCard
          img="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-049d16b/www.bodycraft.co.in/wp-content/uploads/raccoon-eyes.png"
          head="Raccoon Eyes: Causes, Treatment, and How to Get Rid of It"
          para="Ever noticed those unsightly dark circles around your eyes? In..."
          link="/"
        />
        <BlogCard
          img="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-049d16b/www.bodycraft.co.in/wp-content/uploads/raccoon-eyes.png"
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

export default BlogMain;
