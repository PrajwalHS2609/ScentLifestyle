import React, { useRef, useState } from "react";
import "./BridalReadMore.css";
import BridalHead from "./BridalHead";
import BridalBenefits from "./BridalBenefits";
import BridalWhat from "./BridalWhat";
import BridalCustomer from "./BridalCustomer";
import BridalBook from "./BridalBook";
const BridalReadMore = () => {
  let [toggle, setToggle] = useState(false);
  let switchRef = useRef();
  let open = () => {
    if (!toggle) {
      setToggle(true);
      switchRef.current.style.display = "flex";
    } else {
      setToggle(false);
      switchRef.current.style.display = "none";
    }
  };
  return (
    <div className="homeReadContainer">
      <div className="homeReadHeadContainer">
        <BridalHead />
        <div ref={switchRef} className="homeReadDisplayContainer">
          <BridalBenefits />
          <BridalWhat />
          <BridalCustomer />
          <BridalBook />
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

export default BridalReadMore;
