import React from "react";
import { Link } from "react-router-dom";

const OfferTestingHead2 = () => {
  return (
    <div className="offerTestingHead2">
      <div className="offerTestingHead2Content2" >
        <img
          src="https://img.freepik.com/free-photo/woman-hairdresser-salon_144627-8813.jpg?t=st=1724059278~exp=1724062878~hmac=acdbefc4de8779115edc3f20972bd3371717cfad87025bef307c47498c99a9c8&w=996"
          alt=""
        />
      </div>
      <div className="offerTestingHeadContent1">
        <h2>We Increase Your Beauty Salon & Spa</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          recusandae omnis, obcaecati voluptatum at laboriosam dolorum cum
          eveniet voluptas distinctio cumque iste ex aspernatur repellendus
          natus voluptates quia provident animi?
        </p>
        <div className="offerTestingHeadContent1Button">
          <Link>
            <button id="offerTestingHead2button1">Explore Now</button>
          </Link>
          <Link>
            <button id="offerTestingHead2button2">Book Now</button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default OfferTestingHead2;
