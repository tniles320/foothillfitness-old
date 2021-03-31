import Nav from "../../components/Nav";
import serviceImage from "../../images/Over-Project2.png";
import EmailComponent from "../../components/EmailComponent";
import Footer from "../../components/Footer";
import "./style.css";

const serviceList = [
  {
    header: "Service and Maintenance",
    body: (
      <>
        We specialize in service and maintenance, serving residential customers
        and commercial accounts including but not limited to:
        <br />
        <ul>
          <li>Apartment Complexes</li>
          <li>Police Departments</li>
          <li>Fire Departments</li>
          <li>Schools</li>
        </ul>
      </>
    ),
  },
  {
    header: "Repair",
    body:
      "We have been providing professional, on-site repairs of fitness equipment for over 30 years.",
  },
  {
    header: "Equipment Relocation",
    body:
      "Professional fitness movers will disassemble your machine(s), move it to a new location, and assemble it back to its original state.",
  },
  {
    header: "Delivery and Installation",
    body: "We offer delivery and installation on purchased equipment",
  },
  {
    header: "Warranties",
    body: (
      <>
        All of our equipment comes with manufacture warranties.
        <br />
        Extended warranties may be available on select products.
      </>
    ),
  },
];

function Services() {
  const handlePhone = (phone) => {
    window.open(`tel:+1${phone}`);
  };

  const phone1 = "6263352773";
  const phone2 = "6262152656";

  return (
    <div>
      <Nav />
      <div className="servicePageContainer">
        <div className="serviceListContainer">
          {serviceList.map((service, index) => {
            return (
              <div className="serviceContent" key={index}>
                <h3 className="serviceHeader">{service.header}</h3>
                <div className="serviceBody">{service.body}</div>
              </div>
            );
          })}
        </div>
        <div className="serviceImageContainer">
          <img
            src={serviceImage}
            alt="gym equipment"
            className="servicePageImage"
          />
          <div className="serviceEmailHeader">
            Have a question about a specific service?
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
          <EmailComponent subject="Services and Repair" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
