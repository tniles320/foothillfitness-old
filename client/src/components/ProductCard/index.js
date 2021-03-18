import { useContext } from "react";
import { Link } from "react-router-dom";
import AdminContext from "../../utils/AdminContext";
import API from "../../utils/API";
import "./style.css";

function ProductCard(props) {
  const { product } = props;
  const { loggedIn } = useContext(AdminContext);
  const productLink = `/admin/${product.category}/${product._id}`;

  const handleDeleteButton = () => {
    if (window.confirm("Are you sure you want to delete this?") === true) {
      if (product.category === "cardio") {
        API.deleteCardio(product._id).then((res) => {
          if (res.status === 422) {
            console.log(res);
            alert("Error deleting product");
          }
        });
      } else {
        API.deleteStrength(product._id).then((res) => {
          if (res.status === 422) {
            console.log(res);
            alert("Error deleting product");
          }
        });
      }
      alert("Product deleted successfully!");
    } else {
      return;
    }
  };

  if (loggedIn) {
    return (
      <div className="productCard">
        <button className="deleteProduct" onClick={handleDeleteButton}>
          &#10006;
        </button>
        <Link to={productLink} className="productLink">
          <img
            src={`http://localhost:3001/public/uploads/${product.image}`}
            alt="editor"
            className="productImage"
          />
          <div className="productTextContainer">
            <div className="productName">{product.name}</div>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="productCard">
        <Link
          to={`/${product.category}/${product._id}`}
          className="productLink"
        >
          <img
            src={`http://localhost:3001/public/uploads/${product.image}`}
            alt="editor"
            className="productImage"
          />
          <div className="productTextContainer">
            <div className="productName">{product.name}</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default ProductCard;