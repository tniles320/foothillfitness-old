import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown";
import AdminContext from "../../utils/AdminContext";
import "./style.css";

const DropdownContent = (props) => {
  const { dropdownStatus, list, equipList, handleLogout } = props;
  const { loggedIn } = useContext(AdminContext);

  const LogoutButton = () => {
    if (loggedIn) {
      return (
        <div className="navLogout" onClick={handleLogout}>
          Logout
        </div>
      );
    } else {
      return null;
    }
  };

  const dropdownLinks = list.map((link, index) => {
    return (
      <Link key={index} to={link.link} className="mobileNavLink">
        {link.tag}
      </Link>
    );
  });

  if (dropdownStatus.isOpen) {
    return (
      <div className="mobileDropContent">
        <Dropdown title="Equipment" list={equipList} />
        {dropdownLinks}
        <LogoutButton />
      </div>
    );
  } else {
    return null;
  }
};

function MobileDropdown(props) {
  const [dropdownStatus, setDropdownStatus] = useState({ isOpen: false });
  const { list, title, equipList, handleLogout } = props;

  const handleDropdownOpen = () => {
    setDropdownStatus({ isOpen: !dropdownStatus.isOpen });
  };

  return (
    <div className="mobileDropdown">
      <button className="mobileDropbtn" onClick={handleDropdownOpen}>
        {title}
      </button>
      <DropdownContent
        dropdownStatus={dropdownStatus}
        list={list}
        equipList={equipList}
        handleLogout={handleLogout}
      />
    </div>
  );
}

export default MobileDropdown;
