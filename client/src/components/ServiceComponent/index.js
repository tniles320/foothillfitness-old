import { Link } from "react-router-dom";
import serviceImage from "../../images/Over-Project1.png";
import "./style.css";

function ServiceComponent() {
  return (
    <div className="homeServiceContainer">
      <img src={serviceImage} alt="gym equipment" className="serviceImg" />
      <div className="homeServiceText">
        <div className="homeHeader">Services</div>
        <Link to="/services" className="serviceLink">
          We offer repair, set-up, and many other related services. <br />
          <br />
          Click here to find out more!
        </Link>
      </div>
    </div>
  );
}

export default ServiceComponent;
