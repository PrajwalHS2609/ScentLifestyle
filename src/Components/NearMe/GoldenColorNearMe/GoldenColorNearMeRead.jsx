import React, { useRef, useState } from "react";
import GoldenColorNearMeWhy from "./GoldenColorNearMeWhy";
import GoldenColorNearMeBenefit from "./GoldenColorNearMeBenefit";
import GoldenColorNearMeProcess from "./GoldenColorNearMeProcess";
import GoldenColorNearMeTech from "./GoldenColorNearMeTech";
import GoldenColorNearMeMaintain from "./GoldenColorNearMeMaintain";
import GoldenColorNearMeBook from "./GoldenColorNearMeBook";

const GoldenColorNearMeRead = () => {
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
        <GoldenColorNearMeWhy />
        <div ref={switchRef} className="hairSalonNearMeReadDisplay">
          <GoldenColorNearMeBenefit />
          <GoldenColorNearMeProcess />
          <GoldenColorNearMeTech />
          <GoldenColorNearMeMaintain />
          <GoldenColorNearMeBook />
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

export default GoldenColorNearMeRead;
