import React from "react";
import NailSalonTestimonialCard from "../../NaliSalonPage/NailSalonTestimonial/NailSalonTestimonialCard";

const BridalCustomer = () => {
  return (
    <div className="gelNailArtTestimonialContainer">
      <h5>Testimonials from Our Satisfied Brides</h5>
      <p>
        Don’t just take our word for it. Here’s what some of our satisfied
        brides have to say about their experience with SCENT’s Bridal Makeup
        Artists in Bangalore:
      </p>
      <div className="gelNailArtTestimonialContent">
        <NailSalonTestimonialCard
          para="SCENT made my wedding day so special. The makeup was flawless, and the team was so professional. I couldn’t have asked for a better experience."
          name="Ananya R"
        />
        <NailSalonTestimonialCard
          para="The Bridal Makeup Artists in Bangalore at SCENT are amazing! They understood exactly what I wanted and made me feel beautiful on my big day."
          name="Priya K"
        />
        <NailSalonTestimonialCard
          para="I highly recommend SCENT for any bride-to-be. The trial session was incredibly helpful, and the final look was everything I dreamed of. Thank you, SCENT!"
          name="Sneha S"
        />
      </div>
    </div>
  );
};

export default BridalCustomer;
