import React from "react";
import "./BlogMain.css";
import BlogCard from "./BlogCard";
const BlogMain = () => {
  return (
    <div className="blogMainContainer">
      <BlogCard
        img="https://cdn-ikppclh.nitrocdn.com/CueiRbtmHDfiLNmOiFYzPbGQWoFHcYmP/assets/images/optimized/rev-049d16b/www.bodycraft.co.in/wp-content/uploads/raccoon-eyes.png"
        head="Raccoon Eyes: Causes, Treatment, and How to Get Rid of It"
        para="Ever noticed those unsightly dark circles around your eyes? In..."
        link="/"
      />
      <BlogCard img={""} head="" para="" link="" />
      <BlogCard img={""} head="" para="" link="" />
      <BlogCard img={""} head="" para="" link="" />
      <BlogCard img={""} head="" para="" link="" />
      <BlogCard img={""} head="" para="" link="" />
    </div>
  );
};

export default BlogMain;
