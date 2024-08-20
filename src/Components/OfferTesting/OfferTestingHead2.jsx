import React from "react";
import { Link } from "react-router-dom";

const OfferTestingHead2 = () => {
  return (
    <div className="offerTestingHead2">
      <div className="offerTestingHead2Content2">
        <img
          src="https://img.freepik.com/free-photo/woman-hairdresser-salon_144627-8813.jpg?t=st=1724059278~exp=1724062878~hmac=acdbefc4de8779115edc3f20972bd3371717cfad87025bef307c47498c99a9c8&w=996"
          alt=""
        />
      </div>
      <div className="offerTestingHeadContent1">
        <h2>Happy Hours</h2>
        <h3>20% Off Mon to Thu, UPTO 3PM</h3>
        <p>
          Enjoy 20% Off during Happy Hours at SCENT! From Monday to Thursday, up
          to 3 PM, treat yourself to our premium salon services at a discounted
          rate. Whether it's a fresh haircut, a relaxing facial, or a
          rejuvenating hair treatment, take advantage of this special offer and
          pamper yourself for less. Don’t miss out book your appointment and
          indulge in the SCENT experience!
        </p>
        <div className="offerTestingHeadContent1Button">
          <Link>
            <button id="offerTestingHead2button2">Book Now</button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default OfferTestingHead2;
