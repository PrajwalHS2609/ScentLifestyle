import React from "react";
import "./NailExtensionType.css";
import InnerCard from "../../../InnerServicePage/InnerCard/InnerCard";
const NailExtensionType = () => {
  return (
    <div className="nailExtensionType">
      <h5>Types of Nail Extensions Available</h5>
      <p>
        At SCENT , we offer a variety of nail extension options to cater to
        your specific needs:
      </p>
      <div className="nailExtensionTypeCard">
        <InnerCard
          head="Acrylic Extensions"
          para=" Known for their durability and strength, acrylic nails are ideal for those seeking long-lasting enhancements."
        />
        <InnerCard
          head="Gel Extensions"
          para="These provide a more natural look and feel, with a glossy finish that’s perfect for everyday wear."
        />
        <InnerCard
          head="Fiberglass Extensions"
          para="A lighter option that’s less damaging to natural nails, fiberglass extensions are great for a subtle boost. "
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

export default NailExtensionType;
