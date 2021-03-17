import { Link } from "react-router-dom";
import "./style.css";

function ProductCard(props) {
  const { product } = props;
  return (
    <div className="productCard">
      <Link to={`/${product.category}/${product._id}`} className="productLink">
        <img
          src={`http://localhost:3001/public/uploads/${product.image}`}
          alt="editor"
          className="productImage"
        />
        <div className="productTextContainer">
          <div className="productName">{product.name}</div>
          <div className="productDescription">{product.description}</div>
          <div className="productPrice">{product.price}</div>
          <div className="productQuantity">{product.quantity}</div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
