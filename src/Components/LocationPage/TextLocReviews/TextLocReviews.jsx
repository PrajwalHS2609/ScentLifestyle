import React from "react";
import "./TextLocReviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const TextLocReviews = () => {
  return (
    <div className="textReviewContainer">
      <div className="textReviewContent">
        <div className="reviewStarContainer">
        <FontAwesomeIcon icon={faStar} className="reviewStar"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar} className="reviewStar"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar} className="reviewStar"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar} className="reviewStar"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar} className="reviewStar"></FontAwesomeIcon>
       </div>
        <p>Rated 5 star rating based on 2847 reviews</p>
      </div>
    </div>
  );
};

export default TextLocReviews;
