import React, { useRef, useState } from "react";
import "./BeautyRead.css";

const BeautyRead = () => {
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
    <div className="beautyReadContainer">
      <div className="beautyReadHeadContainer">
        <button>
          <h2 className="openBut" onClick={open}>
            Read More
          </h2>
        </button>
      </div>
      <div ref={switchRef} className="beautyReadDisplayContainer">
        <ul>
          <li>
            Looking to revitalize your youthful glow or indulge in a little
            self-care pampering? Elevate your beauty routine with our luxurious,
            expertly executed services.
          </li>
          <li>Rejuvenate & Transform.</li>
          <li>
            Treat yourself to a range of services, from waxing with peel-off wax
            by Depileve (ideal for Bikini & Brazilian waxing), to our soothing
            cartridge wax. Brighten your skin with our opulent detanning
            treatments, and explore our specially curated anti-aging regimens
            featuring mesotherapy and more. Book with us today to learn more or
            experience these indulgent services.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BeautyRead;
