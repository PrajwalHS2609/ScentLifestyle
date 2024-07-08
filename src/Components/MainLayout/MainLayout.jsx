import React from "react";
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const showNavbar = location.pathname !== "/offer-page";
  return (
    <div>
      {showNavbar && <NavBar />}
      {children}
    </div>
  );
};

export default MainLayout;
