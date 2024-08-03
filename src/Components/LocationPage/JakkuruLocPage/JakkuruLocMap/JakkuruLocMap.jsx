import React from "react";
import "./JakkuruLocMap.css";
const JakkuruLocMap = () => {
  return (
    <div className="jakkuruMapLocContainer">
          <iframe
          title="jakkur"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6502.127500845567!2d77.61488794627367!3d13.070329479965107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19b0bc294e17%3A0x59d3e3c737b6eb93!2sScent%20Salon%20Spa!5e0!3m2!1sen!2sin!4v1715312794077!5m2!1sen!2sin"
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

export default JakkuruLocMap;
