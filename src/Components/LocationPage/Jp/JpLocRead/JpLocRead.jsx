import React, { useRef, useState } from "react";
import "./JpLocRead.css";
const JpLocRead = () => {
  let [toggle, setToggle] = useState(false);
  let switchRef = useRef();
  let open = () => {
    if (!toggle) {
      setToggle(true);
      switchRef.current.style.display = "block";
    } else {
      setToggle(false);
      switchRef.current.style.display = "none";
    }
  };
  return (
    <div className="jpLocReadContainer">
      <div className="jpLocReadHeadContainer">
        <button>
          <h1 className="openBut" onClick={open}>
            Read More
          </h1>
        </button>
      </div>
      <div ref={switchRef} className="jpLocReadDisplayContainer">
        <ul>
          <li>
            Scent Salon & Spa JP Nagar, Bangalore – Your Destination for Beauty
            and Wellness!
          </li>
          <li>
            Escape the chaos of everyday life and indulge in a luxurious
            experience at Scent Salon & Spa in JP Nagar, Bangalore. Our salon
            and spa offer a wide range of services designed to help you look and
            feel your best.
          </li>
          <li>
            Conveniently located in the heart of JP Nagar, our salon provides a
            serene and welcoming environment where you can relax and unwind.
            Step into our elegant space and let our team of skilled
            professionals take care of all your beauty and wellness needs.
          </li>
          <li>
            At Scent Salon & Spa, we offer a comprehensive range of services,
            including haircuts, styling, coloring, facials, massages, manicures,
            pedicures, and more. Whether you're in need of a quick touch-up or a
            full day of relaxation, we have everything you need to pamper
            yourself from head to toe.
          </li>
          <li>
            Our experienced staff is dedicated to providing you with the highest
            quality service and personalized attention. We understand that each
            client is unique, and we tailor our treatments to suit your
            individual preferences and requirements.
          </li>
          <li>
            In addition to our regular services, Scent Salon & Spa also offers
            membership options for our loyal clients. With our membership
            program, you can enjoy exclusive benefits and discounts on our
            services, making it easier than ever to indulge in regular
            pampering.
          </li>
          <li>
            When you visit Scent Salon & Spa in JP Nagar, Bangalore, you can
            expect a warm and inviting atmosphere where you can relax and
            unwind. Our friendly staff will ensure that you feel comfortable and
            cared for throughout your visit, leaving you feeling refreshed and
            rejuvenated.
          </li>
          <li>
            So why wait? Treat yourself to the ultimate pampering experience at
            Scent Salon & Spa in JP Nagar, Bangalore. Book your appointment
            today and experience the perfect blend of luxury and relaxation.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JpLocRead;
