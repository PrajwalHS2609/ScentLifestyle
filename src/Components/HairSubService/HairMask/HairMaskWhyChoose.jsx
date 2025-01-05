import React from "react";
import check from "./../../../Images/checked.png";

const HairMaskWhyChoose = () => {
  return (
    <div className="hairSubServiceWhy">
      <h5>SCENT: Your Go-To Destination for Hair Masks in Bangalore</h5>
      <p>
        At SCENT, we understand the unique hair care needs of our clients. Our
        range of{" "}
        <a href="https://scentlifestyle.com/hair-spa">
          hair masks in Bangalore
        </a>{" "}
        is curated to provide targeted solutions for every hair type and
        concern. Whether you’re dealing with dryness, split ends, or lackluster
        hair, we have the perfect treatment for you.
      </p>
      <br />
      <h6>Why Choose SCENT for Hair Masks?</h6>
      <ul>
        <li>
          <span>
            <img src={check} alt="check" />
            Customized Solutions:{" "}
          </span>
          <p>
            We believe that no two heads of hair are the same. Our experts
            assess your hair type and concerns to recommend the most suitable
            hair mask treatment.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={check} alt="check" />
            Premium Ingredients:{" "}
          </span>
          <p>
            We use high-quality, natural ingredients known for their
            hair-nourishing properties, ensuring effective and safe results.{" "}
          </p>
        </li>
        <li>
          <span>
            <img src={check} alt="check" />
            Expert Application:{" "}
          </span>
          <p>
            Our skilled professionals are trained in applying hair masks for
            maximum benefit, ensuring every strand is coated and treated
            effectively.
          </p>
        </li>
        <li>
          <span>
            <img src={check} alt="check" />
            Relaxing Experience:{" "}
          </span>
          <p>
            At SCENT, your hair care session is not just a treatment but a
            rejuvenating experience. Enjoy a calming ambiance while we work our
            magic on your hair.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={check} alt="check" />
            Affordable Luxury:{" "}
          </span>
          <p>
            Get the best hair masks in Bangalore at competitive prices without
            compromising on quality.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default HairMaskWhyChoose;
