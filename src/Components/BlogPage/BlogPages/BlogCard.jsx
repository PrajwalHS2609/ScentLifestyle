import React from "react";
import "./../BlogPages/BlogMain/BlogMain.css";
import { Link } from "react-router-dom";
const BlogCard = (props) => {
  return (
    <div className="blogCardContainer">
      <div className="blogCardImg">
        <img
          src={props.img}
          alt={props.alt}
          loading="lazy"
        />
      </div>
      <div className="blogCardTitle">
        <h2>{props.head}</h2>
      </div>
      <div className="blogCardPara">
        <p>{props.para}</p>
      </div>
      <div className="BlogCardBut">
        <button>
          <Link to={props.link}>Know More</Link>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
