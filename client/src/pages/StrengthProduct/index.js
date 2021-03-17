import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import SingleProduct from "../../components/SingleProduct";
import API from "../../utils/API";

function StrengthProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const handleProduct = () => {
    API.getOneStrength(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleProduct();
  }, []);

  return (
    <div>
      <Nav />
      <SingleProduct product={product} />
    </div>
  );
}

export default StrengthProduct;
