import "./style.css";

const SalePrice = (props) => {
  const { editProduct, setEditProduct } = props;
  if (editProduct.sale) {
    return (
      <div className="saleInputContainer">
        <label htmlFor="salePrice">Sale Price</label>
        <input
          type="text"
          className="salePrice"
          placeholder="Set sale price"
          defaultValue={editProduct.salePrice}
          onChange={(e) =>
            setEditProduct({ ...editProduct, salePrice: e.target.value })
          }
        ></input>
      </div>
    );
  } else if (!editProduct.sale) {
    return null;
  }
};

function SaleComponent(props) {
  const { editProduct, setEditProduct } = props;

  const SaleButton = () => {
    if (editProduct.sale) {
      return (
        <button
          className="stopSaleButton"
          onClick={() =>
            setEditProduct({
              ...editProduct,
              sale: false,
            })
          }
        >
          Stop Sale
        </button>
      );
    } else if (!editProduct.sale) {
      return (
        <button
          className="startSaleButton"
          onClick={() =>
            setEditProduct({
              ...editProduct,
              sale: true,
            })
          }
        >
          Start Sale
        </button>
      );
    }
  };

  return (
    <div className="saleContainer">
      <SaleButton />
      <SalePrice editProduct={editProduct} setEditProduct={setEditProduct} />
    </div>
  );
}

export default SaleComponent;
