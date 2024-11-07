import React from "react";
import point from "./../../../Images/point.png";

const NailExtensionBangaloreTrend = () => {
  return (
    <div className="nailExtensionWhy">
      <h5>Trends in Nail Extensions in Bangalore</h5>
      <p>
        SCENT stays updated on the latest trends, offering trendy and stylish
        options for nail extensions in Bangalore. Here are a few trends that
        have been popular among our clients:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="" />
            French Ombre:{" "}
          </span>
          A modern twist on the classic French tip, this gradient effect adds a
          touch of elegance and subtlety to your nails.
        </li>
        <li>
          <span>
            <img src={point} alt="" /> Matte Finishes:{" "}
          </span>{" "}
          Matte is a chic, understated option that gives a refined look to your
          nails, perfect for both professional and casual settings.
        </li>
        <li>
          <span>
            <img src={point} alt="" />
            Glitter and Gems:{" "}
          </span>{" "}
          For those who love a bit of sparkle, we offer nail extensions in
          Bangalore adorned with glitter and gemstones, adding a dash of
          glamour.
        </li>
        <li>
          <span>
            <img src={point} alt="" />
            Negative Space Art:{" "}
          </span>{" "}
          Creative and unique, negative space designs are great for making a
          statement with minimalist style.
        </li>
        <li>
          <span>
            <img src={point} alt="" />
            Animal Print:{" "}
          </span>{" "}
          A bold and fun option, animal prints add personality and flair, making
          your nails a true fashion accessory.
        </li>
      </ul>
    </div>
  );
};

export default NailExtensionBangaloreTrend;
