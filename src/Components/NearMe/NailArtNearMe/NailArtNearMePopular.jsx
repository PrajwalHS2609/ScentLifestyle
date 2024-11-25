import React from "react";
import point from "./../../../Images/point.png";

const NailArtNearMePopular = () => {
  return (
    <div className="hairSalonNearMeWhy">
      <h5>Popular Nail Art Designs to Try</h5>
      <p>
        If you’re still wondering what type of{" "}
        <a href="https://scentlifestyle.com/nail-art-near-me">
          nail art near me
        </a>{" "}
        would suit your style, here are some popular trends to inspire your next
        appointment:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Minimalist Nail Art{" "}
          </span>
          <p>
            For those who love simplicity, minimalist designs like negative
            space, geometric shapes, or a clean, solid color are perfect. These
            designs make a subtle yet elegant statement, perfect for any
            occasion.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Floral Nail Art{" "}
          </span>
          <p>
            Nothing says feminine and chic quite like floral nail art. From
            delicate daisies to bold roses, floral patterns are a favorite
            choice for spring and summer.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> 3D Nail Art
          </span>
          <p>
            If you want to make a statement, 3D nail art is an excellent choice.
            Whether it’s rhinestones, pearls, or even miniature charms, 3D
            elements add texture and dimension to your nails, creating a truly
            eye-catching look.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> Ombre Nails
          </span>
          <p>
            Ombre nails, where one color fades into another, offer a unique and
            artistic look that can be personalized to any shade you prefer. You
            can even go for a metallic or glitter ombre design for extra flair!
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> French Tip Nail Art
          </span>
          <p>
            French tips have evolved over the years from the classic white tips
            to more modern variations. Today, you can find French tips with
            vibrant colors, sparkles, or even a subtle gradient effect.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> Seasonal Nail Art
          </span>
          <p>
            From Halloween-inspired designs with spooky motifs to holiday-themed
            patterns, seasonal nail art is a great way to celebrate the time of
            year. These designs can be both fun and festive, giving you a
            cheerful look for any occasion.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default NailArtNearMePopular;
