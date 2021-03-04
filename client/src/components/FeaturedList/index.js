import { useState, useEffect } from "react";
import API from "../../utils/API";

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

  console.log(featuredContent);

  return <div></div>;
}

export default FeaturedList;
