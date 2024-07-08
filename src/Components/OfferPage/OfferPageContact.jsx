import React from "react";
import "./OfferPage.css";
import OfferMarquee from "./OfferMarquee";
const OfferPageContact = () => {
  return (
    <div className="offerPageContactContainer">
      <h3>
        Book Your Appointment Today! <a href="tel:9742232700">+91 9742232700</a>{" "}
        or Visit Our Website{" "}
        <a href="https://scentlifestyle.com/">www.scentlifestyle.com</a>
      </h3>
      <p>
        Women and men aged 25-55, interested in <span>hair care</span> and{" "}
        <span>beauty treatments</span>.
      </p>
    </div>
  );
};

export default OfferPageContact;
