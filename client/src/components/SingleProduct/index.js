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

function SingleProduct(props) {
  const { product } = props;
  return (
    <div className="singleProductContainer">
      <img
        src={`http://localhost:3001/public/uploads/${product.image}`}
        alt={product.name}
        className="singleImage"
      />
      <div className="singleTextContainer">
        <h1 className="singleName">{product.name}</h1>
        <h2 className="singlePrice">{product.price}</h2>
        <LowQuantity quantity={product.quantity} />
        <div className="singleDescription">{product.description}</div>
      </div>
    </div>
  );
}

export default SingleProduct;
