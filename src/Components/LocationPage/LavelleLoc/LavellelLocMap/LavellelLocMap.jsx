import React from "react";
import "./LavellelLocMap.css";
import LocationMap from "../../LocationMap/LocationMap";
const LavellelLocMap = () => {
  return (
    <div className="lavellelMapLocContainer">
      <LocationMap
        location="Lavellel Road"
        map={
          <iframe
          title="Lavellel Road"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7776.089389074394!2d77.58917068346508!3d12.968991900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16783d04e593%3A0xe3f71f656659211!2sScent%20Salon%20Spa!5e0!3m2!1sen!2sin!4v1715312832928!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        }
      />
    </div>
  );
};

export default LavellelLocMap;
