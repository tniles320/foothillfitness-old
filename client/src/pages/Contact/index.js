import Nav from "../../components/Nav";
import contactImage from "../../images/Over-Project4.png";
import EmailComponent from "../../components/EmailComponent";
import MapComponent from "../../components/MapComponent";
import Footer from "../../components/Footer";
import "./style.css";

const navigate = (lat, lng) => {
  // If it's an iPhone..
  if (
    navigator.platform.indexOf("iPhone") !== -1 ||
    navigator.platform.indexOf("iPod") !== -1
  ) {
    function iOSversion() {
      if (/iP(hone|od|ad)/.test(navigator.platform)) {
        // supports iOS 2.0 and later
        var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [
          parseInt(v[1], 10),
          parseInt(v[2], 10),
          parseInt(v[3] || 0, 10),
        ];
      }
    }
    var ver = iOSversion() || [0];

    var protocol = "http://";
    if (ver[0] >= 6) {
      protocol = "maps://";
    }
    window.location =
      protocol + "maps.apple.com/maps?daddr=" + lat + "," + lng + "&amp;ll=";
  } else {
    window.open("http://maps.google.com?daddr=" + lat + "," + lng + "&amp;ll=");
  }
};

function Contact() {
  const handlePhone = (phone) => {
    window.open(`tel:+1${phone}`);
  };

  const phone1 = "6263352773";
  const phone2 = "6262152656";

  return (
    <div>
      <Nav />
      <div className="mapLocation">
        <div className="contactStreetLocation">
          <div>Come to the store any time during the listed hours:</div>
          <div className="hours">
            Mon - Closed <br />
            Tue - 12:00 pm – 06:00 pm <br />
            Wed - 12:00 pm – 06:00 pm <br />
            Thu - 12:00 pm – 06:00 pm <br />
            Fri - 12:00 pm – 06:00 pm <br />
            Sat - 12:00 pm – 06:00 pm <br />
            Sun - Closed
          </div>
          We're located at: <br />
          <span
            onClick={() => navigate(34.10750856403271, -117.87215424261728)}
          >
            1736 S Grand Ave, Glendora, CA 91740
          </span>
          <div>Click the link to begin navigation</div>
        </div>
        <MapComponent />
      </div>
      <div className="contactPageContainer">
        <div className="contactImageContainer">
          <img
            src={contactImage}
            alt="gym equipment"
            className="contactPageImage"
          />
        </div>
        <div className="contactEmailContainer">
          <div className="contactEmailHeader">
            Have a question for our staff?
            <div className="contactPhone">
              <br />
              You can call us at:
              <span onClick={() => handlePhone(phone1)}>
                <br />
                (626) 335-2773
              </span>
              <br />
              or
              <span onClick={() => handlePhone(phone2)}>
                <br />
                (626) 215-2656
              </span>
            </div>
            Or send us an email below
          </div>
          <EmailComponent subject="something" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
