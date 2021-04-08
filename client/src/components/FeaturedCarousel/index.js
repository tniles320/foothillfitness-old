import { useEffect, useState } from "react";
import API from "../../utils/API";
import Glide from "@glidejs/glide";
import "./glide.core.min.css";
import "./glide.theme.min.css";
import "./style.css";

const s3FileURL = process.env.REACT_APP_AWS_URL_LINK;

const FeaturedElement = (props) => {
  const { content } = props;
  return (
    <li className="glide__slide featured">
      <div className="featuredLink">
        <img
          className="featuredImage"
          src={s3FileURL + content.image}
          alt="featured post"
        />
        <div className="featuredContainer">
          <div className="featuredTextContainer">
            <div className="featuredHeadline">{content.headline}</div>
            <div className="featuredDescription">{content.description}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

function FeaturedCarousel() {
  const [featuredContent, setFeaturedContent] = useState([]);

  const handleFeaturedContent = async () => {
    await API.getFeatured().then((res) => {
      res.data.map((content) => {
        return setFeaturedContent((featuredContent) => [
          content,
          ...featuredContent,
        ]);
      });
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
    handleFeaturedContent().then(() => {
      // if (featuredContent.length !== 0) {
      glideMount();
      // } else {
      //   return;
      // }
    });
  }, []);

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {featuredContent.map((content, index) => {
            return <FeaturedElement content={content} key={index} />;
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
