import "./style.css";

function BrandPreview(props) {
  const { newBrand } = props;

  return (
    <div className="brandPreviewContainer">
      <img
        src={`http://localhost:3001/public/uploads/${newBrand.image}`}
        alt={newBrand.name}
        className="imagePreview"
      />
    </div>
  );
}

export default BrandPreview;
