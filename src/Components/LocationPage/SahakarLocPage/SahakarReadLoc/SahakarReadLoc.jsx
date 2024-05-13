import React, { useRef, useState } from "react";
import "./SahakarReadLoc.css";
const SahakarReadLoc = () => {
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
    <div className="sahakarLocReadContainer">
      <div className="sahakarLocReadHeadContainer">
        <button>
          <h1 className="openBut" onClick={open}>
            Read More
          </h1>
        </button>
      </div>
      <div ref={switchRef} className="sahakarLocReadDisplayContainer">
        <ul>
          <li>
            SCENT Salon & Spa Sahakar Nagar, Bangalore – Your Ultimate Beauty
            Destination!
          </li>
          <li>
            SCENT Salon & Spa in Sahakar Nagar, Bangalore, offers a wide range
            of premium services to pamper you from head to toe. Our experienced
            team provides exceptional haircuts, facials, massages, and more,
            ensuring that you leave feeling refreshed and rejuvenated every
            time.
          </li>
          <li>
            Located in Sahakar Nagar, Bangalore, our salon is the perfect
            retreat from the hustle and bustle of daily life. Step into our
            serene oasis and let us take care of all your beauty needs.
          </li>
          <li>
            At SCENT Salon & Spa, we understand that every client is unique,
            which is why we tailor our services to suit your individual needs
            and preferences. Whether you're looking for a quick touch-up or a
            full day of pampering, our experienced team is here to make you look
            and feel your best.
          </li>
          <li>
            In addition to our exceptional services, SCENT Salon & Spa also
            offers membership options for our loyal clients. With our membership
            program, you can enjoy exclusive benefits and discounts on our
            services, ensuring that you always get the best value for your
            money.
          </li>
          <li>
            When you visit SCENT Salon & Spa, you can expect nothing but the
            highest level of professionalism and customer service. Our friendly
            and knowledgeable staff will make you feel right at home from the
            moment you walk through the door.
          </li>
          <li>
            So why wait? Treat yourself to the luxury and relaxation you deserve
            at SCENT Salon & Spa in Sahakar Nagar, Bangalore. Book your
            appointment today and experience the difference for yourself.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SahakarReadLoc;
