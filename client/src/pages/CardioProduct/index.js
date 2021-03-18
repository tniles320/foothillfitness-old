import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import SingleProduct from "../../components/SingleProduct";
import API from "../../utils/API";
import AdminContext from "../../utils/AdminContext";
import AdminNav from "../../components/AdminNav";

function CardioProduct(props) {
  const { loggedIn } = useContext(AdminContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    API.getOneCardio(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      {loggedIn ? <AdminNav handleLogout={props.handleLogout} /> : <Nav />}
      <SingleProduct product={product} />
    </div>
  );
}

export default CardioProduct;
