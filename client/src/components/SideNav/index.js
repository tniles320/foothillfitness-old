import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown";
import logo from "../../images/foothill-fitness-logo.jpg";
import "./style.css";

function SideNav(props) {
  const { links, onCloseClick, open, equipList } = props;
  // sidenav link list
  const sideNavLinks = links.map((link, index) => {
    return (
      <Link key={index} to={link.link}>
        {link.tag}
      </Link>
    );
  });

  return (
    <div id="sidenav" style={{ width: open ? 200 : 0 }}>
      <button id="close-nav" onClick={onCloseClick}>
        &times;
      </button>
      <Link to="/">
        <img
          src={logo}
          id="profile-image"
          className="card-img"
          alt="taylor niles"
        ></img>
      </Link>
      <Dropdown list={equipList} title="Equipment" />
      {sideNavLinks}
    </div>
  );
}

export default SideNav;
