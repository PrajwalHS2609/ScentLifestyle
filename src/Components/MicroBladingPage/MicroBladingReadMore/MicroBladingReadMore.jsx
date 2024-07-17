import React, { useRef, useState } from "react";
import MicroBladingHead from "./MicroBladingHead";
import MicroBladingBenefits from "./MicroBladingBenefits";
import MicroBladingWhat from "./MicroBladingWhat";
import MicroBladingCustomer from "./MicroBladingCustomer";
import MicroBladingBook from "./MicroBladingBook";

const MicroBladingReadMore = () => {
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
        <MicroBladingHead />
        <div ref={switchRef} className="homeReadDisplayContainer">
          <MicroBladingBenefits />
          <MicroBladingWhat />
          <MicroBladingCustomer />
          <MicroBladingBook />
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

export default MicroBladingReadMore;
