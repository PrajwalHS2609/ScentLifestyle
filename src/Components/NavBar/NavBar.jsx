import React, { useState } from 'react'
import "./Navbar2.css"
import Logo from './Logo'
import Menu from './Menu'
const NavBar = () => {
  let [scroll, setScroll] = useState(false);

  let changeColor = () => {
    if (window.scrollY >=10 ) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div>
      <nav className={scroll ? "navContainer" : "navContainer1"}>
        <Logo/>
        <Menu/>
      </nav>
    </div>
  )
}

export default NavBar
