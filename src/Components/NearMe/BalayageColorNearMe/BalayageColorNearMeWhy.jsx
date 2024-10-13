import React from "react";
import checked from "./../../../Images/checked.png";

const BalayageColorNearMeWhy = () => {
  return (
    <div className="hairSalonNearMeWhy">
      <h5>Why Choose SCENT for Balayage Hair Color Near Me? </h5>
      <p>
        When you’re looking for a salon that specializes in high-quality
        balayage, SCENT stands out for its expertise, attention to detail, and
        personalized approach. Here’s what sets us apart:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Expert Stylists:
          </span>
          <p>
            Our talented team of colorists at SCENT is well-versed in the latest
            balayage techniques and trends. Each stylist has undergone advanced
            training to master the art of balayage, ensuring that every client
            walks out with a stunning, customized look. If you’re searching for
            a salon to achieve the perfect balayage hair color near me, SCENT
            has the expertise to make your vision a reality.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Personalized Service:{" "}
          </span>
          <p>
            At SCENT, we believe that each client is unique, and so are their
            hair color goals. Our personalized consultations allow us to tailor
            your balayage to your individual hair type, skin tone, and style
            preferences. Whether you’re after a sun-kissed glow or a bolder,
            high-contrast look, our colorists will work with you to create a
            result that enhances your natural beauty.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            High-Quality Products{" "}
          </span>
          <p>
            Beautiful balayage starts with high-quality products. At SCENT, we
            use only the finest salon-grade products to ensure long-lasting,
            vibrant color that’s gentle on your hair. When you choose SCENT for
            your balayage hair color near me, you’re not only getting a gorgeous
            new look but also top-tier care for your hair’s health.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default BalayageColorNearMeWhy;
