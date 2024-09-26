import React from "react";
import checked from "./../../../Images/checked.png";

const NailSalonInSahakarNagarWhy = () => {
  return (
    <div className="hairSalonInSahakaraWhy">
      <h5>Why Choose SCENT Nail Salon in Sahakar Nagar?</h5>
      <p>
        At SCENT, we combine modern techniques with personalized care to provide
        a unique nail salon experience. Here's why SCENT stands out as the best
        nail salon in Sahakar Nagar:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            1. Expert Nail Technicians{" "}
          </span>
          <p>
            Our team of professional nail technicians is highly skilled and
            trained in the latest trends and techniques. Whether you want a
            classic French manicure or intricate nail art, our technicians have
            the expertise to bring your vision to life. With a deep
            understanding of nail health, they also ensure your nails remain
            strong and beautiful for weeks.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            2. Hygiene and Cleanliness:{" "}
          </span>
          <p>
            When it comes to nail care, cleanliness is key. At SCENT, we
            prioritize hygiene to ensure a safe and comfortable environment for
            all our clients. Our nail salon in Sahakar Nagar adheres to strict
            sterilization procedures for all tools and equipment, providing
            peace of mind along with stunning nails.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            3. Wide Range of Services:{" "}
          </span>
          <p>
            From basic nail grooming to advanced nail extensions, SCENT offers a
            variety of services that cater to every preference. Our nail salon
            in Sahakar Nagar specializes in manicures, pedicures, gel nails,
            acrylics, and creative nail art that will elevate your style.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default NailSalonInSahakarNagarWhy;
