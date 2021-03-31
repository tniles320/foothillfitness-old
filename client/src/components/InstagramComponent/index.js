import { FaInstagram } from "react-icons/fa";
import instaImage from "../../images/Over-Project5.png";
import "./style.css";

function InstagramComponent() {
  const handleInstagramLink = () => {
    window.open("https://www.instagram.com/foothillfitnessequipandrepair/");
  };
  return (
    <div className="instagramContainer">
      <img src={instaImage} alt="dumbells" className="instaImg" />
      <div className="homeInstagramText">
        <div className="instaHeader">Follow us on Instagram</div>
        <div className="instaDescription">
          We post daily about new equipment and sales! <br />
          Click the link below!
        </div>
        <FaInstagram className="instagramIcon" onClick={handleInstagramLink} />
      </div>
    </div>
  );
}

export default InstagramComponent;
