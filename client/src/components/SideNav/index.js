import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function SideNav(props) {
  const { openNav, closeNav } = props;

  return (
    <div>
      <div id="sidenav">
        <button id="close-nav" onClick={closeNav}>
          &times;
        </button>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/projects">
          Projects
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </div>

      <button id="open-nav" onClick={openNav}>
        &#9776;
      </button>
    </div>
  );
}

export default SideNav;
