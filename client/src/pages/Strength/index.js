import { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import SideBar from "../../components/SideBar";
import API from "../../utils/API";
import ProductCard from "../../components/ProductCard";

const subCategoryList = [
  "Barbells",
  "Dumbbells",
  "Plates",
  "Machines",
  "Racks",
  "Benches",
  "All-in-one Gym",
  "Kettlebells",
  "Cable Machines",
  "Accessories",
];

function Strength() {
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
    await API.getStrength().then((res) => {
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
      <ProductCard />
    </div>
  );
}

export default Strength;
