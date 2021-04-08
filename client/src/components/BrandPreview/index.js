import "./style.css";

function BrandPreview(props) {
  const { newBrand } = props;
  const s3FileURL = process.env.REACT_APP_AWS_URL_LINK;

  return (
    <div className="brandPreviewContainer">
      <img
        src={s3FileURL + newBrand.image}
        alt={newBrand.name}
        className="brandImagePreview"
      />
    </div>
  );
}

export default BrandPreview;
