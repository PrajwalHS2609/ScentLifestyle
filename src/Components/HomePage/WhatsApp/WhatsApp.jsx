import React, { useEffect } from "react";
import "./WhatsApp.css";
import whatsApp from "./../../../Images/WhatsApp.png";
const WhatsApp = () => {

useEffect(()=>{

},[])
  return (
    <div className="whatsAppContainer">
        {/* <div className="whatsAppContent">Hello</div> */}
      <a href="https://api.whatsapp.com/send?phone=919742232700">
        <img src={whatsApp} alt="" />
      </a>
    </div>
  );
};

export default WhatsApp;
