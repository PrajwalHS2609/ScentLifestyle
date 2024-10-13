import React, { useRef, useState } from "react";
import HairColorServiceNearMeWhyChoose from "./HairColorServiceNearMeWhyChoose";
import HairColorServiceNearMeTypes from "./HairColorServiceNearMeTypes";
import HairColorServiceNearMeBenefits from "./HairColorServiceNearMeBenefits";
import HairColorServiceNearMeHow from "./HairColorServiceNearMeHow";
import HairColorServiceNearMeBook from "./HairColorServiceNearMeBook";

const HairColorServiceNearMeRead = () => {
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
        <HairColorServiceNearMeWhyChoose />
        <div ref={switchRef} className="hairSalonNearMeReadDisplay">
          <HairColorServiceNearMeTypes />
          <HairColorServiceNearMeBenefits />
          <HairColorServiceNearMeHow />
          <HairColorServiceNearMeBook />
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

export default HairColorServiceNearMeRead;
