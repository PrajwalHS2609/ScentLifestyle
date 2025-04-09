import React from "react";
import { Link } from "react-router-dom";
import "./../../BlogPage.css";

const BlogCategories = () => {
  return (
    <div className="blogCategories-container">
      <ul>
        <h2>Categories</h2>
        <li>
          <Link to={"/blog"}>All</Link>
        </li>
        <li>
          <Link to={"/blog/hair-blog"}>Hair</Link>
        </li>
        <li>
          <Link to={"/blog/nail-blog"}>Nails</Link>
        </li>
        <li>
          <Link to={"/blog/facial-blog"}>Facial</Link>
        </li>
        <li>
          <Link to={"/blog/spa-blog"}>Spa</Link>
        </li>
        <li>
          <Link to={"/blog/beauty-essentials-blog"}>Beauty Essentials</Link>
        </li>
        <li>
          <Link to={"/blog/eye-lashes-blog"}>Eye Lashes</Link>
        </li>
        <li>
          <Link to={"/blog/eyebrow-microblading-blog"}>Eyebrow Microblading</Link>
        </li>
        <li>
          <Link to={"/blog/offers"}>Scent Offers</Link>
        </li>
        <li>
          <Link to={"/blog/academy"}>Scent Academy</Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogCategories;
