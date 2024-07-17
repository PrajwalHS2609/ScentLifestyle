import React from "react";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";

const ClassicPedicureHead = () => {
  return (
    <div className="nailExtensionHead">
      <div className="nailExtensionHeading">
        <h1>Classic Pedicure in Bangalore by SCENT </h1>
        <p>
          Pampering your feet is more than just a luxury; it’s an essential
          aspect of self-care. At{" "}
          <a href="https://scentlifestyle.com/">SCENT in Bangalore</a>, we
          understand the importance of a comprehensive foot care routine that
          not only enhances the appearance of your feet but also ensures their
          health and well-being. Our{" "}
          <a href="https://scentlifestyle.com/classic-pedicure">
            Classic Pedicure
          </a>{" "}
          is designed to provide you with a rejuvenating experience that
          combines meticulous care with luxurious indulgence.
        </p>
      </div>
      <InnerNavi
        link="/nails-salon"
        service="Nails Salon"
        currService="Classic Pedicure"
      />
    </div>
  );
};

export default ClassicPedicureHead;
