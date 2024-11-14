import React from "react";
import checked from "./../../../Images/checked.png";

const HairColouredSpaWhy = () => {
  return (
    <div className="hairSalonInSahakaraWhy">
      <h5>
        Why SCENT is the Top Choice for Hair Spa for Colored Hair in Bangalore
      </h5>
      <p>
        At SCENT, we pride ourselves on offering premium hair spa services
        specifically crafted to protect and enhance color-treated hair. Here’s
        why we’re the go-to choice for hair care in Bangalore:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Expert Stylists with Experience in Color-Treated Hair{" "}
          </span>
          <p>
            Our team of skilled stylists is well-versed in the unique care that
            colored hair demands. They bring their expertise to every session,
            ensuring your hair receives the best possible treatment.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Top-Quality, Color-Safe Products{" "}
          </span>
          <p>
            We only use products designed to maintain and protect hair color.
            These high-quality, color-safe products prevent fading while
            delivering exceptional hydration and nourishment.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Customized Treatments for Every Hair Type{" "}
          </span>
          <p>
            No two clients are the same, and we believe in providing treatments
            that address individual needs. From fine to thick and curly to
            straight, our spa services are customized to cater to each unique
            hair type
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Relaxing, Luxurious Environment{" "}
          </span>
          <p>
            The SCENT experience is designed to be relaxing and luxurious. Our
            tranquil spa setting allows you to unwind as our experts work their
            magic on your hair, providing a refreshing escape from the hustle
            and bustle of Bangalore.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default HairColouredSpaWhy;
