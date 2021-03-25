import "./style.css";

function ProductPreview(props) {
  const { newProduct } = props;
  return (
    <div className="productPreviewContainer">
      <img
        src={`http://localhost:3001/public/uploads/${newProduct.image}`}
        alt={newProduct.name}
        className="imagePreview"
      />
      <div className="textContainerPreview">
        <h3 className="brandPreview">{newProduct.brand}</h3>
        <h1 className="namePreview">{newProduct.name}</h1>
        <div className="pricePreview">{newProduct.price} </div>
        <div className="quantityPreview">{newProduct.quantity} </div>
        <div className="descriptionPreview">{newProduct.description}</div>
      </div>
    </div>
  );
}

export default ProductPreview;
