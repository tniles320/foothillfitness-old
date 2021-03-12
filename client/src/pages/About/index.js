import Nav from "../../components/Nav";

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
      <h1 id="aboutHeadline">About Us</h1>
      <div id="aboutListContainer">
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
  );
}

export default About;
