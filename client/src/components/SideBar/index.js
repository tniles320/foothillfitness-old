import { useState, useEffect } from "react";
import "./style.css";

function SideBar(props) {
  const { categories, handleCategorySelect } = props;

  const [open, setOpen] = useState({ open: false });

  const handleSideBarOpen = () => {
    setOpen({ open: true });
  };

  useEffect(() => {
    handleSideBarOpen();
  }, []);

  // sidebar category list
  const sideBarCategories = categories.map((category, index) => {
    return (
      <div
        className="sideBarCategory"
        key={index}
        onClick={() => handleCategorySelect(category.toLowerCase())}
      >
        {category}
      </div>
    );
  });

  return (
    <div id="sidebar" style={{ height: open.open ? "100%" : 0 }}>
      {sideBarCategories}
    </div>
  );
}

export default SideBar;
