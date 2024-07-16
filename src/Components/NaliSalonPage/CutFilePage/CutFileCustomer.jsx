import React from "react";

const CutFileCustomer = () => {
  return (
    <div className="gelNailArtTestimonialContainer">
      <h5>Customer Testimonials</h5>
      <p>
        Here are a few testimonials from clients who have experienced chrome gel
        polish in Bangalore at SCENT Salon:
      </p>
      <div className="gelNailArtTestimonialContent">
        <NailSalonTestimonialCard
          para="SCENT offers the best nail care services in Bangalore. The attention to detail is incredible, and the ambiance is so relaxing"
          name="Rohan S"
        />
        <NailSalonTestimonialCard
          para="I love coming to SCENT for their Nails Cut & File in Bangalore. The technicians are so professional, and my nails always look perfect."
          name="Priya K"
        />
        <NailSalonTestimonialCard
          para="I've tried many nail salons in Bangalore, but SCENT is by far the best. Their Nails Cut & File service is top-notch, and I always leave feeling pampered"
          name="Ananya R"
        />
      </div>
    </div>
  );
};

export default CutFileCustomer;
