import React, { useRef, useState } from "react";
import HairColoristNearMeWhy from "./HairColoristNearMeWhy";
import HairColoristNearMeService from "./HairColoristNearMeService";
import HairColoristNearMeDiff from "./HairColoristNearMeDiff";
import HairColoristNearMeCustomer from "./HairColoristNearMeCustomer";
import HairColoristNearMeBook from "./HairColoristNearMeBook";

const HairColoristNearMeRead = () => {
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
        <HairColoristNearMeWhy />
        <div ref={switchRef} className="hairSalonNearMeReadDisplay">
          <HairColoristNearMeService />
          <HairColoristNearMeDiff />
          <HairColoristNearMeCustomer />
          <HairColoristNearMeBook />
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

export default HairColoristNearMeRead;
