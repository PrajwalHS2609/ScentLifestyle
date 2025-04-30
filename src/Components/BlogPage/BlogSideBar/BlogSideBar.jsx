import React from "react";
import "./../BlogPage.css";
import BlogPost from "./BlogPost/BlogPost";
import BlogCategories from "./BlogCategories/BlogCategories";
import BlogOffer from "./BlogOffer/BlogOffer";

const 
BlogSideBar = () => {
  return (
    <div className="blogSideBar-container">
      <BlogPost />
      <BlogOffer/>
      <BlogCategories />
    </div>
  );
};

export default BlogSideBar;
