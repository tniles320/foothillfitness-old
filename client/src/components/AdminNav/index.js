import { useState } from "react";
import TopNav from "../TopNav";
import SideNav from "../SideNav";

// sideNav Contents
const Contents = (props) => <div>{props.children}</div>;

function AdminNav(props) {
  const [navState, setNavState] = useState({ sideNavOpen: false });

  const links = [
    {
      link: "/admin/brands",
      tag: "Brands",
    },
    {
      link: "/admin/featured",
      tag: "Featured Content",
    },
    {
      link: "/admin/add-product",
      tag: "Add Product",
    },
  ];

  const equipList = [
    {
      link: "/admin/cardio",
      tag: "Cardio",
    },
    {
      link: "/admin/strength",
      tag: "Strength",
    },
  ];

  const handleSideNavOpen = () => {
    setNavState({ sideNavOpen: true });
  };

  const handleSideNavClose = () => {
    setNavState({ sideNavOpen: false });
  };

  return (
    <div>
      <TopNav
        links={links}
        equipList={equipList}
        handleLogout={props.handleLogout}
      />
      <SideNav
        open={navState.sideNavOpen}
        onCloseClick={handleSideNavClose}
        links={links}
        equipList={equipList}
        handleLogout={props.handleLogout}
      />
      <Contents open={navState.sideNavOpen}>
        <button id="open-nav" onClick={handleSideNavOpen}>
          &#9776;
        </button>
      </Contents>
    </div>
  );
}

export default AdminNav;
