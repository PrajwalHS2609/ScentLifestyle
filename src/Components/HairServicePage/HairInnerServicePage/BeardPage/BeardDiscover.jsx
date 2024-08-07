import React from "react";
import InnerCard from "../../../InnerServicePage/InnerCard/InnerCard";

const BeardDiscover = () => {
  return (
    <div className="hairSpaServiceContainer">
      <h2>Discover Our Range of Services at SCENT Beard Salon in Bangalore </h2>
      <p>
        At SCENT, we pride ourselves on offering a comprehensive selection of
        beard grooming services. Our Beard Salon in Bangalore is equipped with
        state-of-the-art tools and products, ensuring that every client receives
        a premium grooming experience. Here’s a closer look at some of the
        signature services offered by our expert Beard Stylist in Bangalore:
      </p>
      <div className="hairSpaServiceContent">
        <InnerCard
          head="Beard Trimming: "
          para="Our beard trimming service is perfect for those who want to maintain a neat and tidy appearance. Our stylists will carefully shape your beard, removing any uneven or stray hairs to give you a polished look."
        />
        <InnerCard
          head="Beard Styling:"
          para=" Whether you're looking to experiment with a new style or perfect your current look, our Beard Stylist in Bangalore will provide expert advice and styling. From classic to contemporary styles, we offer a range of options to suit every taste."
        />
        <InnerCard
          head="Beard Shaping:"
          para=" Our beard shaping service is ideal for those who want a more defined and sculpted look. Our stylists use precise techniques to shape your beard, accentuating your facial features and creating a sharp, clean finish."
        />
        <InnerCard
          head="Beard Color: "
          para=" For those looking to add a touch of color to their beard, our beard coloring service offers a range of shades to choose from. Whether you're covering grays or experimenting with a new hue, our stylists will help you achieve the perfect color."
        />
        <InnerCard
          head="Beard Conditioning:"
          para=" A well-conditioned beard is soft, manageable, and healthy. Our conditioning treatments nourish and hydrate your beard, leaving it looking and feeling its best."
        />
        <InnerCard
          head="Hot Towel Shave:"
          para=" Experience the ultimate in relaxation with our hot towel shave. This traditional grooming service includes a hot towel treatment, a close shave, and a soothing aftershave, leaving your skin smooth and refreshed."
        />
      </div>
    </div>
  );
};

export default BeardDiscover;
