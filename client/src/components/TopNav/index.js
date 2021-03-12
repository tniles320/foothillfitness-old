import { Link } from "react-router-dom";
import Dropdown from "../Dropdown";
import logo from "../../images/foothill-fitness-logo.jpg";

function TopNav(props) {
  const { links, equipList } = props;
  // topNav link list
  const navLinks = links.map((link, index) => {
    return (
      <Link key={index} to={link.link}>
        {link.tag}
      </Link>
    );
  });

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
      <Dropdown title="Equipment" list={equipList} />
      {navLinks}
    </div>
  );
}

export default TopNav;
