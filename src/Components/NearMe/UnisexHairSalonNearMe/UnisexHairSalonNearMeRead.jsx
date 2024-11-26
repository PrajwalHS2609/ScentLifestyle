import React, { useRef, useState } from "react";
import UnisexHairSalonNearMeWhy from "./UnisexHairSalonNearMeWhy";
import UnisexHairSalonNearMeService from "./UnisexHairSalonNearMeService";
import UnisexHairSalonNearMeDiff from "./UnisexHairSalonNearMeDiff";
import UnisexHairSalonNearMeCustomer from "./UnisexHairSalonNearMeCustomer";
import UnisexHairSalonNearMeUltimate from "./UnisexHairSalonNearMeUltimate";

const UnisexHairSalonNearMeRead = () => {
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
        <UnisexHairSalonNearMeWhy />

        <div ref={switchRef} className="hairSalonNearMeReadDisplay">
          <UnisexHairSalonNearMeService />
          <UnisexHairSalonNearMeDiff />
          <UnisexHairSalonNearMeCustomer />
          <UnisexHairSalonNearMeUltimate />
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

export default UnisexHairSalonNearMeRead;
