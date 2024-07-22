import React from "react";
import "./OrganicFacialCustomer.css"
const OrganicFacialCustomer = () => {
  return (
    <div className="organicFacialCustomerContainer">
      <h5>
        Testimonials: What Our Clients Say About Our Organic Facial Services in
        Bangalore
      </h5>
      <p>
        Don’t just take our word for it; hear what our clients have to say about
        our{" "}
        <a href="https://scentlifestyle.com/organic-facial-services">
          organic facial services in Bangalore
        </a>
        :
      </p>
      <div className="organicFacialCustomerContent">
        <p>
          <span className="quote">“</span>I’ve tried many facials in Bangalore,
          but the organic facials at SCENT are by far the best. My skin has
          never looked or felt better. <span className="quote">”</span> -{" "}
          <span>Ananya s. </span>
        </p>
        <p>
          <span className="quote">“</span> SCENT’s organic facial services in
          Bangalore are a game-changer. I love that they use natural ingredients
          and my skin feels so rejuvenated after each session{" "}
          <span className="quote">”</span> - <span>Rhea M. </span>
        </p>
        <p>
          <span className="quote">“</span> Choosing SCENT for my Bridal Makeup
          Packages in Bangalore was the best decision. The team was fantastic,
          and the on-site services made everything so convenient. I highly
          recommend them! <span className="quote">”</span> -{" "}
          <span>Priya K. </span>
        </p>
      </div>
    </div>
  );
};

export default OrganicFacialCustomer;
