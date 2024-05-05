import React from "react";
import "./ServiceWhy.css";
import ServiceWhyCard from "./ServiceWhyCard";
import img1 from "../../../Images/ComprehensiveServices.png";
import img2 from "../../../Images/Convenient Booking.png";
import img3 from "../../../Images/Customer Satisfaction.png";
import img4 from "../../../Images/Experienced Professionals.png";
import img5 from "../../../Images/Hygiene and Safety.png";
import img6 from "../../../Images/Mutiple Locations.png";
import img7 from "../../../Images/Personalized Treatments.png";
import img8 from "../../../Images/Positive Reviews.png";
import img9 from "../../../Images/Regular Promotions and Offers.png";
import img10 from "../../../Images/Warm and Welcoming Atmosphere.png";

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
