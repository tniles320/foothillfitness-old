import { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";

const EditFeaturedList = (props) => {
  const { content } = props;
  const [editFeatured, setEditFeatured] = useState({});
  const s3FileURL = process.env.REACT_APP_AWS_URL_LINK;

  const handleEditFeatured = () => {
    API.updateFeatured(content._id, editFeatured).then((res) => {
      if (res.status === 422) {
        console.log(res);
        alert("Error editing feature");
      } else {
        alert("Feature edit successful!");
        window.location.reload();
      }
    });
  };

  const handleDeleteFeatured = () => {
    if (window.confirm("Are you sure you want to delete this?") === true) {
      API.deleteFeatured(content._id).then((res) => {
        if (res.status === 422) {
          console.log(res);
          alert("Error deleting feature");
        } else {
          API.deleteUpload(content.image).then((res) => {
            console.log(res);
          });
          alert("Feature deleted successfully!");
          window.location.reload();
        }
      });
    } else {
      return;
    }
  };

  return (
    <div className="editFeatured">
      <div className="editLink">
        <img
          src={s3FileURL + content.image}
          alt="editor"
          className="editImage"
        />
        <div className="editTextContainer">
          <input
            className="editHeadline"
            onChange={(e) =>
              setEditFeatured({ ...editFeatured, headline: e.target.value })
            }
            placeholder={content.headline}
          ></input>
          <input
            className="editDescription"
            onChange={(e) =>
              setEditFeatured({ ...editFeatured, description: e.target.value })
            }
            placeholder={content.description}
          ></input>
        </div>
      </div>
      <button className="editFeaturedButton" onClick={handleEditFeatured}>
        Save Changes
      </button>
      <button className="deleteFeaturedButton" onClick={handleDeleteFeatured}>
        &#10006;
      </button>
    </div>
  );
};

function FeaturedList() {
  const [featuredContent, setFeaturedContent] = useState([]);

  const handleFeaturedContent = async () => {
    await API.getFeatured().then((res) => {
      res.data.map((content) => {
        return setFeaturedContent((featuredContent) => [
          ...featuredContent,
          content,
        ]);
      });
    });
  };

  useEffect(() => {
    handleFeaturedContent();
  }, []);

  return (
    <div id="editFeaturedContainer">
      {featuredContent.map((content, index) => {
        return <EditFeaturedList content={content} key={index} />;
      })}
    </div>
  );
}

export default FeaturedList;
