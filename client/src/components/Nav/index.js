import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/foothill-fitness-logo.jpg";
import "./style.css";

// topNav visible on desktop screens
const TopNav = () => {
  const links = [
    ["/equipment", "Equipment"],
    ["/brands", "Our Brands"],
    ["/services", "Services"],
    ["/about", "About Us"],
    ["/contact", "Contact"],
    ["/list", "My List"],
  ].map(([to, label]) => (
    <Link key={to} to={to}>
      {label}
    </Link>
  ));

  return (
    <div id="topNav">
      <Link to="/">
        <img
          src={logo}
          id="profile-image"
          className="card-img"
          alt="taylor niles"
        ></img>
      </Link>
      {links}
    </div>
  );
};

// sideNav component visible on mobile devices
const SideNav = (props) => {
  const links = [
    ["/equipment", "Equipment"],
    ["/brands", "Our Brands"],
    ["/services", "Services"],
    ["/about", "About Us"],
    ["/contact", "Contact"],
    ["/list", "My List"],
  ].map(([to, label]) => (
    <Link key={to} to={to} onClick={props.onCloseClick}>
      {label}
    </Link>
  ));

  return (
    <div id="sidenav" style={{ width: props.open ? 200 : 0 }}>
      <button id="close-nav" onClick={props.onCloseClick}>
        &times;
      </button>
      {links}
    </div>
  );
};

// sideNav Contents
const Contents = (props) => <div>{props.children}</div>;

function Nav() {
  const [navState, setNavState] = useState({ sideNavOpen: false });

  const handleSideNavOpen = () => {
    setNavState({ sideNavOpen: true });
  };

  const handleSideNavClose = () => {
    setNavState({ sideNavOpen: false });
  };

  return (
    <div>
      <TopNav />
      <SideNav open={navState.sideNavOpen} onCloseClick={handleSideNavClose} />
      <Contents open={navState.sideNavOpen}>
        <button id="open-nav" onClick={handleSideNavOpen}>
          &#9776;
        </button>
      </Contents>
    </div>
  );
}

export default Nav;
