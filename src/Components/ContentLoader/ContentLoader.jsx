import React from "react";
import ContentLoader from "react-content-loader";

const ContentLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={props.width || 300} // Default width, adjust as needed
      height={props.height || 200} // Default height, adjust as needed
      viewBox={`0 0 ${props.width || 300} ${props.height || 200}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props} // Allow for further customization via props
    >
      <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
    </ContentLoader>
  );
};

export default ContentLoader;
