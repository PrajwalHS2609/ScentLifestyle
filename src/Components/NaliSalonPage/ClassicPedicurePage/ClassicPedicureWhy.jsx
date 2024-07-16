import React from "react";
import checked from "./../../../Images/checked.png";

const ClassicPedicureWhy = () => {
  return (
    <div className="nailExtensionWhy">
      <h5> Why Choose SCENT for Your Classic Pedicure?</h5>
      <p>
        At SCENT, we believe that every individual deserves a pampering
        experience that is both revitalizing and therapeutic. Our Classic
        Pedicure offers a blend of traditional techniques and modern practices
        to ensure that your feet are not only beautiful but also healthy. Here’s
        why you should choose SCENT for your next pedicure:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="" />
            Expert Technicians:
          </span>
          Our team of skilled and experienced technicians are trained in the
          latest pedicure techniques. They pay meticulous attention to detail,
          ensuring that every aspect of your pedicure is perfect.
        </li>
        <li>
          <span>
            <img src={checked} alt="" /> Hygienic Practices:{" "}
          </span>{" "}
          We adhere to the highest standards of hygiene and sanitation. Our
          tools and equipment are sterilized after each use, and we use
          disposable liners for foot baths to ensure a clean and safe
          environment.
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Premium Products:{" "}
          </span>{" "}
          At SCENT, we use only the finest quality products for our pedicures.
          Our range includes natural and organic products that are gentle on
          your skin and nails, ensuring that you receive the best care possible.
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Relaxing Ambiance:{" "}
          </span>{" "}
          Our salon is designed to provide a tranquil and serene environment
          where you can relax and unwind. From soothing music to comfortable
          seating, every detail is crafted to enhance your experience.  
        </li>
      </ul>
    </div>
  );
};

export default ClassicPedicureWhy;
