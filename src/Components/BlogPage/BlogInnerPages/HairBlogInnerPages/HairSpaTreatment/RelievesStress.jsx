import React from "react";
import point from "./../../../../../Images/point.png";

const RelievesStress = () => {
  return (
    <div className="pediManicureWhat">
      <h5>7. Relieves Stress and Promotes Relaxation</h5>
      <p>
        Hair spa sessions aren’t just about physical benefits—they also provide
        mental relaxation. The soothing head massages, aromatic oils, and
        tranquil salon environment work wonders for reducing stress.
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Hair Spa for Women:{" "}
          </span>
          <p>
            A hair spa doubles as a self-care session, offering a break from
            busy schedules.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Hair Spa for Men:{" "}
          </span>
          <p>
            Men can enjoy a relaxing experience that combines grooming and
            stress relief.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default RelievesStress;
