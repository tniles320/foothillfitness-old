import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";

const EditFeaturedList = (props) => {
  const { content } = props;
  return (
    <div className="editFeatured">
      <Link to={content.link} className="editLink">
        <img
          src={`http://localhost:3001/public/uploads/${content.image}`}
          alt="editor"
          className="editImage"
        />
        <div className="editTextContainer">
          <div className="editHeadline">{content.headline}</div>
          <div className="editDescription">{content.description}</div>
        </div>
      </Link>
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
