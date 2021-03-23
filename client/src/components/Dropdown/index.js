import { Link } from "react-router-dom";
import "./style.css";

function Dropdown(props) {
  const { list, title } = props;

  const dropdownLinks = list.map((link, index) => {
    return (
      <Link key={index} to={link.link}>
        {link.tag}
      </Link>
    );
  });

  return (
    <div className="dropdown">
      <button className="dropbtn topNavLink">{title}</button>
      <div className="dropdown-content">{dropdownLinks}</div>
    </div>
  );
}

export default Dropdown;
