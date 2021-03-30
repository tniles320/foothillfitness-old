import GoogleMapReact from "google-map-react";
import { SiGooglemaps } from "react-icons/si";
import "./style.css";

const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>;

function MapComponent() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const pin = <SiGooglemaps />;
  const center = {
    lat: 34.10750856403271,
    lng: -117.87215424261728,
  };
  const zoom = 16;

  return (
    // Important! Always set the container height explicitly
    <div className="mapContainer">
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent
          lat={34.10873827765648}
          lng={-117.8729976694055}
          text={pin}
        />
      </GoogleMapReact>
    </div>
  );
}

export default MapComponent;
