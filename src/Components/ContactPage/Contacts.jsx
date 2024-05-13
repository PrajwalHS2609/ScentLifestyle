import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./ContactPage.css";

const Contacts = () => {
  return (
    <div className="contactsContainer">
      <div className="contacts1">
        <h1>Contact Us</h1>
        <p>
          <FontAwesomeIcon
            icon={faPhone}
            className="franIcon"
          ></FontAwesomeIcon>
          9742212700
        </p>
      </div>
      <div className="contacts2">
        <h1>For Franchise</h1>
        <p>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="franIcon"
          ></FontAwesomeIcon>
          franchisee@scentlifestyle.com
        </p>
        <p>
          <FontAwesomeIcon
            icon={faPhone}
            className="franIcon"
          ></FontAwesomeIcon>
          9591522700
        </p>
      </div>
      <div className="contacts3">
        <h1>For Membership</h1>
        <p>
          <FontAwesomeIcon
            icon={faPhone}
            className="franIcon"
          ></FontAwesomeIcon>
          9742212700
        </p>
      </div>
    </div>
  );
};

export default Contacts;
