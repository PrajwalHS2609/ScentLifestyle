import React from "react";
import { Helmet } from "react-helmet";
import LashesExtensionImg from "./LashesExtensionImg";
import LashesExtensionHead from "./LashesExtensionHead";
import LashesExtensionWhyChoose from "./LashesExtensionWhyChoose";
import LashesExtensionPrepare from "./LashesExtensionPrepare";
import LashesExtensionMaintain from "./LashesExtensionMaintain";
import LashesExtensionQuestion from "./LashesExtensionQuestion";
import LashesExtensionChoosing from "./LashesExtensionChoosing";
import lashesExtensionWhyChoose from "./../../../../../Images/Blog/Eyelash Extensions/Why Choose Eyelash Extensions for Special Occasions.png";
import lashesExtensionChoosing from "./../../../../../Images/Blog/Eyelash Extensions/Choosing the Right Eyelash Extension Style for Your Occasion.png";
import lashesExtensionPrepare from "./../../../../../Images/Blog/Eyelash Extensions/Preparing for Your Eyelash Extension Appointment.png";
import lashesExtensionMaintain from "./../../../../../Images/Blog/Eyelash Extensions/Maintaining Your Eyelash Extensions for Long-Lasting Glam.png";
import lashesExtensionWhy from "./../../../../../Images/Blog/Eyelash Extensions/Why Eyelash Extensions for Women Are Worth the Investment.png";
import HairServImg from "../../HairBotox/HairServImg";
import LashesExtensionBlogWhy from "./LashesExtensionBlogWhy";

const LashesExtensionBlog = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>
          Eyelash Extensions for Special Occasions: Your Go-To Glam Look
        </title>
        <meta
          name="description"
          content="Eyelash Extensions for Special Occasions: Your Go-To Glam Look. From weddings and parties to prom nights and red-carpet events, eyelash extensions add that touch of glamour and elegance to your look."
        />
        <link
          rel="canonical"
          href="https://scentlifestyle.com/eyelash-extensions-for-special-occasions-your-go-to-glam-look"
        />
      </Helmet>
      <div className="hairTrimContent">
        <LashesExtensionImg />
        <LashesExtensionHead />
        <br />
        <HairServImg hairBotoxImg={lashesExtensionWhyChoose} />
        <LashesExtensionWhyChoose />
        <br />
        <HairServImg hairBotoxImg={lashesExtensionChoosing} />
        <LashesExtensionChoosing />
        <br />
        <HairServImg hairBotoxImg={lashesExtensionPrepare} />
        <LashesExtensionPrepare />
        <br />
        <HairServImg hairBotoxImg={lashesExtensionMaintain} />
        <LashesExtensionMaintain />
        <br />
        <LashesExtensionQuestion />
        <br />
        <HairServImg hairBotoxImg={lashesExtensionWhy} />
        <LashesExtensionBlogWhy />
      </div>
            
    </div>
  );
};

export default LashesExtensionBlog;
