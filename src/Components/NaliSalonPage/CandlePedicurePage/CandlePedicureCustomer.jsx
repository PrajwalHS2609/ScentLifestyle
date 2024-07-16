import React from "react";
import NailSalonTestimonialCard from "../NailSalonTestimonial/NailSalonTestimonialCard";

const CandlePedicureCustomer = () => {
  return (
    <div className="gelNailArtTestimonialContainer">
      <h5>Testimonials from Our Satisfied Clients</h5>
      <p>
        Don't just take our word for it. Here's what some of our satisfied
        clients have to say about their Candle Spa Pedicure in Bangalore
        experience at SCENT:
      </p>
      <div className="gelNailArtTestimonialContent">
        <NailSalonTestimonialCard
          para="The Candle Spa Pedicure in Bangalore at SCENT is a must-try! The ambiance is so relaxing, and my feet have never felt better."
          name="Ananya R."
        />
        <NailSalonTestimonialCard
          para="SCENT has the best pedicure in Bangalore. The candlelight adds such a calming touch, and the staff are amazing."
          name="Priya K"
        />
        <NailSalonTestimonialCard
          para="I love coming to SCENT for their Candle Spa Pedicure. The service is top-notch, and the entire experience is so soothing."
          name="Rohan S"
        />
      </div>
    </div>
  );
};

export default CandlePedicureCustomer;
