import React from "react";
import point from "./../../../Images/point.png";

const HairScalpMassagerService = () => {
  return (
    <div className="hairSalonInSahakaraWhy">
      <h5>Our Scalp Massaging Services </h5>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" />
            Classic Scalp Massage{" "}
          </span>
          <p>
            A soothing massage that targets key pressure points on your scalp.
            Perfect for stress relief and improved circulation, this session is
            ideal for those looking to relax after a long day.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Aromatherapy Scalp Massage{" "}
          </span>
          <p>
            Enhance your massage experience with the calming effects of
            essential oils. Choose from lavender, eucalyptus, or other aromatic
            oils that help relax your mind and rejuvenate your scalp.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Hair Growth Stimulation Massage{" "}
          </span>
          <p>
            Focusing on promoting healthy hair growth, this massage uses
            specialized techniques and products to invigorate hair follicles,
            reduce hair fall, and improve scalp health.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Headache Relief Massage{" "}
          </span>
          <p>
            If you suffer from headaches or migraines, this service is designed
            for you. Our therapists use targeted techniques to relieve tension
            and pressure, leaving you feeling refreshed and pain-free.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Deep Nourishment Massage{" "}
          </span>
          <p>
            This massage combines scalp stimulation with nourishing treatments
            to address dry scalp, dandruff, or damaged hair. Perfect for those
            seeking both relaxation and a hair care boost.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Quick Relaxation Massage{" "}
          </span>
          <p>
            For those short on time, this express massage offers a quick dose of
            relaxation and rejuvenation, perfect for a midday break or a
            post-work unwind.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HairScalpMassagerService;
