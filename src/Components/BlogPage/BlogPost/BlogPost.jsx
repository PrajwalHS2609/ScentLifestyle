import React from "react";
import "./../BlogPage.css";
import summerCareBanner from "./../../../Images/Blog/Summer_Hair/Banner.png";
import bestEyelashExtensionBanner from "./../../../Images/Blog/The_Best_Eyelash_Extension/Banner.png";
import olaplexBenefitsBanner from "./../../../Images/Blog/10 Amazing Benefits of Olaplex Hair Treatment/Banner.png";
import { Link } from "react-router-dom";
const BlogPost = () => {
  const blogPost = [
    {
      id: 1,
      img: olaplexBenefitsBanner,
      title: "10 Amazing Benefits of Olaplex Hair Treatment",
      link: "/10-amazing-benefits-of-olaplex-hair-treatment",
    },
    {
      id: 2,
      img: bestEyelashExtensionBanner,
      title: "The Best Eyelash Extension Styles for Brides and Special Events",
      link: "/the-best-eyelash-extension-styles-for-brides-and-special-events",
    },
    {
      id: 3,
      img: summerCareBanner,
      title: "Summer Hair Care Tips to Beat the Heat",
      link: "/summer-hair-care-tips-to-beat-the-heat",
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
