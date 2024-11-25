import React from "react";
import checked from "./../../../Images/checked.png";

const NailArtNearMeWhy = () => {
  return (
    <div className="hairSalonNearMeWhy">
      <h5>Why SCENT is Your Go-To for Nail Art Near Me</h5>
      <p>
        So, why should SCENT be your first choice when searching for nail art
        near me? Here are just a few reasons why our salon stands out:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Creative Freedom{" "}
          </span>
          <p>
            At SCENT, we encourage our clients to explore their creativity. If
            you have an idea in mind, our skilled nail artists will bring it to
            life with precision. Or, if you’re looking for inspiration, our team
            can suggest designs based on your preferences.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Personalized Service{" "}
          </span>
          <p>
            We believe that each person is unique, and so should their nails be.
            When you come to SCENT, we take the time to understand your style
            and work with you to create the perfect design. Whether you’re
            looking for something bold, elegant, or whimsical, our team will
            make sure your nails reflect your personality.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" /> Expert Technicians
          </span>
          <p>
            Our nail artists are experienced and highly trained in all forms of
            nail art near me. We stay ahead of the trends and use the latest
            techniques to ensure you leave our salon with gorgeous, long-lasting
            nails.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" /> Comprehensive Nail Care
          </span>
          <p>
            At SCENT, we don’t just do nail art—we offer a full range of nail
            care services, including{" "}
            <a href="https://scentlifestyle.com/organic-manicure">manicures</a>,{" "}
            <a href="https://scentlifestyle.com/organic-pedicure">pedicures</a>,
            and{" "}
            <a href="https://scentlifestyle.com/nails-salon">
              nail strengthening treatments
            </a>
            . This ensures your nails not only look great but stay healthy too.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" />
            Trendy Designs and Customization
          </span>
          <p>
            Looking for something unique? At SCENT, we offer a wide array of
            designs and allow you to customize your look. Whether you're
            interested in intricate detailing, trendy colors, or special
            embellishments like crystals, we’ve got you covered.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default NailArtNearMeWhy;
