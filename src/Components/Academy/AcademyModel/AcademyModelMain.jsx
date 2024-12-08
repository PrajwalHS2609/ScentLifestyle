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
          Become a model for SCENT Academy’s skilled students in Bangalore and
          experience a complete transformation across hairdressing, makeup,
          skincare, and nail art. Immerse yourself in a session of creativity
          and precision, contributing to the practical learning of our future
          beauty professionals, while receiving a personalized, fresh look
          crafted by the next generation of stylists and beauty specialists.
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
