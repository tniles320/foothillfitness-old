import "./style.css";

function ProductPreview(props) {
  const { newProduct } = props;
  const s3FileURL = process.env.REACT_APP_AWS_URL_LINK;

  return (
    <div className="productPreviewContainer">
      <img
        src={s3FileURL + newProduct.image}
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
