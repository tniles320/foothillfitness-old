import { useState } from "react";
import TopNav from "../TopNav";
import MobileNav from "../MobileNav";
import "./style.css";

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
      <MobileNav
        open={navState.sideNavOpen}
        onCloseClick={handleSideNavClose}
        links={links}
        equipList={equipList}
      />
    </div>
  );
}

export default Nav;
