import { useState, useEffect, useContext } from "react";
import SaleComponent from "../../components/SaleComponent";
import AdminContext from "../../utils/AdminContext";
import API from "../../utils/API";
import "./style.css";

const LowQuantity = (props) => {
  const { quantity } = props;
  if (quantity <= 2) {
    return <div className="singleQuantity">Only {quantity} left!</div>;
  } else if (quantity === 0) {
    return <div className="singleQuantity">Currently sold out</div>;
  } else {
    return null;
  }
};

const PriceComponent = (props) => {
  const { product } = props;
  if (product.sale) {
    return (
      <div className="priceContainer">
        <h2
          className="singlePrice"
          style={{ textDecoration: "line-through", textDecorationColor: "red" }}
        >
          {product.price}
        </h2>
        <h2 className="singlePrice" style={{ color: "red" }}>
          {product.salePrice}
        </h2>
      </div>
    );
  } else {
    return (
      <div className="priceContainer">
        <h2 className="singlePrice">{product.price}</h2>
      </div>
    );
  }
};

function SingleProduct(props) {
  const { product } = props;
  const { loggedIn } = useContext(AdminContext);
  const [editProduct, setEditProduct] = useState({});

  const handleEditProduct = () => {
    console.log(editProduct);
    if (product.category === "strength") {
      API.updateStrength(product._id, editProduct).then((res) => {
        if (res.status === 422) {
          console.log(res);
          alert("Error editing product");
        }
      });
    } else if (product.category === "cardio") {
      API.updateCardio(product._id, editProduct).then((res) => {
        if (res.status === 422) {
          console.log(res);
          alert("Error adding product");
        }
      });
    }
    alert("Product edit successful!");
  };

  useEffect(() => {
    setEditProduct({ ...product });
  }, [product]);

  if (loggedIn) {
    return (
      <div className="singleProductContainer">
        <img
          src={`http://localhost:3001/public/uploads/${product.image}`}
          alt={product.name}
          className="singleImage"
        />
        <div className="singleTextContainer">
          <label htmlFor="singleName">Name</label>
          <input
            id="singleName"
            defaultValue={product.name}
            onChange={(e) =>
              setEditProduct({ ...editProduct, name: e.target.value })
            }
          ></input>
          <label htmlFor="singlePrice">Price</label>
          <input
            className="singlePrice"
            defaultValue={product.price}
            onChange={(e) =>
              setEditProduct({ ...editProduct, price: e.target.value })
            }
          ></input>
          <label htmlFor="singleQuantity">Quantity</label>
          <input
            type="number"
            defaultValue={product.quantity}
            onChange={(e) =>
              setEditProduct({ ...editProduct, quantity: e.target.value })
            }
          ></input>
          <label htmlFor="singleDescription">Description</label>
          <textarea
            className="singleDescription"
            defaultValue={product.description}
            onChange={(e) =>
              setEditProduct({ ...editProduct, description: e.target.value })
            }
          ></textarea>
          <SaleComponent
            editProduct={editProduct}
            setEditProduct={setEditProduct}
          />
          <button className="editProductButton" onClick={handleEditProduct}>
            Submit Edit
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="singleProductContainer">
        <img
          src={`http://localhost:3001/public/uploads/${product.image}`}
          alt={product.name}
          className="singleImage"
        />
        <div className="singleTextContainer">
          <h1 className="singleName">{product.name}</h1>
          <PriceComponent product={product} />
          <LowQuantity quantity={product.quantity} />
          <div className="singleDescription">{product.description}</div>
        </div>
      </div>
    );
  }
}

export default SingleProduct;
