import { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import SideBar from "../../components/SideBar";
import API from "../../utils/API";
import ViewableList from "../../components/ViewableList";

const subCategoryList = [
  "Treadmills",
  "Bikes",
  "Stair Climbers",
  "Rowing Machines",
  "Eliptcals",
  "Accessories",
];

function Cardio() {
  const [productList, setProductList] = useState([]);
  const [categorySelect, setCategorySelect] = useState({
    category: "",
  });

  const handleCategorySelect = (category) => {
    setCategorySelect({
      category: category,
    });
  };

  const handleProductList = async () => {
    await API.getCardio().then((res) => {
      res.data.map((content) => {
        return setProductList((productList) => [...productList, content]);
      });
    });
  };

  useEffect(() => {
    handleProductList();
  }, []);

  return (
    <div>
      <Nav />
      <SideBar
        categories={subCategoryList}
        handleCategorySelect={handleCategorySelect}
      />
      <ViewableList productList={productList} categorySelect={categorySelect} />
    </div>
  );
}

export default Cardio;
