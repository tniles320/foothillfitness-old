import { useState, useEffect } from "react";
import ProductCard from "../ProductCard";

function ViewableList(props) {
  const { categorySelect, productList } = props;
  const [viewableList, setViewableList] = useState([]);

  useEffect(() => {
    if (categorySelect.category === "") {
      setViewableList(productList);
    } else {
      setViewableList([]);
      productList.forEach((product) => {
        if (product.subCategory === categorySelect.category) {
          setViewableList((viewableList) => [...viewableList, product]);
        }
      });
    }
  }, [categorySelect, productList]);

  return (
    <div className="productContainer">
      {viewableList.map((product, index) => {
        return <ProductCard product={product} key={index} />;
      })}
    </div>
  );
}

export default ViewableList;
