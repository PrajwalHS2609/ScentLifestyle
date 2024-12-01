import React from "react";
import "./WhatsApp.css";
import Scent from "./../../../Images/SCENT Logo.png";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsApp = () => {
  return (
    <div className="whatsAppContainer">
      <FloatingWhatsApp
        phoneNumber="919742232700"
        accountName="SCENT"
        avatar={Scent} // Optional
        statusMessage="Typically replies within 5 min" // Optional
        chatMessage="🎄Hello December! Treat yourself or someone special to SCENT’s exclusive holiday beauty offers. Pamper,glow and celebrate in style book today!" // Optional
        placeholder="Type a message..." // Optional
      />
    </div>
  );
};

export default WhatsApp;
