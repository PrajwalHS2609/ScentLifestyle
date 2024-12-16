import React, { useRef, useState } from 'react'
import BlogCard from '../BlogCard';
import academyEnrollBanner from "./../../../../Images/Blog/Top_10_Reasons_to_ Enroll_in_ Salon_Academy/Banner.png";

const BlogAcademy = () => {
     let [toggle, setToggle] = useState(false);
      let switchRef = useRef();
      let handleRead = () => {
        if (!toggle) {
          setToggle(true);
          switchRef.current.style.display = "flex";
        } else {
          setToggle(false);
          switchRef.current.style.display = "none";
        }
      };
  return (
    <div className="blogMainContainer">
    <div className="blogMainDisplay1">
      <BlogCard
        img={academyEnrollBanner}
        head="Top 10 Reasons to Enroll in Our Premier Salon Academy Today"
        para="Are you passionate about beauty, hair, or makeup and dream of turning your passion into a successful career?..."
        link="/top-10-reasons-to-enroll-in-our-premier-salon-academy-today"
      />
    </div>

    <div className="blogMainDisplay2" ref={switchRef}>
      {/* <BlogCard
      img="https://img.freepik.com/free-photo/portrait-attractive-woman-studio_329181-9782.jpg?ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
      head="Raccoon Eyes: Causes, Treatment, and How to Get Rid of It"
      para="Ever noticed those unsightly dark circles around your eyes? In..."
      link="/"
    /> */}
    </div>

    <div className="blogMainReadMore">
      <button onClick={handleRead}>Load {toggle ? "Less" : "More"}</button>
    </div>
  </div>
  )
}

export default BlogAcademy
