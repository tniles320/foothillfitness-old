import { useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown";
import logo from "../../images/foothill-fitness-logo.jpg";
import AdminContext from "../../utils/AdminContext";
import "./style.css";

function SideNav(props) {
  const { links, onCloseClick, open, equipList, handleLogout } = props;
  const { loggedIn } = useContext(AdminContext);

  // sidenav link list
  const sideNavLinks = links.map((link, index) => {
    return (
      <Link key={index} to={link.link} className="sideNavLink">
        {link.tag}
      </Link>
    );
  });

  const LogoutButton = () => {
    if (loggedIn) {
      return (
        <div className="sideNavLogout" onClick={handleLogout}>
          Logout
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <Link to={loggedIn ? "/admin" : "/"}>
        <img src={logo} className="sideNavLogo" alt="logo"></img>
      </Link>
      <div id="sidenav" style={{ width: open ? 200 : 0 }}>
        <button id="close-nav" onClick={onCloseClick}>
          &times;
        </button>
        <Dropdown list={equipList} title="Equipment" />
        {sideNavLinks}
        <LogoutButton />
      </div>
    </div>
  );
}

export default SideNav;
