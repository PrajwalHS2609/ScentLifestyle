import React from "react";
import "./UptownLocMap.css";

const UptownLocMap = () => {
  return (
    <div className="uptownMapLocContainer">
      <iframe
      title="Uptown"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1708574507916!2d77.75878327454745!3d13.024789313710967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0fce933eb01f%3A0xda0f87b8b4cf7e2f!2sScent%20Salon%20Spa!5e0!3m2!1sen!2sin!4v1722662561968!5m2!1sen!2sin"
        width="500"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default UptownLocMap;
