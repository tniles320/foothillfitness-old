import { useContext } from "react";
import AdminContext from "../../utils/AdminContext";
import API from "../../utils/API";
import "./style.css";

function BrandCard(props) {
  const { brand } = props;
  const { loggedIn } = useContext(AdminContext);
  const s3FileURL = process.env.REACT_APP_AWS_URL_LINK;

  const handleDeleteButton = () => {
    if (window.confirm("Are you sure you want to delete this?") === true) {
      API.deleteBrand(brand._id).then((res) => {
        if (res.status === 422) {
          console.log(res);
          alert("Error deleting product");
        }
      });
      API.deleteUpload(brand.image);
      alert("Brand deleted successfully!");
    } else {
      return;
    }
  };

  if (loggedIn) {
    return (
      <div className="brandCardContainer">
        <button className="deleteBrand" onClick={handleDeleteButton}>
          &#10006;
        </button>
        <a
          href={brand.link}
          target="_blank"
          rel="noreferrer"
          className="brandLink"
        >
          <img
            src={s3FileURL + brand.image}
            alt={`${brand.name} logo`}
            className="brandImage"
          />
        </a>
      </div>
    );
  } else {
    return (
      <div className="brandCardContainer">
        <a
          href={brand.link}
          target="_blank"
          rel="noreferrer"
          className="brandLink"
        >
          <img
            src={s3FileURL + brand.image}
            alt={`${brand.name} logo`}
            className="brandImage"
          />
        </a>
      </div>
    );
  }
}

export default BrandCard;
