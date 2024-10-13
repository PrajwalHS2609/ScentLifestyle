import React, { useRef, useState } from "react";
import HairSalonNearMeHead from "../HairSalonNearMeHead/HairSalonNearMeHead";
import "./HairSalonNearMeRead.css";
import HairSalonNearMeWhyChoose from "./../HairSalonNearMeWhyChoose/HairSalonNearMeWhyChoose";
import HairSalonNearMeService from "./../HairSalonNearMeService/HairSalonNearMeService";
import HairSalonNearMeCustomer from "./../HairSalonNearMeCustomer/HairSalonNearMeCustomer";
import HairSalonNearMeBook from "./../HairSalonNearMeBook";
import HairSalonNearMeWhy from "./../HairSalonNearMeWhy";
const HairSalonNearMeRead = () => {
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
        <HairSalonNearMeHead />
        <div ref={switchRef} className="hairSalonNearMeReadDisplay">
          <HairSalonNearMeWhyChoose />
          <HairSalonNearMeService />
          <HairSalonNearMeWhy />
          <HairSalonNearMeCustomer />
          <HairSalonNearMeBook />
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

export default HairSalonNearMeRead;
