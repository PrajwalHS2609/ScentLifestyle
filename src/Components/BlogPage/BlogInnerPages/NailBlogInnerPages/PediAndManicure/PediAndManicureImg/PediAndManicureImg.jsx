import React from "react";
import pediManicureImg from "./../../../../../../Images/Blog/Pedi&manicureBlog/Banner Image.png";
import "./PediAndManicureImg.css";
const PediAndManicureImg = () => {
  return (
    <div className="pediManicureImg">
      <img src={pediManicureImg} alt="pediManicure" loading='lazy'/>
    </div>
  );
};

export default PediAndManicureImg;
