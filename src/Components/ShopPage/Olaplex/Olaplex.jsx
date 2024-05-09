import React from "react";
import OlaplexHead from "./OlaplexHead";
import OlaplexCardContain from "./OlaplexCardContain";
import "./Olaplex.css";

const Olaplex = () => {
  return (
    <div className="olaplexContainer">
      <OlaplexHead />
      <OlaplexCardContain />
    </div>
  );
};

export default Olaplex;
