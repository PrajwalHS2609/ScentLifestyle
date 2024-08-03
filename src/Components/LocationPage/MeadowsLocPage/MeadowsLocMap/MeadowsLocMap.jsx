import React from "react";
import "./MeadowsLocMap.css";
const MeadowsLocMap = () => {
  return (
    <div className="meadowsMapLocContainer">
      <iframe
        title="Palm Meadows"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7776.395796668868!2d77.7310943935791!3d12.959185000000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae12093c173e17%3A0xa0dc4058f7c31adc!2sScent%20Salon%20Spa!5e0!3m2!1sen!2sin!4v1715312952267!5m2!1sen!2sin"
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

export default MeadowsLocMap;
