import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const DropdownContent = (props) => {
  const { dropdownStatus, list } = props;

  const dropdownLinks = list.map((link, index) => {
    return (
      <Link key={index} to={link.link} className="dropdownLink">
        {link.tag}
      </Link>
    );
  });

  if (dropdownStatus.isOpen) {
    return <div className="dropdown-content">{dropdownLinks}</div>;
  } else {
    return null;
  }
};

function Dropdown(props) {
  const [dropdownStatus, setDropdownStatus] = useState({ isOpen: false });
  const { list, title } = props;

  const handleDropdownOpen = () => {
    setDropdownStatus({ isOpen: !dropdownStatus.isOpen });
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={handleDropdownOpen}>
        {title}
      </button>
      <DropdownContent dropdownStatus={dropdownStatus} list={list} />
    </div>
  );
}

export default Dropdown;
