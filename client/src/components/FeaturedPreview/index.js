import "./style.css";

function FeaturedPreview(props) {
  const { newFeatured } = props;
  return (
    <div className="featuredPreviewContainer">
      <img
        className="featuredImagePreview"
        src={`http://localhost:3001/public/uploads/${newFeatured.image}`}
        alt="featured post"
      />
      <div className="featuredTextContainerPreview">
        <div className="featuredHeadlinePreview">{newFeatured.headline}</div>
        <div className="featuredDescriptionPreview">
          {newFeatured.description}
        </div>
      </div>
    </div>
  );
}

export default FeaturedPreview;
