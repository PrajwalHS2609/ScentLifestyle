import React, { useRef, useState } from "react";
import "./HairRead.css";

const HairRead = () => {
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
    <div className="hairReadContainer">
      <div className="hairReadHeadContainer">
        <button>
          <h2 className="openBut" onClick={open}>
            Read More
          </h2>
        </button>
      </div>
      <div ref={switchRef} className="hairReadDisplayContainer">
        <ul>
          <li>
            Welcome to SCENT Hair Salon, where we redefine beauty and style with
            six luxurious locations across Bangalore, including Lavelle Road, JP
            Nagar, Sahakar Nagar, Jakkur, and Whitefield.
          </li>
        </ul>
        <ul className="readmehead2">
          <h3>
            At SCENT Hair Salon, we are dedicated to providing you with the best
            hair care services tailored to your unique needs. Our expert
            stylists specialize in a wide range of services, including:
          </h3>
          <li>
            Haircuts & Styling: Whether you're looking for a trendy new haircut
            or a classic style, our skilled stylists will work with you to
            create the perfect look that complements your personality and
            lifestyle.
          </li>
          <li>
            Highlights & Streaks: Add dimension and depth to your hair with our
            expertly applied highlights and streaks. From subtle sun-kissed
            highlights to bold statement colors, we'll help you achieve the
            perfect look.
          </li>
          <li>
            Hair Spa & Treatments: Pamper your hair with our indulgent hair spa
            treatments designed to nourish, strengthen, and revitalize your
            locks. From hydrating masks to repairing treatments, we have
            everything you need to restore your hair's health and beauty.
          </li>
          <li>
            With a commitment to excellence and a passion for creativity, SCENT
            Hair Salon is your go-to destination for all your hair care needs.
            Visit us at any of our six convenient locations and experience the
            difference for yourself!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HairRead;
