import React from "react";
import "./../../BlogPage.css";
import olaplexBenefitsBanner from "./../../../../Images/Blog/10 Amazing Benefits of Olaplex Hair Treatment/Banner.png";
import bodyWaxingRightBanner from "./../../../../Images/Blog/BodyWaxingRight/Banner.png";
import moroccanOilBanner from "./../../../../Images/Blog/moroccan_oil/Banner.png";

import { Link } from "react-router-dom";
const BlogPost = () => {
  const blogPost = [
    {
      id: 1,
      img: moroccanOilBanner,
      title: "How Moroccanoil Hair Treatment Can Rescue Damaged Hair?",
      link: "/how-moroccanoil-hair-treatment-can-rescue-damaged-hair",
    },
    {
      id: 2,
      img: bodyWaxingRightBanner,
      title: "Is Body Waxing Right for You? Pros, Cons & Tips",
      link: "/is-body-waxing-right-for-you-pros-cons-and-tips",
    },
    {
      id: 3,
      img: olaplexBenefitsBanner,
      title: "10 Amazing Benefits of Olaplex Hair Treatment",
      link: "/10-amazing-benefits-of-olaplex-hair-treatment",
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
