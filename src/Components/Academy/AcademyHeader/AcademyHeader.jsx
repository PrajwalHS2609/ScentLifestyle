import React from "react";
import "./AcademyHeader.css";
import { Link } from "react-router-dom";

const AcademyHeader = () => {
  return (
    <div className="academyHeader-container">
      <div className="academyHeader-cover">
        <img
          src="https://img.freepik.com/free-photo/adorable-young-girl-sitting-chair-barber-using-hair-dryer-shape-her-hair-high-quality-photo_144627-76008.jpg?t=st=1733563479~exp=1733567079~hmac=e404c78b24a39d6509f0fcc0db0fc693d7cdd13d8750ec284af27c1c0d43b972&w=996"
          alt=""
        />
      </div>
      <div className="academyHeader-content">
        <div className="academyHeader-contentText">
          <h2>ScentLifestyle Academy</h2>
          <h4>Crafting Experts, Shaping Futures</h4>
          <p>
            We empower your beauty aspirations with expert guidance,
            state-of-the-art facilities, and the exclusive provider of Sassoon
            Connect in Southeast Asia. Become part of our dynamic community and
            transform your passion into a fulfilling career. Enroll today and
            unlock your potential.
          </p>
          <Link to={"/contact-us"}>
            {" "}
            <button>Enroll Now</button>
          </Link>
        </div>
      </div>
      <svg
        className="wave wave-top"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 500"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          d="M0,80L80,75C160,70,320,60,480,55C640,50,800,45,960,50C1120,55,1280,70,1360,75L1440,80L1440,0L0,0Z"
        />
      </svg>
    </div>
  );
};

export default AcademyHeader;
