import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css"
// import Navbar from "../NavBar/NavBar"

function NavBar() {

  const location = useLocation();

  return (

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom py-4 mb-3" id="logo">
      <li class="navbar-brand ml-5" id="logoname"> Matheus Weber Bolson</li>
      <div class="navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto" id="linksSection"/>
      <li class="nav-item active">
      <Link to="/" className={location.pathname === "/About" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li class="nav-item active">
      <Link
          to="/portfolio"
          className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>
      <li class="nav-item active">
      <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      </div>
    </nav>


    // <ul className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom py-4 mb-3" id="logo">
    //   <li className="navbar-brand ml-5" id="logoname">
    //     <Link to="/" className={location.pathname === "/About" ? "nav-link active" : "nav-link"}>
    //       Matheus Weber Bolson
    //     </Link>
    //   </li>
    //   <div class="navbar-collapse" id="navbarNav">
    //   <li className="nav-item">
    //     <Link to="/" className={location.pathname === "/About" ? "nav-link active" : "nav-link"}>
    //       Home
    //     </Link>
    //   </li>
    //   <li className="nav-item">
        // <Link
        //   to="/portfolio"
        //   className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        // >
        //   portfolio
        // </Link>
    //   </li>
    //   <li className="nav-item">
        // <Link
        //   to="/contact"
        //   className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        // >
        //   Contact
        // </Link>
    //   </li>
    //   </div>
    // </ul>
  );
}

export default NavBar;
