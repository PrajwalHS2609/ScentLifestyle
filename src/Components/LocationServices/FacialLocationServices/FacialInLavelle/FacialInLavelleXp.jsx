import React from "react";
import point from "./../../../Images/point.png";

const FacialInLavelleXp = () => {
  return (
    <div className="hairSalonInLavelleWhy">
      <h5>Experience Luxury at the Best Facial Salon in Lavelle Road</h5>
      <p>
        SCENT Hair & Beauty Salon is not just another salon – it’s an
        experience. Our facial salon in Lavelle Road is designed with your
        comfort and relaxation in mind. From the serene ambiance to the
        luxurious treatments, every detail is crafted to ensure you leave
        feeling pampered and rejuvenated.
      </p>
      <p>When you visit our facial salon in Lavelle Road, you can expect:</p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Personalized Attention:{" "}
          </span>
          <p>
            Our skincare specialists take the time to understand your skin’s
            needs and tailor the treatment accordingly.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            High-Quality Products:{" "}
          </span>
          <p>
            We use only the best products from top skincare brands, ensuring
            that your skin receives the care it deserves.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Expert Techniques:{" "}
          </span>
          <p>
            Our staff is trained in the latest skincare techniques, providing
            you with results that are both immediate and long-lasting.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default FacialInLavelleXp;
