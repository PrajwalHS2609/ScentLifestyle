import React from "react";
import "./AcademyPopup.css";
import ContactForm from "../../ContactPage/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const AcademyPopup = () => {
  let handleExit = (e) => {
    e.preventDefault();
    document.querySelector(".academyPopup-container").style.display = "none";
  };
  return (
    <div className="academyPopup-container">
      <div className="academyPopup-content">
        <div className="academyPopup-item">
          {" "}
          <FontAwesomeIcon
            icon={faX}
            className="academyPopupIcon"
            onClick={handleExit}
          ></FontAwesomeIcon>
        </div>
        <div className="academyPopup-item">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default AcademyPopup;
