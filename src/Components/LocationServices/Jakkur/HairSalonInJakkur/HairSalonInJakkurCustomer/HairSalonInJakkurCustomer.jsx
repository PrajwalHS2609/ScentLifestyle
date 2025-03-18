import React from "react";
import  "./HairSalonInJakkurCustomer.css"
const HairSalonInJakkurCustomer = () => {
  return (
    <div className="hairSalonInJakkurCustomer">
      <h5>Client Testimonials</h5>
      <p>
        Don’t just take our word for it – here’s what our clients have to say
        about their experiences at our Hair Salon in Jakkur:
      </p>
      <div className="hairSalonInJakkurCustomerContent">
        <p>
          <span className="quote">“</span>I had an amazing experience at the
          Hair Salon in Jakkur. The stylists are incredibly talented, and they
          made me feel so comfortable. I absolutely love my new haircut!{" "}
          <span className="quote">”</span> - <span>Sarah T. </span>
        </p>
        <p>
          <span className="quote">“</span>The Hair Salon in Jakkur is my go-to
          place for all things hair. Their coloring services are top-notch, and
          the atmosphere is always so relaxing. Highly recommend!
          <span className="quote">”</span> - <span>John R . </span>
        </p>
       
      </div>
    </div>
  );
};

export default HairSalonInJakkurCustomer;
