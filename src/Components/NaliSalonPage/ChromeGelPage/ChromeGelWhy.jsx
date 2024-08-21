import React from "react";
import checked from "./../../../Images/checked.png";
import Members from "../../HomePage/Members/Members";
import OurSalon from "../../HomePage/OurSalon/OurSalon";
import Partners from "../../HomePage/Partners/Partners";
import InstaFeed from "../../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../../Help/HelpNearYou";
import TextLocReviews from "../../TextLocReviews/TextLocReviews";
import ServiceWhy from "../../MainServicePages/ServiceWhy/ServiceWhy";

const ChromeGelWhy = () => {
  return (
    <div className="nailExtensionWhy">
      <h5>Chrome Gel Polish in Bangalore: The SCENT Salon Experience </h5>
      <p>
        When it comes to getting chrome gel polish in Bangalore, SCENT Salon is
        a name that stands out. Here’s why SCENT Salon is the go-to place for
        this dazzling nail treatment:{" "}
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="" />
            Expert Technicians:
          </span>{" "}
          <p>
            SCENT Salon has a team of highly skilled nail technicians who are
            trained in the{" "}
            <a href="https://scentlifestyle.com/nails-salon">
              latest chrome gel polish techniques
            </a>
            . Their expertise ensures that every client gets a flawless finish.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Premium Products:
          </span>{" "}
          <p>
            {" "}
            Only high-quality products are used at SCENT Salon, ensuring that
            your nails not only look great but also remain healthy and strong.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="" /> Innovative Designs:
          </span>{" "}
          <p>
            {" "}
            The creative team at SCENT Salon is always up-to-date with the
            latest trends in chrome gel polish, offering a variety of designs to
            suit every style.
          </p>
        </li>
        <li>
          <span>
            <img src={checked} alt="" />
            Hygiene and Safety:
          </span>
          <p>
            SCENT Salon maintains stringent hygiene protocols, ensuring a safe
            and clean environment for all clients.
          </p>
        </li>
      </ul>
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
    </div>
  );
};

export default ChromeGelWhy;
