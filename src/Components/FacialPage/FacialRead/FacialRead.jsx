import React, { useRef, useState } from "react";
import "./FacialRead.css";

const FacialRead = () => {
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
    <div className="facialReadContainer">
      <div className="facialReadHeadContainer">
        <button>
          <h2 className="openBut" onClick={open}>
            Read More
          </h2>
        </button>
      </div>
      <div ref={switchRef} className="facialReadDisplayContainer">
        <ul>
          <li>
            Looking to give your face a rejuvenated and youthful glow? If you've
            been searching for 'facial for glowing skin' or 'facial offers near
            me', SCENT is your destination for mood-lifting and skin-relaxing
            treatments.
          </li>
          <li>
            Now is the perfect time to experience the best facial for oily skin,
            hydrating facials, bridal facials, anti-aging facials, and facials
            for dry skin.
          </li>
          <li>
            Discover the range of facial services available at SCENT salon
            below.
          </li>
          <li>
            When you step into our salon, you'll be warmly welcomed and taken to
            a special treatment area, where you can relax amidst the salon's
            amenities.
          </li>
          <li>
            Our skincare experts will then prepare your skin for the ideal
            facial treatment, tailored to your skin type, whether it's
            hydrating, anti-aging, or for acne-prone skin. You can discuss your
            preferences with our professionals and explore the ongoing offers on
            facials.
          </li>
          <li>
            Depending on your choice and our expert's recommendation, you'll
            receive a dedicated application of premium skincare products while
            enjoying ambient music and a soothing atmosphere.
          </li>
          <li>
            Discover offers on the best facials in Bangalore, tailored to your
            specific skin concerns. At SCENT, we offer a range of facials
            crafted to meet your individual needs.
          </li>
          <li>
            Choose from popular facial services like Ainhoa Vitaminal Facial for
            oily and combination skin, Ainhoa Kronoage Caviar Facial for
            brightening and anti-aging, Luxury Diamond Facial for moisturizing,
            AHA facial suitable for most skin types, and more.
          </li>
          <li>
            Consult our experienced skin consultants to find the perfect facial
            for your skin type.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FacialRead;
