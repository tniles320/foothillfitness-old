import { useContext } from "react";
import { Link } from "react-router-dom";
import AdminContext from "../../utils/AdminContext";
import API from "../../utils/API";
import "./style.css";

function ProductCard(props) {
  const { product } = props;
  const { loggedIn } = useContext(AdminContext);
  const productLink = `/admin/${product.category}/${product._id}`;
  const s3FileURL = process.env.REACT_APP_AWS_URL_LINK;

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
          console.log(product);
          if (res.status === 422) {
            console.log(res);
            alert("Error deleting product");
          }
        });
      }
      API.deleteUpload(product.image);
      alert("Product deleted successfully!");
    } else {
      return;
    }
  };

  const SaleBanner = () => {
    if (product.sale) {
      return <div className="saleBanner">On Sale!</div>;
    } else {
      return null;
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
            src={s3FileURL + product.image}
            alt="editor"
            className="productImage"
          />
          <div className="productTextContainer">
            <div className="productBrand">{product.brand}</div>
            <div className="productName">{product.name}</div>
            <SaleBanner />
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
            src={s3FileURL + product.image}
            alt="editor"
            className="productImage"
          />
          <div className="productTextContainer">
            <div className="productBrand">{product.brand}</div>
            <div className="productName">{product.name}</div>
            <SaleBanner />
          </div>
        </Link>
      </div>
    );
  }
}

export default ProductCard;
