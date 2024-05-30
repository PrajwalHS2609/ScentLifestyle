import React from "react";
import FacialsNearMeHead from "./FacialsNearMeHead";
import "../NearMe.css";
import FacialsNearMePara from "./FacialsNearMePara";

const FacialsNearMeMain = () => {
  return (
    <div className="nearContainer">
      <FacialsNearMeHead />
      <FacialsNearMePara />
    </div>
  );
};

export default FacialsNearMeMain;
