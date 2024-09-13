import React from "react";
import point from "./../../../../../Images/point.png";

const ChicSleekBob = () => {
  return (
    <div className="pediManicureWhat">
      <h5>Chic and Timeless: The Bob</h5>
      <p>
        The bob is a classic haircut that has stood the test of time. From the
        1920s flapper girls to today’s fashion icons, the bob has been a go-to
        <a href="https://scentlifestyle.com/haircut-and-styling">
          {" "}
          haircut for women{" "}
        </a>
        seeking a chic and polished look. What makes the bob so versatile is its
        adaptability to different face shapes and hair textures. Whether it’s a
        sleek, straight bob or a tousled, wavy version, this haircut exudes
        sophistication and style.
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Sleek Bob:
          </span>
          <p>
            A straight, sleek bob is perfect for women with fine hair. It gives
            a polished, professional look that’s easy to maintain. Pair it with
            a middle part for a modern twist.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Wavy Bob:
          </span>
          <p>
            For those with natural waves or curls, a wavy bob offers a more
            relaxed, effortless vibe. This style works well for both casual and
            formal occasions, making it a versatile choice.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ChicSleekBob;
