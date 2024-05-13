import React, { useRef, useState } from "react";
import "./LavellelReadLoc.css";
const LavellelReadLoc = () => {
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
    <div className="lavellelLocReadContainer">
      <div className="lavellelLocReadHeadContainer">
        <button>
          <h1 className="openBut" onClick={open}>
            Read More
          </h1>
        </button>
      </div>
      <div ref={switchRef} className="lavellelLocReadDisplayContainer">
        <ul>
          <li>
            Experience Luxury at Scent Salon & Spa in Lavelle Road, Bangalore
          </li>
          <li>
            Welcome to Scent Salon & Spa, your ultimate destination for luxury
            beauty and wellness services in the heart of Lavelle Road,
            Bangalore. Situated in one of the city's most vibrant neighborhoods,
            our salon offers a wide range of services designed to pamper and
            rejuvenate you from head to toe.
          </li>
          <li>
            <h2>Discover a Haven of Relaxation</h2>
            Step into our salon and immerse yourself in a haven of relaxation.
            Our tranquil ambiance and attentive staff create the perfect
            atmosphere for you to unwind and indulge in a variety of spa
            treatments, hair services, nail care, and more.
          </li>
          <li>
            <h2>Luxurious Spa Treatments</h2>
            At Scent Salon & Spa, we believe in the transformative power of spa
            treatments. Whether you're looking to de-stress with a soothing
            massage, rejuvenate your skin with a facial, or pamper yourself with
            a body scrub, our expert therapists are here to cater to your every
            need. Indulge in our signature spa experiences and let the stresses
            of the day melt away.
          </li>
          <li>
            <h2>Expert Hair Services</h2>
            Our salon boasts a team of skilled hairstylists who are passionate
            about helping you achieve the perfect look. From precision haircuts
            to vibrant hair color and luxurious hair treatments, we offer a
            comprehensive range of services to cater to all your hair care
            needs. Whether you're in the mood for a sleek blowout or a glamorous
            updo, we'll ensure you leave our salon looking and feeling your
            best.
          </li>
          <li>
            <h2>Pampering Nail Care</h2>
            Treat your hands and feet to some well-deserved pampering with our
            nail care services. From manicures and pedicures to nail extensions
            and nail art, our talented nail technicians will leave your nails
            looking flawless and fabulous. Whether you prefer a classic French
            manicure or a bold and trendy design, we'll help you express your
            unique style.
          </li>
          <li>
            <h2>Exclusive Beauty Essentials</h2>
            Enhance your natural beauty with our range of beauty essentials.
            From eyebrow shaping and threading to eyelash extensions and makeup
            services, we offer everything you need to look and feel your best
            for any occasion. Our experienced beauty professionals will work
            with you to create a customized look that highlights your features
            and complements your personal style.
          </li>
          <li>
            <h2>Visit Us Today</h2>
            Come experience the luxury of Scent Salon & Spa in Lavelle Road,
            Bangalore. Whether you're treating yourself to a day of pampering or
            preparing for a special event, our dedicated team is here to ensure
            you leave feeling refreshed, rejuvenated, and ready to take on the
            world. Book your appointment today and discover why we're the
            premier destination for beauty and wellness in Bangalore's bustling
            Lavelle Road neighborhood.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LavellelReadLoc;
