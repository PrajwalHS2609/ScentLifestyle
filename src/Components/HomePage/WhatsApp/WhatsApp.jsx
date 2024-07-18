import React, { useEffect } from "react";
import "./WhatsApp.css";
import whatsApp from "./../../../Images/WhatsApp.png";
const WhatsApp = () => {
  useEffect(() => {}, []);
  return (
    <div className="whatsAppContainer">
      {/* <div className="whatsAppContent">Hello</div> */}
      <a href="https://wa.me/9742232700?text=Hello" >
        <img src={whatsApp} alt="" />
      </a>
    </div>
  );
};

export default WhatsApp;
