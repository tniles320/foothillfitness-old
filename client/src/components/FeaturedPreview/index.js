import "./style.css";

function FeaturedPreview(props) {
  const { newFeatured } = props;
  const s3FileURL = process.env.REACT_APP_AWS_URL_LINK;

  return (
    <div className="featuredPreviewContainer">
      <img
        className="featuredImagePreview"
        src={s3FileURL + newFeatured.image}
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
