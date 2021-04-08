import TopNav from "../TopNav";
import MobileNav from "../MobileNav";
import ADMIN from "../../utils/ADMIN";

function AdminNav() {
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

  const handleLogout = async () => {
    await ADMIN.logout().then((res) => {
      console.log("successfully logged out!");
      if (res.status === 200) {
        window.location.reload();
      }
    });
  };

  return (
    <div>
      <TopNav links={links} equipList={equipList} handleLogout={handleLogout} />
      <MobileNav
        links={links}
        equipList={equipList}
        handleLogout={handleLogout}
      />
    </div>
  );
}

export default AdminNav;
