import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import "../style.css";


const NavBar = () => {

  const [isMobile, setIsMobile] = useState(false);

  const [navColour, updateNavbar] = useState(true);
 
  function changeBg() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  window.addEventListener("scroll", changeBg);

 

  return (

  <nav classname={navColour ? "sticky" : "navbar" } > 

 
   <div className="logoo">
   <img className="barr" src="/image1.png" alt="" />
   </div>
    
    <ul className={isMobile? "nav-links-mobile" : "nav-links"}
    onClick={()=>setIsMobile(false)}
    >
     <Link to ="/" className="home"> <li>Home</li></Link>
     <Link to ="/about"  className="about"> <li>About</li></Link>
     <Link to ="/Projects"  className="projets"><li>Projects</li></Link>
     <Link to ="/Resume"   className="resume"><li>Resume</li></Link>
     
    </ul>
<div className="burger"
onClick={()=>setIsMobile(!isMobile)}
>
  {isMobile? <i className="fas fa-times"></i>:<i className="fas fa-bars"></i>}
  
</div>
  </nav>


  );
};


export default NavBar;
