import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css"
// import Navbar from "../NavBar/NavBar"

function NavBar() {

  const location = useLocation();

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom py-4 mb-3" id="logo">
      <li className="navbar-brand ml-5" id="logoname"> Matheus Weber Bolson</li>
      <div className="navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto" id="linksSection"/>
      <li className="nav-item active">
      <Link to="/" className={location.pathname === "/About" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item active">
      <Link
          to="/portfolio"
          className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item active">
      <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      </div>
    </nav>


    // <ul classNameName="navbar navbar-expand-lg navbar-dark bg-dark border-bottom py-4 mb-3" id="logo">
    //   <li classNameName="navbar-brand ml-5" id="logoname">
    //     <Link to="/" classNameName={location.pathname === "/About" ? "nav-link active" : "nav-link"}>
    //       Matheus Weber Bolson
    //     </Link>
    //   </li>
    //   <div className="navbar-collapse" id="navbarNav">
    //   <li classNameName="nav-item">
    //     <Link to="/" classNameName={location.pathname === "/About" ? "nav-link active" : "nav-link"}>
    //       Home
    //     </Link>
    //   </li>
    //   <li classNameName="nav-item">
        // <Link
        //   to="/portfolio"
        //   classNameName={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        // >
        //   portfolio
        // </Link>
    //   </li>
    //   <li classNameName="nav-item">
        // <Link
        //   to="/contact"
        //   classNameName={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        // >
        //   Contact
        // </Link>
    //   </li>
    //   </div>
    // </ul>
  );
}

export default NavBar;
