import React from "react";
import "./FranchisePage.css";
import FranchiseCard from "./FranchiseCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
const FranchiseContact = () => {
  return (
    <div className="franchiseContactContainer">
      <FranchiseCard
        franchiseIcon={
          <FontAwesomeIcon
            icon={faEnvelope}
            className="franIcon"
          ></FontAwesomeIcon>
        }
        franchiseMail="franchisee@scentlifestyle.com"
      />
      <FranchiseCard
        franchiseIcon={
          <FontAwesomeIcon
            icon={faPhone}
            className="franIcon"
          ></FontAwesomeIcon>
        }
        contName=""
        franchiseContact="+91 9591522700"
      />
    </div>
  );
};

export default FranchiseContact;
