import React from "react";
import checked from "./../../../../../Images/checked.png";
import "./HairSalonInLavelleWhy.css"
const HairSalonInLavelleWhy = () => {
  return (
    <div className="hairSalonInLavelleWhy">
      <h5>Why Choose SCENT Hair & Beauty Salon in Lavelle Road?</h5>
      <p>
        At SCENT, we understand that your hair is a crucial aspect of your
        identity. This is why we take immense pride in being the go-to hair
        salon in Lavelle Road for those who demand nothing but the best. Our
        salon is more than just a place to get your hair done; it’s a sanctuary
        where your beauty and well-being are our top priorities.
      </p>
      <p>Here’s why SCENT is the leading hair salon in Lavelle Road:</p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Expert Stylists:
          </span>
          <p>
            Our team comprises seasoned professionals who are masters of their
            craft. Whether you're looking for a classic cut, a trendy new style,
            or a complex color treatment, our stylists deliver perfection every
            time.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Luxurious Environment:
          </span>
          <p>
            Step into a world of elegance and comfort at our hair salon in
            Lavelle Road. The atmosphere at SCENT is designed to relax and
            rejuvenate, making your salon visit an indulgent experience.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Personalized Services:
          </span>
          <p>
            No two clients are the same, and neither are our services. At SCENT,
            the leading hair salon in Lavelle Road, we tailor every treatment to
            suit your unique needs, ensuring you leave feeling your absolute
            best.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default HairSalonInLavelleWhy;
