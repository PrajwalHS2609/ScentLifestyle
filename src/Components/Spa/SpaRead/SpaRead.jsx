import React, { useRef, useState } from "react";
import "./SpaRead.css";

const SpaRead = () => {
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
    <div className="spaReadContainer">
      <div className="spaReadHeadContainer">
        <button>
          <h1 className="openBut" onClick={open}>
            Read More
          </h1>
        </button>
      </div>
      <div ref={switchRef} className="spaReadDisplayContainer">
        <ul>
          <li>
            In today's fast-paced world, the stresses of modern life can take a
            toll on both our bodies and minds. Spa therapy offers a solution,
            providing relaxation, rejuvenation, and helping you become the best
            version of yourself.
          </li>
          <li>
            Whether it's a Thai Massage, Deep Tissue Massage, Calming
            Aromatherapy Massage, or any other option, a body massage can
            relieve pain and mental tension. Additionally, body scrubs, body
            wraps, and facials can help maintain good skin health, enhance
            beauty, and boost immunity.
          </li>
          <li>
            At SCENT, our goal is to create a peaceful and calming environment
            for you to unwind in. With a wide range of therapy options, highly
            trained therapists, and the use of pure, natural essential oils, we
            strive to offer the best spa experience in Bangalore at affordable
            prices. Our spas provide a professional and safe environment, with
            same-gender therapies available. Plus, our Pre-Paid Membership Plans
            offer excellent value for your money, with benefits ranging from
            body massages and scrubs to facials and spa packages.
          </li>
          <li>
            Don't hesitate any longer – book your appointment today and discover
            why SCENT is the best spa near you! Remember, when you're pressed
            for time, that's when you need a spa treatment the most!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SpaRead;
