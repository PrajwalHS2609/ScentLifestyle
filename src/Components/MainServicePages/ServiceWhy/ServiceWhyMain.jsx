import React from "react";
import "./ServiceWhy.css";
import ServiceWhyCard from "./ServiceWhyCard";
import img1 from "../../../Images/HomeWhyIcons/Comprehensive Services.png";
import img2 from "../../../Images/HomeWhyIcons/Convenient Booking.png";
import img3 from "../../../Images/HomeWhyIcons/Customer Satisfaction.png";
import img4 from "../../../Images/HomeWhyIcons/Experienced Professionals.png";
import img5 from "../../../Images/HomeWhyIcons/Hygiene and Safety.png";
import img6 from "../../../Images/HomeWhyIcons/Multiple Locations.png";
import img7 from "../../../Images/HomeWhyIcons/Personalized Treatments.png";
import img8 from "../../../Images/HomeWhyIcons/Positive Reviews.png";
import img9 from "../../../Images/HomeWhyIcons/Regular Promotions and Offers.png";
import img10 from "../../../Images/HomeWhyIcons/Warm and Welcoming Atmosphere.png";

const ServiceWhyMain = () => {
  return (
    <div className="serviceWhyMainContainer">
      <ServiceWhyCard img={img1} para="Comprehensive Services" />
      <ServiceWhyCard img={img2} para="Convenient Booking" />
      <ServiceWhyCard img={img3} para="Customer Satisfaction" />
      <ServiceWhyCard img={img4} para="Experienced Professionals" />
      <ServiceWhyCard img={img5} para="Hygiene and Safety" />
      <ServiceWhyCard img={img6} para="Multiple Locations" />
      <ServiceWhyCard img={img7} para="Personalized Treatments" />
      <ServiceWhyCard img={img8} para="Positive Reviews" />
      <ServiceWhyCard img={img9} para="Regular Promotions and Offers" />
      <ServiceWhyCard img={img10} para="Warm and Welcoming Atmosphere" />
    </div>
  );
};

export default ServiceWhyMain;
