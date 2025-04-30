import React from "react";
import "./../../BlogPage.css";
import bodyWaxingRightBanner from "./../../../../Images/Blog/BodyWaxingRight/Banner.png";
import moroccanOilBanner from "./../../../../Images/Blog/moroccan_oil/Banner.png";
import tenHairColorBanner from "./../../../../Images/Blog/ten_hair_colors_for_all_ages/Banner.png";

import { Link } from "react-router-dom";
const BlogPost = () => {
  const blogPost = [
    {
      id: 1,
      img: tenHairColorBanner,
      title: "10 Stunning Hair Color Ideas for Women of All Ages",
      link: "/10-stunning-hair-color-ideas-for-women-of-all-ages",
    },
    {
      id: 2,
      img: moroccanOilBanner,
      title: "How Moroccanoil Hair Treatment Can Rescue Damaged Hair?",
      link: "/how-moroccanoil-hair-treatment-can-rescue-damaged-hair",
    },
    {
      id: 3,
      img: bodyWaxingRightBanner,
      title: "Is Body Waxing Right for You? Pros, Cons & Tips",
      link: "/is-body-waxing-right-for-you-pros-cons-and-tips",
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
