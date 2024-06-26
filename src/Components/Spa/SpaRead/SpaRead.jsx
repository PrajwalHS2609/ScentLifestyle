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
      <header>
        <h1>Spa in Bangalore</h1>
      </header>
      <div className="spaReadHeadContainer">
        <ul>
          <li>
            <p>
              In today's fast-paced world, the demands and pressures of modern
              life can accumulate, leaving both our bodies and minds yearning
              for rejuvenation and relief.{" "}
              <a href="https://scentlifestyle.com/">SCENT Salon in Bangalore</a>{" "}
              offers a tranquil oasis where you can escape the hustle and
              bustle, and immerse yourself in a world of relaxation and wellness
              through our
              <a href="https://scentlifestyle.com/spa">
                {" "}
                comprehensive spa services.
              </a>
            </p>
          </li>
        </ul>
        <div ref={switchRef} className="spaReadDisplayContainer">
          <ul>
            <li>
              <h4>Head Massage</h4>
              <p>
                Experience the soothing touch of our skilled therapists as they
                release tension from your scalp, promoting relaxation and easing
                headaches.
              </p>
            </li>
            <li>
              <h4>Foot Massage</h4>
              <p>
                Indulge in the ultimate relaxation with our{" "}
                <a href="https://scentlifestyle.com/spa">foot massage</a>,
                designed to relieve stress and improve circulation, leaving you
                feeling refreshed and rejuvenated.
              </p>
            </li>
            <li>
              <h4>Thai Reflexology</h4>
              <p>
                Harnessing ancient techniques, our{" "}
                <a href="https://scentlifestyle.com/spa">
                  Thai reflexology treatments
                </a>{" "}
                target specific pressure points on your feet to restore balance
                and vitality throughout your body.
              </p>
            </li>
            <li>
              <h4>Back Massage</h4>
              <p>
                Banish back pain and stiffness with our{" "}
                <a href="https://scentlifestyle.com/spa">
                  therapeutic back massages
                </a>
                , tailored to alleviate tension and promote flexibility.
              </p>
            </li>
            <li>
              <h4>Aroma Massage</h4>
              <p>
                Invigorate your senses with our{" "}
                <a href="https://scentlifestyle.com/spa">aroma massages</a>,
                blending fragrant essential oils to calm the mind and rejuvenate
                the body.
              </p>
            </li>
            <li>
              <h4>Thai Massage</h4>
              <p>
                Experience the benefits of{" "}
                <a href="https://scentlifestyle.com/spa">
                  traditional Thai massage
                </a>
                , known for its therapeutic effects on muscle tension and energy
                flow.
              </p>
            </li>
            <li>
              <h4>Deep Tissue Massage</h4>
              <p>
                For those seeking deeper relief, our deep tissue massages target
                chronic muscle tension and improve overall mobility and
                flexibility.
              </p>
            </li>
            <li>
              <h4>Deep Tissue Massage</h4>
              <p>
                Tailored for athletes and active individuals, our sportz
                massages enhance recovery, prevent injuries, and optimize
                athletic performance.
              </p>
            </li>
            <li>
              <h4>Balinese Massage</h4>
              <p>
                Transport yourself to Bali with our{" "}
                <a href="https://scentlifestyle.com/spa">Balinese massages</a>,
                combining gentle stretches and acupressure techniques to restore
                vitality and relaxation.
              </p>
            </li>
            <li>
              <h3>SCENT Signature Massage</h3>
              <p>
                Our signature massage is a blend of techniques customized to
                your preferences, ensuring a personalized and deeply relaxing
                experience.
              </p>
            </li>
            <li>
              <h4>Stone Therapy</h4>
              <p>
                Harnessing the healing power of warm stones, our stone therapy
                massages promote relaxation, alleviate muscle tension, and
                enhance overall well-being.
              </p>
            </li>
            <li>
              <h4>Body Polish</h4>
              <p>
                Revitalize your skin with our{" "}
                <a href="https://scentlifestyle.com/spa">
                  body polish treatments
                </a>
                , which gently exfoliate and hydrate, leaving your skin soft,
                smooth, and radiant.
              </p>
            </li>
            <li>
              <h4>Body Scrub</h4>
              <p>
                Renew your skin with our{" "}
                <a href="https://scentlifestyle.com/spa">
                  luxurious body scrubs
                </a>
                , designed to cleanse, exfoliate, and revitalize your body's
                largest organ.
              </p>
              <p>
                Whether you choose a Thai Massage, Deep Tissue Massage, Calming
                Aromatherapy Massage, or any other option, a{" "}
                <a href="https://scentlifestyle.com/spa">
                  body massage at SCENT Salon
                </a>{" "}
                goes beyond relaxation—it contributes to overall health and
                well-being. Beyond massages and body treatments, our{" "}
                <a href="https://scentlifestyle.com/facial">facials</a> are
                crafted to nourish and rejuvenate your skin, while helping to
                maintain a healthy glow.
              </p>
              <p>
                At SCENT, we prioritize creating a serene and calming
                environment where you can unwind and escape from the stresses of
                everyday life. Our team of highly trained therapists ensures
                each session is tailored to your specific needs, using only the
                finest natural essential oils and premium skincare products.
              </p>
              <p>
                We are committed to offering the{" "}
                <a href="https://scentlifestyle.com/spa">
                  best spa experience in Bangalore at affordable prices
                </a>
                , ensuring our services are accessible without compromising on
                quality or comfort. Additionally, our{" "}
                <a href="https://scentlifestyle.com/salon-membership">
                  Pre-Paid Membership Plans
                </a>{" "}
                provide exceptional value, offering a range of benefits from
                discounted services to exclusive packages.
              </p>
              <p>
                Don't wait any longer to prioritize your well-being. Book your
                appointment today at <a href="https://scentlifestyle.com/"></a>{" "}
                and discover why we are renowned for being the best spa near
                you. Remember, when life gets hectic, it's essential to take
                time for yourself and indulge in the rejuvenating benefits of
                spa therapy. Treat yourself to the ultimate relaxation
                experience at SCENT Salon in Bangalore.
              </p>
            </li>
          </ul>
        </div>
        <button>
          <h2 className="openBut" onClick={open}>
            Read More
          </h2>
        </button>
      </div>
    </div>
  );
};

export default SpaRead;
