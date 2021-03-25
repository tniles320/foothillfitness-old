import { Link } from "react-router-dom";
import "./style.css";

function ContactComponent() {
  return (
    <div className="homeContactContainer">
      <Link to="/contact" className="contactLink">
        We offer repair, set-up, and many other related services. <br />
        <br />
        Click here to find out more!
      </Link>
    </div>
  );
}

export default ContactComponent;
