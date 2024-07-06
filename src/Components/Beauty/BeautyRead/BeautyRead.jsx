import React, { useRef, useState } from "react";
import "./BeautyRead.css";

const BeautyRead = () => {
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
    <div className="beautyReadContainer">
      <header>
        <h1>
          {" "}
          Rejuvenate Your Skin with Waxing, De-Tan & Threading in Bangalore at
          SCENT Salon
        </h1>
      </header>
      <div className="beautyReadHeadContainer">
        <ul>
          <li>
            <p>
              {" "}
              Looking to revitalize your youthful glow or indulge in a little
              self-care pampering? <a href="/">SCENT Salon in Bangalore</a> is
              your destination for luxurious and expertly executed services. Our
              range of treatments, including{" "}
              <a href="/beauty-essentials">waxing, de-tan, and threading</a>, will leave you
              feeling rejuvenated and transformed. Whether you want smooth,
              hair-free skin or a brightened complexion, our salon offers the
              best in beauty care.
            </p>
          </li>
          <li>
            <h2>Waxing Services in Bangalore</h2>
            <h3>Why Choose Waxing?</h3>
            <p>
              Waxing is one of the most effective ways to remove unwanted hair
              from the body. It not only removes hair from the roots, ensuring a
              longer period of smoothness but also helps in exfoliating dead
              skin cells, leaving your skin soft and radiant. At SCENT Salon, we
              offer a variety of <a href="/beauty-essentials">waxing services</a> tailored to your
              needs.
            </p>
          </li>
        </ul>
        <div ref={switchRef} className="beautyReadDisplayContainer">
          <ul>
            <li>
              <h4>Our Waxing Treatments</h4>
              <p>
                We use peel-off wax by Depileve, which is ideal for sensitive
                areas such as{" "}
                <a href="https://scentlifestyle.com/beauty-essentials">
                  Bikini & Brazilian waxing
                </a>
                . This wax is gentle on the skin and reduces the chances of
                irritation. For other areas like arms, legs, neck, and back, we
                offer soothing cartridge wax, which ensures a comfortable and
                effective{" "}
                <a href="https://scentlifestyle.com/beauty-essentials">
                  hair removal experience
                </a>
                .
              </p>
            </li>
            <li>
              <h4>Face Waxing</h4>
              <p>
                Facial hair can be a concern for many, but with our specialized{" "}
                <a href="https://scentlifestyle.com/beauty-essentials">
                  face waxing services
                </a>
                , you can achieve a smooth and hair-free face. Our experts
                ensure that the waxing process is quick and painless, leaving
                your skin smooth and radiant.
              </p>
            </li>
            <li>
              <h4>Arm Waxing</h4>
              <p>
                Say goodbye to unwanted hair on your arms with our{" "}
                <a href="https://scentlifestyle.com/beauty-essentials">
                  professional arm waxing services
                </a>
                . We use high-quality wax that ensures effective hair removal
                while being gentle on the skin.
              </p>
            </li>
            <li>
              <h4>Leg Waxing</h4>
              <p>
                Get ready to flaunt smooth and silky legs with our{" "}
                <a href="https://scentlifestyle.com/beauty-essentials">
                  leg waxing services{" "}
                </a>
                . Our experts make sure that the waxing process is thorough and
                leaves your legs hair-free and glowing.
              </p>
            </li>
            <li>
              <h4>Neck and Back Waxing</h4>
              <p>
                For those hard-to-reach areas like the neck and back, our waxing
                services ensure complete hair removal, giving you smooth and
                clear skin. Whether it's for a special occasion or regular
                maintenance, our neck and back waxing will leave you feeling
                confident and beautiful.
              </p>
            </li>
            <li>
              <h3>De-Tan Treatments in Bangalore</h3>
            </li>
            <li>
              <h4>Brighten Your Skin with De-Tan Treatments</h4>
              <p>
                Excessive sun exposure can lead to tanning and dull skin. Our{" "}
                <a href="https://scentlifestyle.com/beauty-essentials">
                  de-tan treatments
                </a>{" "}
                are designed to remove the tan and restore your natural
                complexion. We use opulent products that not only de-tan your
                skin but also nourish and hydrate it, leaving you with a bright
                and even skin tone.
              </p>
            </li>
            <li>
              <h4>Face De-Tan</h4>
              <p>
                Our{" "}
                <a href="https://scentlifestyle.com/beauty-essentials">
                  face de-tan treatments
                </a>{" "}
                are perfect for removing sun damage and brightening your
                complexion. The products used are gentle yet effective, ensuring
                that your skin feels rejuvenated and radiant.
              </p>
            </li>
            <li>
              <h4>Arm De-Tan</h4>
              <p>
                Get rid of the tan on your arms with our specialized{" "}
                <a href="https://scentlifestyle.com/beauty-essentials">
                  arm de-tan treatments
                </a>
                . Our experts will ensure that your arms are free of tan and
                your skin is nourished and glowing.
              </p>
            </li>
            <li>
              <h4>Leg De-Tan</h4>
              <p>
                Our leg de-tan treatments are designed to remove the stubborn
                tan from your legs, leaving them smooth and radiant. The
                products used are of high quality, ensuring that your skin feels
                soft and rejuvenated.
              </p>
            </li>
            <li>
              <h4>Neck and Back De-Tan</h4>
              <p>
                For those areas exposed to the sun, like the neck and back, our
                de-tan treatments are perfect for removing tan and restoring
                your natural skin tone. Our experts will ensure that your skin
                is brightened and nourished.
              </p>
            </li>
            <li>
              <h3>Threading Services in Bangalore</h3>
              <p>
                Precision Threading for Perfect Brows Threading is an ancient
                technique used for precise hair removal, especially for the
                eyebrows and facial hair. Our threading services at{" "}
                <a href="https://scentlifestyle.com/">SCENT Salon</a>
                ensure that you get perfectly shaped brows and smooth facial
                skin.
              </p>
            </li>
            <li>
              <h4>Eyebrow Threading</h4>
              <p>
                Our expert beauticians will shape your eyebrows to perfection
                using the threading technique. This method is not only precise
                but also gentle on the skin, ensuring minimal pain and
                irritation.
              </p>
            </li>
            <li>
              <h4>Upper Lip Threading</h4>
              <p>
                Get rid of unwanted hair on your upper lip with our threading
                services. Our experts ensure that the threading process is quick
                and painless, leaving your skin smooth and hair-free.
              </p>
            </li>
            <li>
              <h4>Full Face Threading</h4>
              <p>
                For those looking for a comprehensive{" "}
                <a href="https://scentlifestyle.com/beauty-essentials">
                  facial hair removal solution
                </a>
                , our full face threading services are perfect. Our experts will
                ensure that all unwanted hair is removed, giving you a smooth
                and radiant face.
              </p>
            </li>
            <li>
              <h3>Indulge in Anti-Aging Regimens</h3>
              <h4>Mesotherapy and More</h4>
              <p>
                At SCENT Salon, we offer specially curated anti-aging regimens
                featuring treatments like{" "}
                <a href="https://scentlifestyle.com/beauty-essentialsF">
                  mesotherapy
                </a>
                . These treatments are designed to rejuvenate your skin, reduce
                the appearance of fine lines and wrinkles, and give you a
                youthful glow. Our experts will customize the treatments based
                on your skin type and concerns, ensuring that you achieve the
                best results.
              </p>
            </li>
            <li>
              <h3>Book Your Appointment Today</h3>
              <p>Experience Luxurious Beauty Care</p>
              <p>
                At SCENT Salon, we believe in providing the{" "}
                <a href="https://scentlifestyle.com/service">
                  best beauty care services in Bangalore
                </a>
                . Our range of treatments, including waxing, de-tan, threading,
                and anti-aging regimens, are designed to rejuvenate your skin
                and elevate your beauty routine. Our experts use high-quality
                products and advanced techniques to ensure that you receive the
                best care possible.
              </p>
            </li>
            <li>
              <ul>
                <h4>Why Choose SCENT Salon?</h4>
                <li>
                  <span>Expert Technicians:</span> Our team of skilled
                  technicians is trained to provide the best services with
                  precision and care.
                </li>
                <li>
                  <span>High-Quality Products:</span> We use only the finest
                  products to ensure that your skin receives the best treatment.
                </li>
                <li>
                  <span> Customized Services:</span> Our treatments are tailored
                  to meet your individual needs and concerns.
                </li>
                <li>
                  <span>Luxurious Experience:</span> From the moment you step
                  into our salon, you will be treated to a luxurious and
                  relaxing experience.
                </li>
              </ul>
            </li>
            <li>
              <h4>
                Looking for the best waxing, de-tan, and threading services in
                Bangalore?{" "}
              </h4>
              <p>
                SCENT Salon is your ultimate destination. With our range of
                luxurious treatments and expert care, you can rejuvenate and
                transform your skin. Whether you want to remove unwanted hair,
                brighten your complexion, or indulge in anti-aging treatments,
                we have got you covered. Book your appointment today and
                experience the best in beauty care at SCENT Salon.
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

export default BeautyRead;
