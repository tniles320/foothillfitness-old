import { useState, useEffect } from "react";
import ProductCard from "../ProductCard";

function ViewableList(props) {
  const { categorySelect, productList } = props;
  const [viewableList, setViewableList] = useState([]);

  useEffect(() => {
    if (categorySelect.category === "") {
      const maxList = [];
      productList.forEach((product) => {
        if (maxList.length < 30) {
          maxList.push(product);
        }
      });
      setViewableList(maxList);
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
        if (index >= 20) {
          return null;
        } else {
          return <ProductCard product={product} key={index} />;
        }
      })}
    </div>
  );
}

export default ViewableList;
