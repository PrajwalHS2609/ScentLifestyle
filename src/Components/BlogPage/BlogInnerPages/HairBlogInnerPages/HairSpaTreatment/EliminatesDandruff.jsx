import React from "react";
import point from "./../../../../../Images/point.png";

const EliminatesDandruff = () => {
  return (
    <div className="blogWhat-content">
      <h5>4. Eliminates Dandruff and Scalp Issues</h5>
      <p>
        Scalp health is the foundation of healthy hair. Dandruff, itchiness, or
        clogged pores can lead to hair loss and other complications. Regular
        Hair Spa Treatments include scalp massages and deep cleansing that
        address these concerns effectively.
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Scalp detoxification removes oil buildup.{" "}
          </span>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Antifungal treatments prevent dandruff recurrence.{" "}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default EliminatesDandruff;
