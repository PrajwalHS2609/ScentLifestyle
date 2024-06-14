import React, { useRef, useState } from "react";
import "./LashesRead.css";

const LashesRead = () => {
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
    <div className="lashesReadContainer">
      <div className="lashesReadHeadContainer">
        <button>
          <h2 className="openBut" onClick={open}>
            Read More
          </h2>
        </button>
      </div>
      <div ref={switchRef} className="lashesReadDisplayContainer">
        <ul>
          <li>
            Experience the allure of longer, fuller lashes with our temporary
            and permanent eyelash extension services. Choose from our sets of 60
            or 80 lashes for a dynamic and beautiful look that enhances your
            natural beauty. Visit our eyelash salon to explore our exclusive
            offers.
          </li>
          <li>
            Eyelash extensions are a cosmetic treatment where artificial lashes
            are delicately applied to your natural lashes, creating a fuller,
            longer, and more defined appearance. At SCENT Salon, we offer a
            variety of extensions, including mink, silk, synthetic, and hybrid,
            each with unique properties and benefits.
          </li>
          <li>
            For those seeking eyelash extensions in Bangalore, look no further
            than SCENT Salon. Our outlets across Bangalore offer expert
            application and personalized service.
          </li>
          <li>
            The longevity of eyelash extensions varies based on factors such as
            the type of extensions, adhesive quality, and individual lash growth
            cycle. Typically, extensions can last from two to six weeks before
            requiring a touch-up or replacement.
          </li>
          <li>
            When properly applied and maintained, lash extensions should not
            harm your natural lashes. However, improper application, removal, or
            inadequate care can potentially damage or weaken your natural lashes
            over time. Trust our skilled technicians for safe and
            beautiful results.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LashesRead;
