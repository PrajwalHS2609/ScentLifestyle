import React from "react";
import "./AcademyHeader.css";
import { Link } from "react-router-dom";
import header from "./../../../Images/Academy/header.png";
const AcademyHeader = () => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".academyPopup-container").style.display = "flex";
  };
  return (
    <div className="academyHeader-container">
      <div className="academyHeader-cover">
        <img src={header} alt="" loading="lazy" />
      </div>
      <div className="academyHeader-content">
        <div className="academyHeader-contentText">
          <h2>ScentLifestyle Academy</h2>
          <h4>Empowering Creativity, Shaping Lifestyles.</h4>
          <p>
            Discover your beauty ambitions through specialized training,
            state-of-the-art facilities, and the unique Schwarzkopf Professional
            Connect platform in Southeast Asia. Become part of our dynamic
            community and transform your passion into a successful career. Sign
            up today to realize your full potential!
          </p>
          <Link>
            {" "}
            <button onClick={handlePopUp}>Enroll Now</button>
          </Link>
        </div>
      </div>
      {/* <svg
        className="wave wave-top"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 500"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          d="M0,80L80,75C160,70,320,60,480,55C640,50,800,45,960,50C1120,55,1280,70,1360,75L1440,80L1440,0L0,0Z"
        />
      </svg> */}
    </div>
  );
};

export default AcademyHeader;
