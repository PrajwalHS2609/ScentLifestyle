import React from "react";
import NailSalonTestimonialCard from "./NailSalonTestimonialCard";

const NailSalonTestimonialMain = () => {
  return (
    <div className="nailTestimonialMainContainer">
      <NailSalonTestimonialCard
        para="I’ve been to many nail salons in Bangalore, but SCENT Salon is by far the best. The technicians are incredibly skilled, and the range of services is amazing. I always leave with beautiful nails that get so many compliments!"
        name="- Priya S"
      />
      <NailSalonTestimonialCard
        para="The atmosphere at SCENT Salon is so relaxing, and the staff is very professional. I love getting my nails done here—the quality of the products and the attention to detail are unmatched."
        name="- Anita R"
      />
      <NailSalonTestimonialCard
        para="I booked a manicure and pedicure for my wife’s birthday, and she was thrilled with the results. The nail art was stunning, and the service was top-notch. Highly recommend SCENT Salon!"
        name="- Ravi M"
      />
    </div>
  );
};

export default NailSalonTestimonialMain;
