import React, { useRef, useState } from "react";
import PedicureNearMeWhyChoose from "./PedicureNearMeWhyChoose";
import PedicureNearMeBenefits from "./PedicureNearMeBenefits";
import PedicureNearMeOption from "./PedicureNearMeOption";
import PedicureNearMeKeyword from "./PedicureNearMeKeyword";
import PedicureNearMeProcess from "./PedicureNearMeProcess";
import PedicureNearMeDiff from "./PedicureNearMeDiff";
import PedicureNearMeFaq from "./PedicureNearMeFaq";
import PedicureNearMeFinal from "./PedicureNearMeFinal";
import PedicureNearMeWhy from "./PedicureNearMeWhy";

const PedicureNearMeRead = () => {
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
        <PedicureNearMeWhyChoose />
        <div ref={switchRef} className="hairSalonNearMeReadDisplay">
          <PedicureNearMeBenefits />
          <PedicureNearMeOption />
          <PedicureNearMeWhy />
          <PedicureNearMeKeyword />
          <PedicureNearMeProcess />
          <PedicureNearMeDiff />
          <PedicureNearMeFaq />
          <PedicureNearMeFinal />
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

export default PedicureNearMeRead;
