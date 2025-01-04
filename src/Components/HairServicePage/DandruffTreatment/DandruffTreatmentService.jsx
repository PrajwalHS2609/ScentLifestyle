import React from "react";
import point from "./../../../Images/point.png";

const DandruffTreatmentService = () => {
  return (
    <div className="hairSalonInSahakaraWhy">
      <h5>Our Dandruff Treatment Services</h5>
      <p>
        SCENT offers a comprehensive range of{" "}
        <a href="https://scentlifestyle.com/hair-spa">
          dandruff treatments in Bangalore
        </a>
        , each tailored to address different aspects of scalp health. Here’s an
        overview of our offerings:
      </p>
      <br />
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Deep Cleansing Scalp Treatment{" "}
          </span>
          <p>
            A thorough cleansing session removes product build-up, dirt, and
            excess oil, creating a clean slate for further treatments. This
            service is ideal for those with oily or clogged scalps.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Anti-Fungal Scalp Therapy{" "}
          </span>
          <p>
            Using specialized anti-fungal products and techniques, this therapy
            targets Malassezia and other fungal infections, reducing flaking and
            irritation.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Hydrating Scalp Treatment{" "}
          </span>
          <p>
            For those with a dry and itchy scalp, our hydrating treatments
            restore moisture balance, soothe irritation, and prevent further
            flaking.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Nourishing Hair Masks{" "}
          </span>
          <p>
            Enriched with natural oils and nutrients, our hair masks not only
            treat dandruff but also improve overall scalp health and hair
            texture.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Herbal Remedies{" "}
          </span>
          <p>
            We offer treatments featuring herbal ingredients like neem, tea tree
            oil, and aloe vera, known for their anti-dandruff and soothing
            properties.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Stress-Relief Scalp Massage{" "}
          </span>
          <p>
            Stress can worsen dandruff symptoms. Our relaxing scalp massages
            improve blood circulation, reduce stress, and promote overall scalp
            health.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default DandruffTreatmentService;
