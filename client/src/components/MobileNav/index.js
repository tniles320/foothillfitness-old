import { useContext } from "react";
import { Link } from "react-router-dom";
import MobileDropdown from "../MobileDropdown";
import logo from "../../images/foothill-fitness-logo.jpg";
import AdminContext from "../../utils/AdminContext";
import "./style.css";

function MobileNav(props) {
  const { links, equipList, handleLogout } = props;
  const { loggedIn } = useContext(AdminContext);

  return (
    <div className="mobileNavContainer">
      <div className="mobileLogoLink">
        <Link to={loggedIn ? "/admin" : "/"}>
          <img src={logo} className="sideNavLogo" alt="logo"></img>
        </Link>
      </div>
      <div className="mobileDropdownContainer">
        <MobileDropdown
          title="&#9776;"
          list={links}
          equipList={equipList}
          handleLogout={handleLogout}
        />
      </div>
    </div>
  );
}

export default MobileNav;
