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
          <a href="tel:9742232700">+91 9606682700</a>
        </p>
      </div>
      <div className="contacts2">
        <h2>For Franchise</h2>
        <p>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="franIcon"
          ></FontAwesomeIcon>
          <a href="mailto:franchisee@scentlifestyle.com">
            franchisee@scentlifestyle.com
          </a>
        </p>
        <p>
          <FontAwesomeIcon
            icon={faPhone}
            className="franIcon"
          ></FontAwesomeIcon>
          <a href="tel:9591522700">+91 9591522700</a>
        </p>
      </div>
      <div className="contacts3">
        <h2>For Membership</h2>
        <p>
          <FontAwesomeIcon
            icon={faPhone}
            className="franIcon"
          ></FontAwesomeIcon>
          <a href="tel:9742232700">+91 9606682700</a>
        </p>
      </div>
    </div>
  );
};

export default Contacts;
