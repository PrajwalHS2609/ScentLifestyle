import React from "react";
import "./Schw.css";
import SchwCard from "./SchwCard";
import product1 from "./../../../Images/Shop/Schwarzkopf/SCHWARZKOPF COLOUR FREEZE SHAMPOO.jpg"
import product2 from "./../../../Images/Shop/Schwarzkopf/COLOUR FREEZE MASK.jpg"
import product3 from "./../../../Images/Shop/Schwarzkopf/MESS UP.jpg"
import product4 from "./../../../Images/Shop/Schwarzkopf/THRILL.jpg"
import product5 from "./../../../Images/Shop/Schwarzkopf/SESSION LABEL- THE FLEXIBLE.jfif.jpg"
import product6 from "./../../../Images/Shop/Schwarzkopf/SESSION LABEL- THE STRONG.jpg"
import product7 from "./../../../Images/Shop/Schwarzkopf/FIBER CLINIX FORTIFYING SHAMPOO.jpg"
import product8 from "./../../../Images/Shop/Schwarzkopf/FIBER CLINIX HYDRATING SHAMPOO.jpg"
import product9 from "./../../../Images/Shop/Schwarzkopf/FIBER CLINIX TAME  SHAMPOO.jpg"
import product10 from "./../../../Images/Shop/Schwarzkopf/FIBER CLINIX TAME TREATMENT.jpg"
import product11 from "./../../../Images/Shop/Schwarzkopf/FIBER CLINIX VIBRANCY  SHAMPOO.jpg"
import product12 from "./../../../Images/Shop/Schwarzkopf/FIBER CLINIX VIBRANCY  TREATMENT.jpg"
import product13 from "./../../../Images/Shop/Schwarzkopf/MOISTURE KICK  SPRAY CONDITIONER.jpg"
import product14 from "./../../../Images/Shop/Schwarzkopf/FLEWAX.jpg"
import product15 from "./../../../Images/Shop/Schwarzkopf/GRIP.jpg"
import product16 from "./../../../Images/Shop/Schwarzkopf/GOODBYE YELLOW.jpg"
import product17 from "./../../../Images/Shop/Schwarzkopf/FRIZZ AWAY SMOOTHNING OIL.jpg"
import product18 from "./../../../Images/Shop/Schwarzkopf/ROOT ACTIVATING SHAMPOO.jpg"
import product19 from "./../../../Images/Shop/Schwarzkopf/ANTI DANDRUFF SHAMPOO.jpg"
import product20 from "./../../../Images/Shop/Schwarzkopf/BOUNTY BALM.jpg"
import product21 from "./../../../Images/Shop/Schwarzkopf/REPAIR RESCUE SEALED ENDS.jpg"
const SchwCardContain = () => {
  return (
    <div className="schwCardContainWrapper">
      <SchwCard 
      img={product1}
      txt="Colour Freeze Shampoo"
      />
         <SchwCard 
      img={product2}
      txt="Colour Freeze Wax"
      />
         <SchwCard 
      img={product3}
      txt="Mess Up"
      />
         <SchwCard 
      img={product4}
      txt="THRILL"
      />
         <SchwCard 
      img={product5}
      txt="Session Label-The Flexible"
      />
         <SchwCard 
      img={product6}
      txt="Session Label-The Strong"
      />
         <SchwCard 
      img={product7}
      txt="Fiber Clinix Fortifying Shampoo"
      />
         <SchwCard 
      img={product8}
      txt="Fiber Clinix Hydrating Shampoo"
      />
         <SchwCard 
      img={product9}
      txt="Fiber Clinix Tame Shampoo"
      />
         <SchwCard 
      img={product10}
      txt="Fiber Clinix Tame Treatment"
      />
         <SchwCard 
      img={product11}
      txt="Fiber Clinix Vibrancy Shampoo"
      />
         <SchwCard 
      img={product12}
      txt="Fiber Clinix Vibrancy Treatment"
      />
         <SchwCard 
      img={product13}
      txt="Moisture Kick Spray Conditioner"
      />
         <SchwCard 
      img={product14}
      txt="Flewax"
      />
         <SchwCard 
      img={product15}
      txt="Grip"
      />
         <SchwCard 
      img={product16}
      txt="Goodbye Yellow"
      />
         <SchwCard 
      img={product17}
      txt="Frizz Away Smoothing Oil"
      />
         <SchwCard 
      img={product18}
      txt="Root Activating Shampoo"
      />
         <SchwCard 
      img={product19}
      txt="Anti Dandruff Shampoo"
      />
         <SchwCard 
      img={product20}
      txt="Bounty Balm"
      />
         <SchwCard 
      img={product21}
      txt="Repair Rescue Sealed Ends"
      />
    </div>
  );
};

export default SchwCardContain;
