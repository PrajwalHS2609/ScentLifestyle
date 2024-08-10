import React from "react";
import "./GelNailArtCustomer.css";
import NailSalonTestimonialCard from "../NailSalonTestimonial/NailSalonTestimonialCard";
const GelNailArtCustomer = () => {
  return (
    <div className="gelNailArtTestimonialContainer">
      <h5>Customer Testimonials</h5>
      <p>
        Many satisfied clients have experienced the joy of "Gel Nail Art in
        Bangalore" at SCENT Salon. Here’s what some of them have to say:
      </p>
      <div className="gelNailArtTestimonialContent" id="gelNailArtTestimonialContent">
        <NailSalonTestimonialCard
          para="I love my gel nails! They last so long and look amazing. The team at SCENT Salon is fantastic!"
          name="Priya S"
        />
        <NailSalonTestimonialCard
          para="The designs they create are incredible. I always get compliments on my nails."
          name="Anita R"
        />
        <NailSalonTestimonialCard
          para="The best gel nail art in Bangalore. Highly recommend SCENT Salon for their professionalism and creativity."
          name="Meera K"
        />
      </div>
    </div>
  );
};

export default GelNailArtCustomer;
