import React, { useRef, useState } from "react";
import "./ServiceRead.css";

const ServiceRead = () => {
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
    <div className="serviceReadContainer">
      <header>
        <h1>Salon Services in Bangalore</h1>
      </header>
      <div className="serviceReadHeadContainer">
        <ul>
          <li>
            Welcome to{" "}
            <a href="https://scentlifestyle.com/service">
              SCENT Salon Services
            </a>
            , your ultimate destination for luxury beauty and wellness in
            Bangalore. Nestled in the heart of the city, SCENT Salon offers a
            sanctuary where you can escape the hustle and bustle of everyday
            life and indulge in a world of relaxation, rejuvenation, and beauty.
          </li>
          <li>
            At{" "}
            <a href="https://scentlifestyle.com/service">
              SCENT Salon Services in Bangalore
            </a>
            , we believe that true beauty starts from within, and our mission is
            to help you look and feel your absolute best. Our team of skilled
            and experienced professionals is dedicated to providing you with
            personalized services that cater to your unique needs and
            preferences. Whether you're in need of a{" "}
            <a href="https://scentlifestyle.com/hair-salon">
              {" "}
              fresh haircut and style{" "}
            </a>
            ,{" "}
            <a href="https://scentlifestyle.com/facial">
              a revitalizing facial
            </a>
            , a <a href="https://scentlifestyle.com/spa">soothing massage </a>,
            or a <a href="https://scentlifestyle.com/spa"> pampering manicure and pedicure </a>, we have you
            covered.
          </li>
        </ul>
        <div ref={switchRef} className="serviceReadDisplayContainer">
          <ul>
            <li>
              Our salon boasts a modern and welcoming atmosphere designed to
              make you feel comfortable and at ease from the moment you walk
              through our doors. We use only the highest quality products and
              cutting-edge techniques to ensure that you receive top-notch
              results with every visit.
            </li>
            <li>
              At SCENT{" "}
              <a href="https://scentlifestyle.com/service">
                {" "}
                Salon Services in Bangalore{" "}
              </a>
              , we understand that beauty is not one-size-fits-all. That's why
              we take the time to listen to your concerns and preferences before
              customizing a treatment plan that's tailored to your individual
              needs. Whether you're looking for a bold new hairstyle, a relaxing
              spa experience, or expert skincare advice, our team is here to
              help you achieve your goals.
            </li>
            <li>
              In addition to our comprehensive range of{" "}
              <a href="https://scentlifestyle.com/">
                salon services in Bangalore{" "}
              </a>
              ,{" "}
              <a href="https://scentlifestyle.com/salon-membership">
                we also offer special packages
              </a>{" "}
              for weddings, parties, and other special occasions, as well as
              ongoing promotions and discounts to make your beauty regimen more
              affordable.
            </li>
            <li>
              Experience the luxury of{" "}
              <a href="https://scentlifestyle.com/service">
                SCENT Salon Services in Bangalore
              </a>{" "}
              and discover a new level of beauty and wellness. Schedule your
              appointment today and let us help you look and feel your best.
            </li>
            <li>
              Experience luxury and convenience at its finest as you say goodbye
              to the hassle of visiting multiple salon parlors for your beauty
              needs. SCENT, synonymous with elegance, is your ultimate
              destination for all your hair, skin, and grooming services.
              Located in the heart of Bangalore's prime hotspots, our unisex
              salon invites you to indulge in a journey of unparalleled luxury.
              Explore our exquisite range of services and take advantage of our
              exclusive offers, all conveniently located at a salon near you.
            </li>
            <li>
              Discover our budget-friendly salon offers on{" "}
              <a href="https://scentlifestyle.com/hair-salon">hair care</a>,{" "}
              <a href="https://scentlifestyle.com/beauty-essentials">
                skin care
              </a>
              ,<a href="https://scentlifestyle.com/shop">products</a>, and{" "}
              <a href="https://scentlifestyle.com/spa">
                {" "}
                special therapies & rituals{" "}
              </a>
              . Designed to help you save money, our offers provide the best
              combinations from our wide range of beauty services. SCENT{" "}
              <a href="https://scentlifestyle.com/service">
                {" "}
                Salon Services in Bangalore{" "}
              </a>
              , offers not only save you money but also offer the flexibility of
              availing the service across any of our outlets. Stay updated
              through our Salon offers section and enjoy what you truly deserve
              the best. Welcome to the SCENT Salon Spa!
            </li>
          </ul>
        </div>
        <button>
          <h2 className="openBut" onClick={open}>
          Read {toggle ? "More" : "Less"}
          </h2>
        </button>
      </div>
    </div>
  );
};

export default ServiceRead;
