import React from 'react'
import checked from "./../../../../Images/checked.png";

const HairColorWhy = () => {
  return (
<div className="headSpaWhyContainer">
      <h5>
        Why SCENT is the Best Choice for Hair Colour in Bangalore & Hair
        Highlights in Bangalore
      </h5>
      <p>
        At SCENT, we believe that every client deserves a personalized and
        luxurious salon experience. Our commitment to excellence sets us apart
        as the premier destination for Hair Colour in Bangalore. Here are some
        of the reasons why SCENT is your go-to salon:
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />Expert Stylists:
          </span>
          <p>
            Our team consists of highly trained and
            experienced colorists who are passionate about their craft. They
            stay updated with the latest trends and techniques, ensuring that
            you receive top-quality service.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" /> Customized Consultations:
          </span>
          <p>
            We understand that choosing a hair color or highlights can be
            overwhelming. Our stylists provide personalized consultations to
            help you select the perfect shade and style that complements your
            features and lifestyle.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" /> Premium Products:
          </span>
          <p>
            At SCENT, we use only the finest quality products for all our
            coloring and highlighting services. Our salon is equipped with
            premium brands that are gentle on your hair and deliver long-lasting
            results.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Comfortable Environment:
          </span>
          <p>
            Our salon is designed to be a relaxing and welcoming space where you
            can unwind and enjoy a moment of self-care. We prioritize your
            comfort and satisfaction, making every visit a pleasant experience.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Comprehensive Services:
          </span>
          <p>
            In addition to Hair Colour in Bangalore and Hair Highlights in
            Bangalore, we offer a wide range of hair care and styling services.
            From cuts and treatments to styling and extensions, SCENT is your
            one-stop destination for all your hair needs.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default HairColorWhy
