import React from "react";
import "./AcademyModel.css";
import salonImg from "./../../../Images/Varthur - whitefield.jpg";
import { Link } from "react-router-dom";
const AcademyModelMain = () => {
  return (
    <div className="academyModelMain-container">
      <div className="academyModelMain-content">
        <p>
          {" "}
          Step into the spotlight as a model at SCENT Academy in Bangalore,
          where you’ll undergo a complete beauty transformation! From expert
          haircuts and styling to flawless makeup, skincare, and nail art, our
          talented students will treat you to a unique, personalized look. Not
          only will you leave looking fabulous, but you’ll also be helping
          future beauty professionals hone their skills in a real-world setting.
          Join us for a creative session that promises precision, innovation,
          and a fresh new you—all while supporting the next generation of
          stylists and beauty experts.
        </p>
        <Link to={"/contact-us"}>
          <button>SIGN UP</button>
        </Link>
      </div>

      <div className="academyModelMain-content">
        <img src={salonImg} alt="salonImg" />
      </div>
    </div>
  );
};

export default AcademyModelMain;
