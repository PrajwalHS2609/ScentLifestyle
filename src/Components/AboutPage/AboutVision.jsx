import React from "react";
import jakkur from "./../../Images/jakkur.jpg";

const AboutVision = () => {
  return (
    <div className="aboutOwner-container">
      <img src={jakkur} alt="jakkur Img" />
      <div className="aboutOwner-content">
        <h2>
          the <span>vision</span>
        </h2>
        <h4>
          {" "}
          scent being synonymous with luxury salon space across the globe
        </h4>
        <p>
          the vision is to own 300 company owned salons panned out in India and
          across the globe .
        </p>
        <p>
          Along with Company owned scent also will have FOFO and FOCO salons as
          well.
        </p>
      </div>
    </div>
  );
};

export default AboutVision;
