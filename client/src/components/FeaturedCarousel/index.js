import { useEffect, useState } from "react";
import API from "../../utils/API";
import Glide from "@glidejs/glide";
import "./glide.core.min.css";
import "./glide.theme.min.css";

const uploadTest = [
  "7D964516-D79F-463E-A375-4A33D45F58B6.jpeg",
  "69D971A5-97B3-4913-8564-83550BD26D85.jpeg",
  "1265960E-C777-4304-83A1-C2B23CD5062C.jpeg",
];

const FeaturedElement = (props) => {
  return (
    <li className="glide__slide">
      <img
        className="postImage"
        src={`http://localhost:3001/public/uploads/${props.featured}`}
        alt="featured post"
      />
    </li>
  );
};

function FeaturedCarousel() {
  //   const [featuredPost, setFeaturedPost] = useState([]);
  const [featuredImages, setFeaturedImages] = useState([]);

  const handleFeaturedImages = () => {
    uploadTest.map(async (image) => {
      const res = await API.getUpload(image);
      setFeaturedImages((featuredImages) => [...featuredImages, res]);
    });
  };

  const glideMount = () => {
    new Glide(".glide", {
      type: "carousel",
      autoplay: 5000,
      hoverpause: true,
      animationDuration: 1000,
    }).mount();
  };

  useEffect(() => {
    handleFeaturedImages();
    glideMount();
  }, []);

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {uploadTest.map((featured, index) => {
            return <FeaturedElement featured={featured} key={index} />;
          })}
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
          &#60;
        </button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
          &#62;
        </button>
      </div>
    </div>
  );
}

export default FeaturedCarousel;
