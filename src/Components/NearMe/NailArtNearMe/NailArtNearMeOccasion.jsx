import React from "react";
import point from "./../../../Images/point.png";

const NailArtNearMeOccasion = () => {
  return (
    <div className="hairSalonNearMeWhy">
      <h5>Nail Art for Every Occasion</h5>
      <p>
        Looking for nail art near me for a special occasion? Here are some
        events where great nail art can really make a statement:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Weddings
          </span>
          <p>
            Weddings are a major event, and your nails should match the grandeur
            of the day. Elegant, subtle designs like French tips or soft pastels
            are often popular choices for brides. Bridesmaids can also opt for
            coordinated designs that complement the overall wedding theme.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Parties and Celebrations{" "}
          </span>
          <p>
            For parties and festive celebrations, bold designs with glitter,
            metallics, or intricate patterns are always a hit. Get creative with
            your nails to match the party vibe and make your nails the talk of
            the event!
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Business Meetings
          </span>
          <p>
            Even for professional settings, nail art can enhance your overall
            appearance. Subtle and clean designs like minimalist art, nude
            tones, or soft pastels are great choices for business meetings or
            interviews.xxxx
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Seasonal Events{" "}
          </span>
          <p>
            Whether it's a holiday, a festival, or a special season like summer
            or fall, nail art is a fun way to celebrate the season. Think
            pumpkin designs for Halloween, sparkling snowflakes for Christmas,
            or floral prints for spring.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
};

export default NailArtNearMeOccasion;
