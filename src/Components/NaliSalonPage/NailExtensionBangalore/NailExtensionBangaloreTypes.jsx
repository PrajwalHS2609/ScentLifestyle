import React from "react";
import point from "./../../../Images/point.png";

const NailExtensionBangaloreTypes = () => {
  return (
    <div className="nailExtensionWhy">
      <h5> Types of Nail Extensions Available at SCENT</h5>
      <p>
        SCENT offers a variety of options to cater to your unique style
        preferences. Here’s a look at some of the top choices for nail
        extensions in Bangalore available at our salon:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="" />
            Acrylic Nail Extensions:{" "}
          </span>
          One of the most popular types, acrylic extensions offer durability and
          a sleek finish. Perfect for those who want a strong, classic look.
        </li>
        <li>
          <span>
            <img src={point} alt="" /> Gel Nail Extensions:{" "}
          </span>{" "}
          These extensions provide a more flexible and natural appearance. They
          are lightweight and glossy, making them a preferred option for a
          natural yet polished look.
        </li>
        <li>
          <span>
            <img src={point} alt="" />
            Polygel Nail Extensions:{" "}
          </span>{" "}
          Combining the best of acrylic and gel, polygel extensions are ideal
          for those who want a softer, durable option. Polygel allows for easy
          customization, so you can achieve the exact length and shape you
          desire.
        </li>
        <li>
          <span>
            <img src={point} alt="" />
            Fiberglass Nail Extensions:{" "}
          </span>{" "}
          For those seeking a delicate and natural appearance, fiberglass
          extensions provide a beautiful finish that enhances the natural look
          of your nails.
        </li>
      </ul>
    </div>
  );
};

export default NailExtensionBangaloreTypes;
