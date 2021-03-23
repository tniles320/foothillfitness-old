import { useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown";
import logo from "../../images/foothill-fitness-logo.jpg";
import AdminContext from "../../utils/AdminContext";
import "./style.css";

function TopNav(props) {
  const { links, equipList, handleLogout } = props;
  const { loggedIn } = useContext(AdminContext);

  // topNav link list
  const navLinks = links.map((link, index) => {
    return (
      <Link key={index} to={link.link} className="topNavLink">
        {link.tag}
      </Link>
    );
  });

  const LogoutButton = () => {
    if (loggedIn) {
      return (
        <button className="logout" onClick={() => handleLogout()}>
          Logout
        </button>
      );
    } else {
      return null;
    }
  };

  return (
    <div id="topNav">
      <Link to={loggedIn ? "/admin" : "/"}>
        <img src={logo} className="logo" alt="logo"></img>
      </Link>
      <div className="navLinkContainer">
        <Dropdown title="Equipment" list={equipList} />
        {navLinks}
        <LogoutButton />
      </div>
    </div>
  );
}

export default TopNav;
