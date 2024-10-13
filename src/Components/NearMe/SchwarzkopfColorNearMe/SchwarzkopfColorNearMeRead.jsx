import React, { useRef, useState } from "react";
import SchwarzkopfColorNearMeWhyChoose from './SchwarzkopfColorNearMeWhyChoose';
import SchwarzkopfColorNearMeBenefits from './SchwarzkopfColorNearMeBenefits';
import SchwarzkopfColorNearMeService from './SchwarzkopfColorNearMeService';
import SchwarzkopfColorNearMeWhat from './SchwarzkopfColorNearMeWhat';
import SchwarzkopfColorNearMeBook from './SchwarzkopfColorNearMeBook';

const SchwarzkopfColorNearMeRead = () => {
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
    <div className="hairSalonNearMeRead">
      <div className="hairSalonNearMeReadHead">
        <SchwarzkopfColorNearMeWhyChoose />
        <div ref={switchRef} className="hairSalonNearMeReadDisplay">
          <SchwarzkopfColorNearMeBenefits />
          <SchwarzkopfColorNearMeService />
          <SchwarzkopfColorNearMeWhat />
          <SchwarzkopfColorNearMeBook />
        </div>
        <button>
          <h2 className="openBut" onClick={open}>
            Read {toggle ? "Less" : "More"}
          </h2>
        </button>
      </div>
    </div>
  );
};

export default SchwarzkopfColorNearMeRead;
