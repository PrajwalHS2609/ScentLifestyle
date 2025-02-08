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
        chatMessage="Welcome, February! Celebrate love with SCENT’s exclusive offers. Treat yourself or a loved one to glow-enhancing treatments. Book now and shine bright this month with SCENT." // Optional
        placeholder="Type a message..." // Optional
      />
    </div>
  );
};

export default WhatsApp;
