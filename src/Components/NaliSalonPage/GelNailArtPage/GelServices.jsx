import React from "react";
import InnerCard from "../../InnerServicePage/InnerCard/InnerCard";

const GelServices = () => {
  return (
    <div className="nailExtensionType">
      <h5>Services Offered by SCENT </h5>
      <p>
        SCENT in Bangalore is known for its exceptional services in "{" "}
        <a href="https://scentlifestyle.com/nails-salon">
          Gel Nail Art in Bangalore
        </a>{" "}
        ". The salon offers a wide range of{" "}
        <a href="https://scentlifestyle.com/nails-salon">gel nail designs</a>,
        ensuring there's something for everyone.:
      </p>
      <div className="nailExtensionTypeCard">
        <InnerCard
          head="Classic Gel Polish: "
          para="Choose from a wide variety of colors for a sleek, classic look."
        />
        <InnerCard
          head="Gel Nail Extensions"
          para="Perfect for those who want longer nails, extensions are applied and then coated with gel polish for a seamless look."
        />
        <InnerCard
          head="Nail Art: "
          para="From simple stripes and polka dots to complex floral designs and geometric patterns, SCENT's skilled technicians can create any look you desire. "
        />
        <InnerCard
          head="3D Nail Art: "
          para="Add some dimension to your nails with 3D embellishments such as rhinestones, beads, and other decorative elements."
        />
        <InnerCard
          head="Seasonal and Thematic Designs "
          para="Celebrate holidays and special occasions with themed nail art that captures the spirit of the season. "
        />
      </div>
      <p>
        Each type of{" "}
        <a href="https://scentlifestyle.com/nails-salon">
          nail extension in Bangalore at SCENT
        </a>{" "}
        is applied with precision and care, ensuring that your nails remain
        healthy and beautiful.
      </p>
    </div>
  );
};

export default GelServices;
