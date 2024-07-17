import React from "react";
import NailSalonTestimonialCard from "../../NaliSalonPage/NailSalonTestimonial/NailSalonTestimonialCard";

const MicroBladingCustomer = () => {
  return (
    <div className="gelNailArtTestimonialContainer">
      <h5>Testimonials from Our Satisfied Brides</h5>
      <p>
        Don’t just take our word for it. Here’s what some of our satisfied
        clients have to say about their Eyebrow Microblading in Bangalore
        experience at SCENT:
      </p>
      <div className="gelNailArtTestimonialContent">
        <NailSalonTestimonialCard
          para="The best decision I made was choosing SCENT for my eyebrow microblading. The process was smooth, and the results are amazing"
          name="Ananya R"
        />
        <NailSalonTestimonialCard
          para="I am thrilled with my new brows! The microblading looks so natural, and I receive compliments all the time. Thank you, SCENT!"
          name="Priya K"
        />
        <NailSalonTestimonialCard
          para="SCENT’s eyebrow microblading has transformed my look. I love waking up with perfect brows every day!"
          name="Sneha S"
        />
      </div>
    </div>
  );
};

export default MicroBladingCustomer;
