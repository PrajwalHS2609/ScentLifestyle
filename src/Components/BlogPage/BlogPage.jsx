import React from "react";
import NavBg from "../NavBg/NavBg";
import BlogMain from "./BlogMain/BlogMain";
import Members from "../HomePage/Members/Members";
import OurSalon from "../HomePage/OurSalon/OurSalon";
import Partners from "../HomePage/Partners/Partners";
import InstaFeed from "../HomePage/InstaFeed/InstaFeed";
import HelpNearYou from "../Help/HelpNearYou";
import TextLocReviews from "../TextLocReviews/TextLocReviews";
import ServiceWhy from "../MainServicePages/ServiceWhy/ServiceWhy";
import WhatsApp from "../HomePage/WhatsApp/WhatsApp";
import FacialRead from "../FacialPage/FacialRead/FacialRead";
import LastComp from "../LastComp/LastComp";

const BlogPage = () => {
  return (
    <div className="blogPageContainer">
      <NavBg />
      <BlogMain />
      <Members />
      <OurSalon />
      <Partners />
      <InstaFeed />
      <HelpNearYou />
      <TextLocReviews />
      <ServiceWhy />
      <WhatsApp />
      <FacialRead />
      <LastComp />
    </div>
  );
};

export default BlogPage;
