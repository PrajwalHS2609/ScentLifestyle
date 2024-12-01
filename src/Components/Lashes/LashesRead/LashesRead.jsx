import React, { useRef, useState } from "react";
import "./LashesRead.css";

const LashesRead = () => {
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
    <div className="lashesReadContainer">
      <header>
        <h1>Enhance Your Beauty with Eyelash Extensions at SCENT </h1>
      </header>
      <div className="lashesReadHeadContainer">
        <ul>
          <li>
            <p>
              Eyelash extensions have become a popular{" "}
              <a href="https://scentlifestyle.com/beauty-essentials">
                beauty treatment{" "}
              </a>
              , offering an alluring way to enhance your natural beauty with
              longer, fuller lashes. At{" "}
              <a href="https://scentlifestyle.com/"> SCENT Salon</a> ,we provide
              both temporary and{" "}
              <a href="https://scentlifestyle.com/eye-lashes">
                permanent eyelash extension services{" "}
              </a>{" "}
              tailored to meet your individual needs. Whether you're preparing
              for a special occasion or looking to add a touch of glamour to
              your everyday look, our expert technicians are here to help you
              achieve the dynamic and beautiful lashes you desire.
            </p>
          </li>
        </ul>
        <div ref={switchRef} className="lashesReadDisplayContainer">
          <ul>
            <li>
              <h4>Our Range of Eyelash Extensions</h4>
            </li>
            <li>
              <ul>
                <p>
                  At SCENT Salon, we offer a variety of eyelash extension
                  options to suit different preferences and styles. Our sets
                  include:
                </p>
                <li>
                  <span>60 Lashes Set:</span> Ideal for a subtle enhancement,
                  this set adds volume and length without being overly dramatic.
                  Perfect for those new to{" "}
                  <a href="https://scentlifestyle.com/eye-lashes">
                    eyelash extensions
                  </a>{" "}
                  or looking for a natural look.
                </li>
                <li>
                  <span>80 Lashes Set:</span> For a more noticeable
                  transformation, the 80 lashes set provides a fuller and more
                  voluminous appearance. This set is great for those who want
                  their eyes to stand out and make a statement.
                </li>
              </ul>
            </li>

            <li>
              <p>
                Each set is meticulously applied by our skilled technicians to
                ensure that your new lashes blend seamlessly with your natural
                ones, creating a look that enhances your features beautifully.
              </p>
            </li>
            <li>
              <h4>Types of Eyelash Extensions</h4>
              <p>
                We understand that every client has unique preferences, which is
                why we offer a variety of{" "}
                <a href="https://scentlifestyle.com/eye-lashes">
                  eyelash extension types
                </a>
                , each with its own distinct properties and benefits:
              </p>
              <ul>
                <li>
                  <span>Mink Lashes: </span>Known for their natural and
                  lightweight feel, mink lashes are perfect for creating a soft,
                  fluttery look. They mimic the appearance of natural lashes and
                  are ideal for clients seeking a luxurious and comfortable
                  option.
                </li>
                <li>
                  <span>Silk Lashes:</span> Slightly thicker than mink, silk
                  lashes offer a fuller, more dramatic appearance. They hold
                  their curl well and are a great choice for those looking to
                  add significant volume to their lashes.
                </li>
                <li>
                  <span> Synthetic Lashes:</span> Made from man-made materials,
                  synthetic lashes are durable and offer a bold, glamorous look.
                  They are available in various lengths and thicknesses,
                  allowing for a highly customizable appearance.
                </li>
                <li>
                  <span>Hybrid Lashes:</span> Combining the best of both worlds,
                  hybrid lashes mix the natural look of mink or silk with the
                  boldness of synthetic lashes. This option provides a textured,
                  multi-dimensional look that is both striking and
                  sophisticated.
                </li>
              </ul>
            </li>
            <li>
              <h4>Safety and Expertise</h4>
              <p>
                At SCENT Salon, your safety and satisfaction are our top
                priorities. Our technicians are highly trained in the proper
                application and{" "}
                <a href="https://scentlifestyle.com/eye-lashes">
                  removal of eyelash extensions
                </a>
                , ensuring that your natural lashes remain healthy and
                undamaged. Here’s why you can trust us with your eyelash
                extensions:
              </p>
            </li>
            <li>
              <p>
                <span>Expert Technicians: </span> Our team has undergone
                extensive training in the latest techniques and safety
                protocols. They are skilled in creating beautiful, long-lasting
                results while prioritizing the health of your natural lashes.
              </p>
            </li>
            <li>
              <p>
                <span>High-Quality Products: </span> We use only the best
                materials and adhesives that are gentle on your natural lashes
                and skin. Our products are designed to provide secure adhesion
                and long-lasting wear without causing irritation.
              </p>
            </li>
            <li>
              <p>
                <span>Customized Approach: </span> We understand that each
                client is unique, which is why we offer personalized
                consultations and tailored treatments. Your extensions will be
                customized to suit your eye shape, lash length, and desired
                look.
              </p>
            </li>
            <li>
              <p>
                <span>Proper Removal: </span> When it’s time to remove your
                extensions, trust our professionals to do it safely and
                effectively. Attempting to remove extensions at home can result
                in damage to your natural lashes. Our technicians use gentle,
                specialized products to dissolve the adhesive and remove
                extensions without harm.
              </p>
            </li>
            <li>
              <h4>Exclusive Offers</h4>
              <p>
                At SCENT Salon, we strive to make our high-end services
                accessible to everyone. We regularly feature exclusive offers
                and promotions on our eyelash extension services, allowing you
                to experience
                <a href="https://scentlifestyle.com/service">
                  {" "}
                  premium beauty treatments at competitive prices
                </a>
                . Visit our salon to explore the latest deals and enjoy the
                luxurious experience of
                <a href="https://scentlifestyle.com/eye-lashes">
                  {" "}
                  professional eyelash extensions{" "}
                </a>
                .
              </p>
              <p>
                Eyelash extensions are more than just a beauty treatment—they
                are a way to enhance your natural allure and boost your
                confidence. At SCENT Salon, we offer an array of{" "}
                <a href="https://scentlifestyle.com/eye-lashes">
                  eyelash extension
                </a>{" "}
                options, from mink to synthetic, each designed to provide
                stunning, personalized results. Our skilled technicians ensure
                that every application is performed with precision and care,
                leaving you with beautiful, long-lasting lashes.
              </p>
              <p>
                For those seeking high-quality{" "}
                <a href="https://scentlifestyle.com/eye-lashes">
                  {" "}
                  eyelash extensions in Bangalore{" "}
                </a>
                , SCENT Salon is your go-to destination. With multiple outlets
                across the city, expert application, and personalized service,
                we are committed to helping you achieve the lashes of your
                dreams.{" "}
                <a href="https://scentlifestyle.com/">Visit SCENT Salon </a>
                today and let us elevate your beauty with our exquisite eyelash
                extension services.
              </p>
            </li>
          </ul>
        </div>
        <button>
          <h2 className="openBut" onClick={open}>
          Read {toggle ? "Less" : "More"}
          </h2>
        </button>
      </div>
    </div>
  );
};

export default LashesRead;
