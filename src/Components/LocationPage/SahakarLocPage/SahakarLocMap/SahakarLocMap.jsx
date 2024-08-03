import React from "react";
import "./SahakarLocMap.css";
const SahakarLocMap = () => {
  return (
    <div className="sahakarMapLocContainer">
      <iframe
        title="sahakarNagar"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66959.84890698246!2d77.4936506181404!3d13.061355082635192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1823e4ecedf1%3A0xa274b078aaa444c4!2sScent%20Salon%20Spa!5e0!3m2!1sen!2sin!4v1715312603323!5m2!1sen!2sin"
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

export default SahakarLocMap;
