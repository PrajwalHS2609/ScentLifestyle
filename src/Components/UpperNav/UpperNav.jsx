import React, { useEffect } from "react";
import "./UpperNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const UpperNav = () => {
  useEffect(() => {
    // Load the Tenor embed script dynamically when the component mounts
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up by removing the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="upperNavContainer">
      <h3>
        Glow Into March with Our Exclusive Beauty Deals!{" "}
        <br />
        <span>
          <a href="https://scentlifestyle.com/offer?utm_source=Organic&utm_medium=Festive+Offer&utm_campaign=September+Month&utm_id=Banner+Bar">
            Take a Look{" "}
          </a>
        </span>
      </h3>
      <div className="upperNavInsta">
        <a href="https://www.instagram.com/scentlifestyle/">
          {" "}
          <FontAwesomeIcon
            icon={faInstagram}
            className="upperNavIcon"
          ></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
};

export default UpperNav;
