import React from "react";
import "./Olaplex.css";
import OlaplexCard from "./OlaplexCard";
import product1 from "./../../../Images/Shop/Olaplex/OLAPLEX NO 4 -REPAIR AND PROTECT.jpg";
import product2 from "./../../../Images/Shop/Olaplex/OLAPLEX NO 5 - HYDRATION SUPREME.png";
import product3 from "./../../../Images/Shop/Olaplex/OLAPLEX NO 6 -BOND SMOOTHER.jpg";

const OlaplexCardContain = () => {
  return (
    <div className="olaplexCardContainWrapper">
      <OlaplexCard img={product1} txt="Repair and Protect" />
      <OlaplexCard img={product2} txt="Hydration Supreme"/>
      <OlaplexCard img={product3} txt="Bond Smoother" />
    </div>
  );
};

export default OlaplexCardContain;
