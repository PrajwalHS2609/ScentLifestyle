import React, { useRef, useState } from "react";
import "./HairRead.css";

const HairRead = () => {
 let [toggle,setToggle]=useState(false)
 let switchRef=useRef()
 let open=()=>{
    if(!toggle){
        setToggle(true)
        switchRef.current.style.display="block"
        
     }else{
        setToggle(false)
        switchRef.current.style.display="none"
     }
 }

    return (
    <div className="hairReadContainer">
      <div className="hairReadHeadContainer">
        <button>
        <h1 className="openBut" onClick={open}>
          Read More
        </h1>
        </button>
      </div>
      <div ref={switchRef} className="hairReadDisplayContainer">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default HairRead;
