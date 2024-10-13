import React, { useRef, useState } from "react";
import BalayageColorNearMeWhat from "./BalayageColorNearMeWhat";
import BalayageColorNearMeWhy from "./BalayageColorNearMeWhy";
import BalayageColorNearMeBenefits from "./BalayageColorNearMeBenefits";
import BalayageColorNearMeXp from "./BalayageColorNearMeXp";
import BalayageColorNearMeWhyChoose from "./BalayageColorNearMeWhyChoose";
import BalayageColorNearMeBook from "./BalayageColorNearMeBook";

const BalayageColorNearMeRead = () => {
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
        <BalayageColorNearMeWhat />
        <div ref={switchRef} className="hairSalonNearMeReadDisplay">
          <BalayageColorNearMeWhy />
          <BalayageColorNearMeBenefits />
          <BalayageColorNearMeXp />
          <BalayageColorNearMeWhyChoose />
          <BalayageColorNearMeBook />
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

export default BalayageColorNearMeRead;
