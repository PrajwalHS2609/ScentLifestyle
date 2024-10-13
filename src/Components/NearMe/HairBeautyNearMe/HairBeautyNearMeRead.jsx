import React, { useRef, useState } from "react";
import HairBeautyNearMeHead from './HairBeautyNearMeHead';
import HairBeautyNearMeWhyChoose from './HairBeautyNearMeWhyChoose';
import HairBeautyNearMeService from './HairBeautyNearMeService';
import HairBeautyNearMeSatisfy from "./HairBeautyNearMeSatisfy";
import HairBeautyNearMeCustomer from './HairBeautyNearMeCustomer';
import HairBeautyNearMeWhy from "./HairBeautyNearMeWhy"
const HairBeautyNearMeRead = () => {
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
        <HairBeautyNearMeHead />
        <div ref={switchRef} className="hairSalonNearMeReadDisplay">
          <HairBeautyNearMeWhyChoose />
          <HairBeautyNearMeService />
          <HairBeautyNearMeSatisfy />
          <HairBeautyNearMeCustomer />
          <HairBeautyNearMeWhy />
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

export default HairBeautyNearMeRead;
