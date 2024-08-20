import React from "react";
import "./OfferTesting.css";
import { Link } from "react-router-dom";

const OfferTestingHead = () => {
  return (
    <div className="offerTestingHead">
      <div className="offerTestingHeadContent1">
        <h2>WAXING COMBO</h2>
        <h3>Under Arms + Full Arms + Full Legs</h3>
        <p>
          Experience smooth, flawless skin with our Waxing Combo at SCENT! Enjoy
          Under Arms + Full Arms + Full Legs waxing all for just Rs. 1299/-.
          Pamper yourself with this unbeatable offer and feel confident from
          head to toe. Book your appointment today for a silky-smooth finish!
        </p>
        <div className="offerTestingHeadContent1Button">
          <Link>
            <button id="button2">Book Now</button>
          </Link>{" "}
        </div>
      </div>
      <div className="offerTestingHeadContent2">
        <img
          src="https://img.freepik.com/free-photo/woman-hairdresser-salon_144627-8813.jpg?t=st=1724059278~exp=1724062878~hmac=acdbefc4de8779115edc3f20972bd3371717cfad87025bef307c47498c99a9c8&w=996"
          alt=""
        />
      </div>
    </div>
  );
};

export default OfferTestingHead;
