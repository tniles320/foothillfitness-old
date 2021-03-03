import { useEffect } from "react";
import Glide from "@glidejs/glide";
import "./glide.core.min.css";
import "./glide.theme.min.css";

function FeaturedCarousel() {
  const glideMount = () => {
    new Glide(".glide", {
      type: "carousel",
      autoplay: 5000,
      hoverpause: true,
      animationDuration: 1000,
    }).mount();
  };

  useEffect(() => {
    glideMount();
  }, []);

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">0</li>
          <li className="glide__slide">1</li>
          <li className="glide__slide">2</li>
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
