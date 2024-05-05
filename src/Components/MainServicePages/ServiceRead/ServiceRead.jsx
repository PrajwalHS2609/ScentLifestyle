import React, { useRef, useState } from "react";
import "./ServiceRead.css";

const ServiceRead = () => {
  let [toggle, setToggle] = useState(false);
  let switchRef = useRef();
  let open = () => {
    if (!toggle) {
      setToggle(true);
      switchRef.current.style.display = "block";
    } else {
      setToggle(false);
      switchRef.current.style.display = "none";
    }
  };

  return (
    <div className="serviceReadContainer">
      <div className="serviceReadHeadContainer">
        <button>
          <h1 className="openBut" onClick={open}>
            Read More
          </h1>
        </button>
      </div>
      <div ref={switchRef} className="serviceReadDisplayContainer">
        <ul>
          <li>
            Experience luxury and convenience at its finest as you say goodbye
            to the hassle of visiting multiple salon parlors for your beauty
            needs. SCENT, synonymous with elegance, is your ultimate destination
            for all your hair, skin, and grooming services. Located in the heart
            of Bangalore's prime hotspots, our unisex salon invites you to
            indulge in a journey of unparalleled luxury. Explore our exquisite
            range of services and take advantage of our exclusive offers, all
            conveniently located at a salon near you.
          </li>
          <li>
            Discover our budget-friendly salon offers on hair care, skin care,
            products, and special therapies & rituals. Designed to help you save
            money, our offers provide the best combinations from our wide range
            of beauty services. SCENT Salon Offers not only save you money but
            also offer the flexibility of availing the service across any of our
            outlets. Stay updated through our Salon offers section and enjoy
            what you truly deserve the best. Welcome to the SCENT Salon Spa!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceRead;
