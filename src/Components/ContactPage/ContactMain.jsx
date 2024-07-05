import React from "react";
import "./ContactPage.css";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";
const ContactMain = () => {
  return (
    <div className="contactMainContainer">
      <div className="contactMainContent" id="contactMainContent1">
        <Contacts />
      </div>
      <div className="contactMainContent">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactMain;
