import React from "react";
import checked from "./../../../Images/checked.png";

const MulletHairCutDestination = () => {
  return (
    <div className="faceWhyContainer">
      <h5>SCENT Salon: Your Destination for the Modern Mullet Haircut</h5>
      <p>
        At SCENT Salon, we are committed to providing our clients with an
        exceptional salon experience. When you choose us for your Modern Mullet
        Haircut for Women in Bangalore, you can expect:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="" />
            Expert Stylists{" "}
          </span>
          <p>
            Our team of skilled stylists is trained in the latest haircut
            techniques, ensuring that you receive the best service possible.
            They understand the intricacies of the modern mullet and will work
            with you to create a look that complements your features and
            personal style.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Personalized Consultations{" "}
          </span>
          <p>
            We believe in the importance of a personalized approach. During your
            consultation, our stylists will take the time to understand your
            hair type, lifestyle, and preferences. We’ll help you choose the
            perfect length and style for your modern mullet.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
             High-Quality Products{" "}
          </span>
          <p>
            At SCENT Salon, we use only premium hair care products to nourish
            and protect your hair. Our stylists will recommend the best products
            for maintaining your modern mullet, ensuring that your hair stays
            healthy and vibrant.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
             Relaxing Atmosphere{" "}
          </span>
          <p>
            We strive to create a welcoming and relaxing environment for our
            clients. Enjoy a soothing atmosphere as you prepare for your
            transformation. Our goal is to make your salon experience enjoyable
            and stress-free.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default MulletHairCutDestination;
