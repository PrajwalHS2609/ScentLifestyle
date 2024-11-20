import React from "react";
import checked from "./../../../../../Images/checked.png";

const LashesExtensionWhyChoose = () => {
  return (
    <div className="pediManicureWhat">
      <h5>Why Choose Eyelash Extensions for Special Occasions?</h5>

      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Time-Saving Beauty{" "}
          </span>
          <p>
            Special occasions often involve busy schedules filled with
            appointments, travel, and getting ready. With eyelash extensions,
            you wake up looking polished and ready to go, saving valuable time
            on your makeup routine. No more struggling with mascara or false
            lashes—your extensions do all the work for you!
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Customizable Glam{" "}
          </span>
          <p>
            One of the best features of eyelash extensions is their versatility.
            Whether you’re aiming for a subtle enhancement for a daytime event
            or bold, voluminous lashes for an evening gala, your technician can
            customize the look to suit the occasion.
          </p>
          <ul>
            {" "}
            <li>
              {" "}
              <span>Natural Look:</span> Perfect for weddings and intimate
              gatherings.
            </li>
            <li>
              <span>Dramatic Look:</span> Ideal for parties, photo shoots, or
              black-tie events.
            </li>
            <li>
              <span> Hybrid Styles:</span> A mix of natural and volume for
              balanced glamour.
            </li>
          </ul>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Smudge-Proof Confidence{" "}
          </span>
          <p>
            Unlike mascara, which can smudge or run, especially during emotional
            moments like weddings, eyelash extensions stay intact. They’re
            waterproof and designed to withstand tears, sweat, and humidity,
            ensuring you look flawless all day and night.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" />
            Photo-Ready Lashes{" "}
          </span>
          <p>
            Cameras love defined, voluminous lashes. Eyelash extensions enhance
            your eyes, making them pop in photographs. Whether you’re posing for
            candid shots or professional portraits, your lashes will frame your
            eyes beautifully and highlight your facial features.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default LashesExtensionWhyChoose;
