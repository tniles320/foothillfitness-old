import { useState, useEffect } from "react";
import BrandCard from "../../components/BrandCard";
import API from "../../utils/API";
import "./style.css";

function BrandList() {
  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    API.getBrand().then((res) => {
      res.data.map((content) => {
        return setBrandList((brandList) => [content, ...brandList]);
      });
    });
  }, []);

  return (
    <div className="brandListContainer">
      {brandList.map((brand, index) => {
        return <BrandCard brand={brand} key={index} />;
      })}
    </div>
  );
}

export default BrandList;
