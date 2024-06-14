import React, { useRef, useState } from "react";
import "./NailRead.css";

const NailRead = () => {
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
    <div className="nailReadContainer">
      <div className="nailReadHeadContainer">
        <button>
          <h2 className="openBut" onClick={open}>
            Read More
          </h2>
        </button>
      </div>
      <div ref={switchRef} className="nailReadDisplayContainer">
        <ul>
          <li>
            Elevate your appearance with our exclusive selection of high-end
            nail treatments at SCENT Salon. Our skilled experts provide a wide
            array of services including gel polish, acrylic nail extensions,
            nail art, O.P.I nails, chrome polish, ombre nails, cat eye gel
            polish, gel French polish, and glam polish. Whether you desire a
            flawless manicure or a stunning pedicure, our meticulous approach
            guarantees a refined look customized to your preferences.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NailRead;
