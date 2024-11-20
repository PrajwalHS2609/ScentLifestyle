import React from "react";
import BlogCard from "../BlogCard";
import eyelashExtensionBanner from "./../../../../Images/Blog/Eyelash Extensions/Banner.png";

const BlogLashes = () => {
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
          img={eyelashExtensionBanner}
          head="Eyelash Extensions for Special Occasions: Your Go-To Glam Look"
          para="Special occasions call for making unforgettable impressions, and nothing enhances your..."
          link="/eyelash-extensions-for-special-occasions-your-go-to-glam-look"
        />
      </div>

      <div className="blogMainDisplay2" ref={switchRef}></div>

      <div className="blogMainReadMore">
        <button onClick={handleRead}>Load {toggle ? "Less" : "More"}</button>
      </div>
    </div>
  );
};

export default BlogLashes;
