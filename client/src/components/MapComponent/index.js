import GoogleMapReact from "google-map-react";
import "./style.css";

const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>;

function MapComponent() {
  const center = {
    lat: 34.10750856403271,
    lng: -117.87215424261728,
  };
  const zoom = 16;

  return (
    // Important! Always set the container height explicitly
    <div className="mapContainer">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCXEyTbZZHeO6OlXKwQztUqSFS2Tl4g9aE" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent
          lat={34.10873827765648}
          lng={-117.8729976694055}
          text="&#9737;"
        />
      </GoogleMapReact>
    </div>
  );
}

export default MapComponent;
