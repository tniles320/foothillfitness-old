import Nav from "../../components/Nav";
import EmailComponent from "../../components/EmailComponent";
import Footer from "../../components/Footer";
import aboutImage from "../../images/Over-Project3.png";
import "./style.css";

const aboutList = [
  {
    header: "Commercial and Residential Equipment",
    body:
      "With over 25 years of fitness expertise, Foothill Fitness Equipment is your one stop shop for any of your fitness needs. Our goal is to provide quality fitness equipment and services and we offer delivery and set-up in your designated area.",
  },
  {
    header: "To Our Customer",
    body:
      "Please feel free to contact us for the right fitness equipment that fits your needs. We also repair and service equipment. Our technician will talk to you and try to help you diagnose your equipment over the phone.",
  },
  {
    header: "Service and Repair",
    body:
      "Our technician is licensed and insured. Please contact us for a service or repair on your fitness equipment. We would love to help you.",
  },
];

function About() {
  return (
    <div>
      <Nav />
      <div className="aboutContainer">
        <div className="aboutTextContainer">
          <div className="aboutListContainer">
            {aboutList.map((content, index) => {
              return (
                <div className="aboutContent" key={index}>
                  <h3 className="aboutHeader">{content.header}</h3>
                  <div className="aboutBody">{content.body}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="aboutImageContainer">
          <img src={aboutImage} alt="kettlebells" className="aboutImage" />
          <div className="aboutEmailContainer">
            <div className="aboutEmailHeader">
              Have a question for our staff? <br />
              Send us an email below
            </div>
            <EmailComponent subject="something" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
