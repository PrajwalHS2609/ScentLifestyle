import React from "react";
import { Link } from "react-router-dom";
const AcademyConnectTxtContent = () => {
  const handlePopUp = (e) => {
    e.preventDefault();
    document.querySelector(".academyPopup-container").style.display = "flex";
  };
  return (
    <>
      <div className="academyConnect-content2">
        <h2>SCENT</h2>
        <h3> ACADEMY</h3>
      </div>
      <div className="academyConnect-content2">
        <p>
          Experience the pinnacle of luxury, sophistication, and world-class
          training at SCENT Academy. Elevate your career with our prestigious
          curriculum and master the advanced techniques crafted by the renowned
          Schwarzkopf Professional Academy. Stand out as an exceptional
          hairstylist in the competitive beauty industry.
        </p>
        <b>
          Join SCENT Academy today and turn your passion into a thriving
          profession.
        </b>
        <Link >
          <button onClick={handlePopUp}>BOOK NOW</button>
        </Link>
      </div>
    </>
  );
};

export default AcademyConnectTxtContent;
