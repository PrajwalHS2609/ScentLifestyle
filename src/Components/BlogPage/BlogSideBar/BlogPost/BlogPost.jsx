import React from "react";
import "./../../BlogPage.css";
import bestEyelashExtensionBanner from "./../../../../Images/Blog/The_Best_Eyelash_Extension/Banner.png";
import olaplexBenefitsBanner from "./../../../../Images/Blog/10 Amazing Benefits of Olaplex Hair Treatment/Banner.png";
import bodyWaxingRightBanner from "./../../../../Images/Blog/BodyWaxingRight/Banner.png";

import { Link } from "react-router-dom";
const BlogPost = () => {
  const blogPost = [
    {
      id:1,
      img: bodyWaxingRightBanner,
      title: "Is Body Waxing Right for You? Pros, Cons & Tips",
      link: "/is-body-waxing-right-for-you-pros-cons-and-tips",
    },
    {
      id: 2,
      img: olaplexBenefitsBanner,
      title: "10 Amazing Benefits of Olaplex Hair Treatment",
      link: "/10-amazing-benefits-of-olaplex-hair-treatment",
    },
    {
      id: 3,
      img: bestEyelashExtensionBanner,
      title: "The Best Eyelash Extension Styles for Brides and Special Events",
      link: "/the-best-eyelash-extension-styles-for-brides-and-special-events",
    },
  ];
  return (
    <div className="blogPost-container">
      <ul>
        <h2>Recent Posts</h2>
        {blogPost.map((x) => (
          <Link to={x.link}>
            <li key={x.id}>
              <img src={x.img} alt={x.title} />
              <h4>{x.title}</h4>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default BlogPost;
