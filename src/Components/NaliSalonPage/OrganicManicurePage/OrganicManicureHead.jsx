import React from "react";
import InnerNavi from "../../InnerServicePage/InnerNavi/InnerNavi";

const OrganicManicureHead = () => {
  return (
    <div className="nailExtensionHead">
      <InnerNavi
        link="/nails-salon"
        service="Nails Salon"
        currService="Organic Manicure"
      />

      <div className="nailExtensionHeading">
        <h1>Organic Manicure in Bangalore at SCENT </h1>
        <p>
          Welcome to SCENT , your premier destination for luxurious and
          eco-friendly nail care services in Bangalore. In line with our
          commitment to health, wellness, and the environment, we are proud to
          offer our exclusive Organic Manicure service. This treatment combines
          the finest natural and organic ingredients with expert techniques to
          deliver beautiful, healthy nails while minimizing environmental
          impact.
        </p>
      </div>

      <div className="nailExtensionHeading">
        <h2>What is an Organic Manicure?</h2>
        <p>
          An Organic Manicure is a nail treatment that utilizes natural and
          organic products, free from harmful chemicals and synthetic additives.
          This eco-friendly approach not only promotes healthier nails and skin
          but also supports a sustainable and cruelty-free beauty routine. Our
          Organic Manicure includes nail shaping, cuticle care, exfoliation,
          massage, and polish application using organic products that nourish
          and rejuvenate your hands and nails.
        </p>
      </div>
      <div className="nailExtensionHeading">
        <h3>Why Choose Ombre Gel Nail Polish?</h3>
        <ul>
          <li>
            <span>Eco-Friendly Products:</span> We use only the best organic and
            natural products that are free from harmful chemicals like
            formaldehyde, toluene, and parabens. Our polishes, lotions, and
            exfoliants are derived from natural ingredients, ensuring that your
            nails receive the gentle care they deserve.{" "}
          </li>
          <li>
            <span> Skilled Technicians:</span> Our nail technicians are trained
            in the latest organic manicure techniques. They have a deep
            understanding of how to use organic products effectively to achieve
            stunning results while maintaining the health of your nails and
            skin..
          </li>
          <li>
            <span>Relaxing Environment:</span> SCENT provides a tranquil and
            luxurious setting where you can unwind and enjoy your manicure. Our
            serene environment, combined with our friendly and professional
            staff, ensures a pampering experience from start to finish.
          </li>
          <li>
            <span> Commitment to Sustainability:</span> We are dedicated to
            promoting sustainable beauty practices. By choosing our Organic
            Manicure, you are supporting a salon that prioritizes eco-friendly
            products and practices, contributing to a healthier planet.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrganicManicureHead;
