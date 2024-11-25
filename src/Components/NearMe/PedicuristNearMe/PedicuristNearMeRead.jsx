import React, { useRef, useState } from "react";
import PedicuristNearMeWhat from "./PedicuristNearMeWhat";
import PedicuristNearMeBenefits from "./PedicuristNearMeBenefits";
import PedicuristNearMeWhy from "./PedicuristNearMeWhy";
import PedicuristNearMeWhen from "./PedicuristNearMeWhen";
import PedicuristNearMeFinal from "./PedicuristNearMeFinal";

const PedicuristNearMeRead = () => {
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
        <PedicuristNearMeWhat />
        <div ref={switchRef} className="hairSalonNearMeReadDisplay">
          <PedicuristNearMeBenefits />
          <PedicuristNearMeWhy />
          <PedicuristNearMeWhen />
          <PedicuristNearMeFinal />
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

export default PedicuristNearMeRead;
