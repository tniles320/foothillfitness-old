import { useState, useEffect, useContext } from "react";
import Nav from "../../components/Nav";
import SideBar from "../../components/SideBar";
import API from "../../utils/API";
import ViewableList from "../../components/ViewableList";
import AdminContext from "../../utils/AdminContext";
import AdminNav from "../../components/AdminNav";

const subCategoryList = [
  "Treadmills",
  "Bikes",
  "Stair Climbers",
  "Rowing Machines",
  "Ellipticals",
  "Accessories",
];

function Cardio(props) {
  const { loggedIn } = useContext(AdminContext);
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
      {loggedIn ? <AdminNav handleLogout={props.handleLogout} /> : <Nav />}
      <SideBar
        categories={subCategoryList}
        handleCategorySelect={handleCategorySelect}
      />
      <ViewableList productList={productList} categorySelect={categorySelect} />
    </div>
  );
}

export default Cardio;
