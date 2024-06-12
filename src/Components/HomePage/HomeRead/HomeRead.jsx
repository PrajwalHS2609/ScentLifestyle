import React, { useRef, useState } from "react";
import "./HomeRead.css";

const HomeRead = () => {
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
    <div className="homeReadContainer">
      <div className="homeReadHeadContainer">
        <button>
          <h6 className="openBut" onClick={open}>
            Read More{" "}
          </h6>
          <h1>Scent Salon In Bangalore</h1>
        </button>
      </div>
      <div ref={switchRef} className="homeReadDisplayContainer">
        <ul>
          <li>
            Welcome to SCENT Salon Spa, your premier destination for beauty and
            relaxation in Bangalore! With six luxurious locations across the
            city at Lavelle Road, JP Nagar, Sahakar Nagar, Jakkur, and
            Whitefield, we bring you the ultimate salon and spa experience.
          </li>
          <li>
            At SCENT, we offer a comprehensive range of services to cater to all
            your beauty needs. From expert hair styling and coloring to
            luxurious spa treatments, flawless nail services, essential beauty
            treatments, and stunning eyelash enhancements, we provide everything
            you need to look and feel your best.
          </li>
          <li>
            Our team of highly skilled professionals is dedicated to providing
            you with personalized attention and exceptional service. We use only
            the finest products and state-of-the-art techniques to ensure that
            you leave our salons feeling relaxed, rejuvenated, and beautif
          </li>
          <li>
            Experience the luxury of SCENT Salon Spa at any of our six
            convenient locations. Let us pamper you from head to toe and help
            you achieve your desired look with our unmatched expertise and
            hospitality. Visit us today and discover the ultimate beauty
            destination in Bangalore!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeRead;
