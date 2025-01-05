import React from "react";
import check from "./../../../Images/checked.png";
import "./../HairSubService.css"

const DandruffTreatmentWhyChoose = () => {
  return (
    <div className="hairSubServiceWhy">
      <h5>Why Choose SCENT for Dandruff Treatment in Bangalore?</h5>
      <p>
        At SCENT, we understand the nuances of scalp health and the importance
        of personalized care. Here’s why our dandruff treatment in Bangalore
        stands out:
      </p>
      <br />
      <ul>
        <li>
          <span>
            <img src={check} alt="check" />
            Expert Diagnosis{" "}
          </span>
          <p>
            Our experienced specialists conduct a thorough scalp analysis to
            identify the underlying causes of your dandruff, ensuring a targeted
            treatment plan.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={check} alt="check" />
            Customized Solutions{" "}
          </span>
          <p>
            We offer personalized treatments that cater to your specific scalp
            condition, hair type, and lifestyle. Our goal is to provide
            solutions that work effectively and sustainably.
          </p>
        </li>
        <li>
          <span>
            <img src={check} alt="check" />
            Premium Products{" "}
          </span>
          <p>
            Our treatments use dermatologist-approved, high-quality products
            designed to combat dandruff without causing harm to your scalp or
            hair.
          </p>
        </li>
        <li>
          <span>
            <img src={check} alt="check" />
            Advanced Techniques{" "}
          </span>
          <p>
            We combine traditional remedies with modern techniques, ensuring a
            holistic approach to treating dandruff. From deep cleansing to
            nourishing therapies, our methods are both effective and relaxing.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={check} alt="check" />
            Hygienic and Comfortable Environment{" "}
          </span>
          <p>
            Your comfort and safety are our priorities. We maintain the highest
            standards of hygiene, ensuring a stress-free and pleasant experience
            during your visit.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default DandruffTreatmentWhyChoose;
