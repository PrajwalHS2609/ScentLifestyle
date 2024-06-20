import React, { useRef, useState } from "react";
import "./HairRead.css";

const HairRead = () => {
  let [toggle, setToggle] = useState(false);
  let switchRef = useRef();
  let open = () => {
    if (!toggle) {
      setToggle(true);
      switchRef.current.style.display = "block";
    } else {
      setToggle(false);
      switchRef.current.style.display = "none";
    }
  };

  return (
    <div className="hairReadContainer">
      <header>
        <h1>Hair Salon in Bangalore </h1>
      </header>
      <div className="hairReadHeadContainer">
        <ul>
          <li>
            <h4>Experience Excellence at SCENT Hair Salon in Bangalore</h4>
            <p>
              Step into SCENT Hair Salon in Bangalore for best-in-class
              haircuts, hair color, hair spa, and hair smoothing treatments, all
              performed by our highly trained hair stylists. Great hair days
              truly begin at SCENT Hair Salon in Bangalore.
            </p>
          </li>
          <li>
            <h4>Welcome to SCENT Hair Salon</h4>
            <p>
              At SCENT Hair Salon, we redefine beauty and style with six
              luxurious locations across Bangalore, including Lavelle Road, JP
              Nagar, Sahakar Nagar, Jakkur, and Whitefield. Each of our salons
              is designed to provide a relaxing, comfortable environment where
              you can escape the hustle and bustle of everyday life and indulge
              in top-notch hair care services.
            </p>
          </li>
        </ul>
        <button>
          <h2 className="openBut" onClick={open}>
            Read More
          </h2>
        </button>
      </div>
      <div ref={switchRef} className="hairReadDisplayContainer">
        <ul>
          <li>
            <h4>Expert Haircuts & Styling</h4>
            <p>
              Whether you're looking for a trendy new haircut or a classic
              style, our skilled stylists at SCENT Hair Salon in Bangalore will
              work with you to create the perfect look that complements your
              personality and lifestyle. We stay updated with the latest trends
              and techniques to ensure that you leave our salon looking and
              feeling your best. From precision cuts to voluminous blowouts, our
              team pays meticulous attention to detail to deliver exceptional
              results.
            </p>
          </li>
          <li>
            <h4>Highlights & Streaks</h4>
            <p>
              Add dimension and depth to your hair with our expertly applied
              highlights and streaks. At SCENT Hair Salon in Bangalore, we offer
              a variety of options to suit your style preferences. Whether you
              prefer subtle sun-kissed highlights or bold statement colors, our
              color specialists will help you achieve the perfect look. We use
              high-quality, ammonia-free products to ensure vibrant and
              long-lasting color without compromising the health of your hair.
            </p>
          </li>
          <li>
            <h4>Indulgent Hair Spa & Treatments</h4>
            <p>
              Pamper your hair with our indulgent hair spa treatments designed
              to nourish, strengthen, and revitalize your locks. At SCENT Hair
              Salon in Bangalore, we offer a range of services, from hydrating
              masks to repairing treatments, tailored to meet your specific hair
              needs. Our hair spa treatments are crafted to restore your hair's
              health and beauty, leaving it soft, shiny, and manageable.
            </p>
          </li>
          <li>
            <h4>Comprehensive Hair Smoothening Treatments</h4>
            <p>
              For those seeking sleek, smooth hair, SCENT Hair Salon in
              Bangalore provides advanced hair smoothening treatments. Our
              experts use the latest techniques and high-quality products to
              transform frizzy, unmanageable hair into silky, smooth tresses.
              Whether you opt for keratin treatments or other smoothing
              solutions, we ensure that your hair looks flawlessly straight and
              feels incredibly smooth.
            </p>
          </li>
          <li>
            <h4>Commitment to Excellence</h4>
            <p>
              With a commitment to excellence and a passion for creativity,
              SCENT Hair Salon in Bangalore is your go-to destination for all
              your hair care needs. We take pride in offering personalized
              services that cater to your unique preferences and requirements.
              Our team of professionals is dedicated to helping you achieve your
              hair goals, whether it's through a transformative haircut, a
              vibrant new color, or a rejuvenating treatment.
            </p>
          </li>
          <li>
            <h4>Visit Us at Multiple Locations</h4>
            <p>
              To make it convenient for you to access our exceptional services,
              SCENT Hair Salon in Bangalore has six locations across the city.
              You can visit us at Lavelle Road, JP Nagar, Sahakar Nagar, Jakkur,
              or Whitefield. Each salon is equipped with state-of-the-art
              facilities and staffed by experienced professionals who are
              committed to providing you with the best possible care.
            </p>
          </li>
          <li>
            <h4>The SCENT Hair Salon Experience</h4>
            <p>
              From the moment you step into SCENT Hair Salon in Bangalore, you
              are welcomed into a world of luxury and relaxation. Our salons are
              designed to create a soothing atmosphere where you can unwind and
              enjoy a pampering experience. We use only the highest quality
              products and cutting-edge techniques to ensure that you receive
              top-notch results with every visit.
            </p>
          </li>
          <li>
            <h4>Tailored Services for Unique Needs</h4>
            <p>
              At SCENT Hair Salon in Bangalore, we understand that every
              individual is unique. That's why we take the time to listen to
              your concerns and preferences before customizing a treatment plan
              that's tailored to your individual needs. Whether you're looking
              for a bold new hairstyle, a relaxing spa experience, or expert
              skincare advice, our team is here to help you achieve your goals.
            </p>
          </li>
          <li>
            <h4>Special Packages for Special Occasions</h4>
            <p>
              In addition to our comprehensive range of salon services, SCENT
              Hair Salon in Bangalore offers special packages for weddings,
              parties, and other special occasions. Our bridal packages include
              comprehensive hair, makeup, and skincare services to ensure you
              look stunning on your big day. We also offer styling for other
              special events, making SCENT Hair Salon in Bangalore the go-to
              destination for all your beauty needs.
            </p>
          </li>
          <li>
            <h4>Ongoing Promotions and Discounts</h4>
            <p>
              We believe that luxury beauty services should be accessible to
              everyone. That's why SCENT Hair Salon in Bangalore offers ongoing
              promotions and discounts to make your beauty regimen more
              affordable. Our special offers on hair care, skin care, products,
              and special therapies & rituals are designed to help you save
              money while enjoying the best combinations of our wide range of
              beauty services.
            </p>
          </li>
          <li>
            <h4>A Sustainable Approach to Beauty</h4>
            <p>
              In addition to providing exceptional services, SCENT Hair Salon in
              Bangalore is committed to sustainable beauty practices. We use
              eco-friendly products and implement green initiatives to minimize
              our environmental impact. By choosing SCENT Hair Salon in
              Bangalore, you can enjoy top-notch beauty treatments while
              supporting a business that cares about the planet.
            </p>
          </li>
          <li>
            <h4>Community Engagement and Giving Back</h4>
            <p>
              SCENT Hair Salon in Bangalore believes in giving back to the
              community. We regularly participate in charitable events and
              initiatives, supporting various causes and organizations. By
              patronizing SCENT Hair Salon in Bangalore, you are contributing to
              our efforts to make a positive impact on society.
            </p>
          </li>
          <li>
            <h4>Convenient Location and Hours</h4>
            <p>
              Located in prime hotspots, SCENT Hair Salon in Bangalore is easily
              accessible from all parts of the city. We offer flexible hours to
              accommodate your busy schedule, including late evening and weekend
              appointments. This convenience, combined with our excellent
              services, makes SCENT Hair Salon in Bangalore the perfect choice
              for your beauty needs.
            </p>
          </li>
          <li>
            <h4>Testimonials and Reviews</h4>
            <p>
              The glowing testimonials and reviews from satisfied clients speak
              volumes about the quality of services at SCENT Hair Salon in
              Bangalore. Clients rave about the professionalism, expertise, and
              friendly demeanor of the staff. Many clients have become loyal
              patrons, returning time and again for the exceptional care and
              results they receive at SCENT Hair Salon in Bangalore.
            </p>
          </li>
          <li>
            <h4>Special Offers and Loyalty Programs</h4>
            <p>
              To show appreciation for their clients, SCENT Hair Salon in
              Bangalore offers special promotions and loyalty programs. Regular
              discounts, package deals, and reward points make it easy for
              clients to enjoy their favorite services at great prices. These
              programs add value and enhance the overall client experience at
              SCENT Hair Salon in Bangalore.
            </p>
            <p>
              SCENT Hair Salon in Bangalore is more than just a salon; it's a
              sanctuary where beauty and wellness converge. With a team of
              dedicated professionals, a wide range of services, and a
              commitment to excellence, SCENT Hair Salon in Bangalore has
              rightfully earned its reputation as the best hair salon in the
              city. Whether you're looking for a simple haircut, a relaxing spa
              day, or a complete makeover, SCENT Hair Salon in Bangalore is the
              place to be. Visit SCENT Hair Salon in Bangalore and experience
              the pinnacle of beauty and wellness in the heart of the city
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HairRead;
