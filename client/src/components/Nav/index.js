import { useState } from "react";
import TopNav from "../TopNav";
import SideNav from "../SideNav";
import "./style.css";

// sideNav Contents
const Contents = (props) => <div>{props.children}</div>;

const links = [
  {
    link: "/brands",
    tag: "Our Brands",
  },
  {
    link: "/services",
    tag: "Services",
  },
  {
    link: "/about",
    tag: "About Us",
  },
  {
    link: "/contact",
    tag: "Contact",
  },
  {
    link: "/list",
    tag: "My List",
  },
];

const equipList = [
  {
    link: "/cardio",
    tag: "Cardio",
  },
  {
    link: "/strength",
    tag: "Strength",
  },
];

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
      <TopNav links={links} equipList={equipList} />
      <SideNav
        open={navState.sideNavOpen}
        onCloseClick={handleSideNavClose}
        links={links}
        equipList={equipList}
      />
      <Contents open={navState.sideNavOpen}>
        <button id="open-nav" onClick={handleSideNavOpen}>
          &#9776;
        </button>
      </Contents>
    </div>
  );
}

export default Nav;
