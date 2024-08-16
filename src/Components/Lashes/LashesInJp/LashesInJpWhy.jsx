import React from "react";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";
import checked from "./../../../Images/checked.png";

const LashesInJpWhy = () => {
  return (
    <div className="HairSalonJpWhy">
      <h5>Why Choose SCENT for Eye Lashes in JP Nagar?</h5>
      <p>
        When it comes to your lashes, you deserve the best. Our services for Eye
        Lashes in JP Nagar are designed to provide you with high-quality,
        long-lasting results. Here's why SCENT is the top choice for eyelash
        treatments in the area:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Expert Technicians:{" "}
          </span>
          <p>
            Our team of skilled technicians is highly trained in the latest lash
            techniques. Whether you're looking for lash extensions, lifts, or
            tinting, our experts ensure that you get the best Eye Lashes in JP
            Nagar.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" /> Customizable Treatments:
          </span>
          <p>
            We understand that every client has unique needs. That's why our Eye
            Lashes in JP Nagar services are fully customizable. From the length
            and thickness of your lashes to the curl and overall look, you can
            tailor your treatment to suit your personal style.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            High-Quality Products:{" "}
          </span>
          <p>
            {" "}
            At SCENT, we use only the finest products for our Eye Lashes in JP
            Nagar services. Our lashes are made from high-quality materials that
            are safe, durable, and designed to look as natural as possible.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Comfortable Experience:{" "}
          </span>
          <p>
            We strive to make your visit as relaxing as possible. Our
            comfortable, clean, and stylish salon environment in JP Nagar
            ensures that your Eye Lashes in JP Nagar experience is both
            enjoyable and satisfying.
          </p>
        </li>
      </ul>
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
    </div>
  );
};

export default LashesInJpWhy;
