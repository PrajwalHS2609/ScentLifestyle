import React from "react";
import check from "./../../../../../Images/checked.png";

const AcademyEnrollWhy = () => {
  return (
    <div className="blogWhat-content">
      <h5>Why Choose the Best Salon Academy of Bangalore?</h5>
      <p>
        Choosing the right training institute is crucial for a successful career
        in the beauty industry. Here’s why our Salon Academy in Bangalore stands
        out:
      </p>
      <ul>
        <li>
          <span>
            <img src={check} alt="checked" />
            Proven Track Record:          </span>
          <p>
             Hundreds of students have graduated from our
            academy and are now thriving in the beauty industry.
          </p>
        </li>
        <li>
          <span>
            <img src={check} alt="checked" />
            Customized Learning Paths:          </span>
          <p>
             Whether you’re a beginner or looking to
            specialize in a specific area, we offer courses tailored to your
            needs.
          </p>
        </li>
        <li>
          <span>
            <img src={check} alt="checked" />
            Inspiring Environment:          </span>
          <p>
             Our academy fosters creativity, innovation,
            and excellence, motivating students to achieve their full potential.
          </p>
        </li>
        <li>
          <span>
            <img src={check} alt="checked" />
            Support Beyond Graduation:          </span>
          <p>
             Even after you complete your course,
            our team is here to guide you with career advice, advanced training,
            and alumni benefits.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default AcademyEnrollWhy;
