import { Link } from "react-router-dom";

function ServiceComponent() {
  return (
    <div>
      <Link to="/services" className="serviceLink">
        Services
      </Link>
    </div>
  );
}

export default ServiceComponent;
