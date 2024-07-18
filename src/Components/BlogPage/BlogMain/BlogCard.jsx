import React from "react";
import "./BlogMain.css";
import { Link } from "react-router-dom";
const BlogCard = (props) => {
  return (
    <div className="blogCardContainer">
      <div className="blogCardImg">
        <img
          src={props.img}
          alt={props.alt}
        />
      </div>
      <div className="blogCardTitle">
        <h2>{props.head}</h2>
      </div>
      <div className="blogCardPara">
        <p>Ever noticed those unsightly dark circles around your eyes? In...</p>
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
