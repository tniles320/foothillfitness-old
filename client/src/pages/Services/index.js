import Nav from "../../components/Nav";

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
  return (
    <div>
      <Nav />
      <div id="serviceListContainer">
        {serviceList.map((service, index) => {
          return (
            <div className="serviceContent" key={index}>
              <h3 className="serviceHeader">{service.header}</h3>
              <div className="serviceBody">{service.body}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
