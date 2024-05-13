import React from "react";
import "./ContactPage.css";
import FranchiseForm from "../FranchisePage/FranchiseForm";
import Contacts from "./Contacts";
const ContactMain = () => {
  return (
    <div className="contactMainContainer">
      <div className="contactMainContent" id="contactMainContent1">
        <Contacts />
      </div>
      <div className="contactMainContent">
        <FranchiseForm />
      </div>
    </div>
  );
};

export default ContactMain;
