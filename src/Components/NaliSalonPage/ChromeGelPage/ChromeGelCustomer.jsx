import React from "react";
import NailSalonTestimonialCard from "../NailSalonTestimonial/NailSalonTestimonialCard";

const ChromeGelCustomer = () => {
  return (
    <div className="gelNailArtTestimonialContainer">
      <h5>Customer Testimonials</h5>
      <p>
        Here are a few testimonials from clients who have experienced chrome gel
        polish in Bangalore at SCENT Salon:
      </p>
      <div className="gelNailArtTestimonialContent">
        <NailSalonTestimonialCard
          para="I am absolutely in love with my chrome gel nails! SCENT Salon did an amazing job, and the finish is flawless. I’ve received so many compliments!"
          name="Anjali R"
        />
        <NailSalonTestimonialCard
          para="The chrome gel polish at SCENT Salon is top-notch. The technicians are skilled, and the salon is clean and inviting. Highly recommend!"
          name="Priya S"
        />
        <NailSalonTestimonialCard
          para="SCENT Salon is my go-to place for chrome gel polish in Bangalore. The quality and service are unmatched, and my nails always look stunning."
          name="Neha K"
        />
      </div>
    </div>
  );
};

export default ChromeGelCustomer;
