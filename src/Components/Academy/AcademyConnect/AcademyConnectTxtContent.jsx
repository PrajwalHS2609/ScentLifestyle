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
        <div className="academyContact-container">
          <div className="academyContact-content">
            <h3>Training Manager</h3>
            <a href="tel:9148542700">+91 91485 42700</a>
          </div>
          {/* <a href="tel:9606682700">
            {" "}
            <div className="academyContact-content">
              <h3>Operations Manager </h3>
              <span> +91 96066 82700</span>
            </div>
          </a> */}
        </div>
        <Link>
          <button onClick={handlePopUp}>BOOK NOW</button>
        </Link>
      </div>
    </>
  );
};

export default AcademyConnectTxtContent;
