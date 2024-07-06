import React from "react";
import "./JpLocMap.css";
import LocationMap from "../../LocationMap/LocationMap";

const JpLocMap = () => {
  return (
    <div className="jpLocMapContainer">
      <LocationMap
        location="Jp Nagar"
        map={
          <iframe
          title="jp Nagar"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7778.037649213272!2d77.5785832935791!3d12.906511000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15855ce4af89%3A0x4d3b6ca298802841!2sScent%20Salon%20Spa!5e0!3m2!1sen!2sin!4v1715312872491!5m2!1sen!2sin"
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

export default JpLocMap;
