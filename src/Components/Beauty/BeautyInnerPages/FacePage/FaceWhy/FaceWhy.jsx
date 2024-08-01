import React from "react";
import "./FaceWhy.css";
import checked from "./../../../../../Images/checked.png";

const FaceWhy = () => {
  return (
    <div className="faceWhyContainer">
      <h5>
        Why Choose SCENT for Face Waxing, De-tan, and Threading in Bangalore?
      </h5>
      <p>
        SCENT stands out as a <a href="https://scentlifestyle.com/">premier salon in Bangalore</a>,
        offering personalized beauty and skincare services. Our experienced
        professionals use advanced techniques and high-quality products to
        deliver exceptional results. Here’s what makes SCENT the best choice for
        your Face Waxing, De-tan, and Threading needs:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="" />
            Expertise and Experience:{" "}
          </span>
          <p>
            {" "}
            Our team of highly trained estheticians and skincare specialists are
            experts in their fields. They bring years of experience and a keen
            understanding of different skin types and conditions, ensuring you
            receive the best possible care.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Customized Treatments:{" "}
          </span>
          <p>
            {" "}
            We understand that every client’s skin is unique. That’s why we
            offer personalized consultations to assess your skin type and
            specific concerns. Based on this assessment, we tailor our
            treatments to deliver optimal results.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Advanced Technology:{" "}
          </span>
          <p>
            {" "}
            At SCENT, we use state-of-the-art equipment and the latest
            techniques to provide safe and effective treatments. Our advanced
            technology ensures that you achieve the best possible results with
            minimal discomfort and downtime.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Luxurious Environment:{" "}
          </span>
          <p>
            {" "}
            Our salon provides a serene and luxurious environment where you can
            relax and indulge in self-care. From the moment you step in, you’ll
            be treated to a premium experience that leaves you feeling pampered
            and rejuvenated.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default FaceWhy;
