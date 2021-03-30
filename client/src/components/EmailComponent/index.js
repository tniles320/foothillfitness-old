import { useState } from "react";
import emailjs from "emailjs-com";
import "./style.css";

function EmailComponent(props) {
  const { subject } = props;
  const myServiceId = process.env.REACT_APP_SERVICE_ID;
  const myTemplate = process.env.REACT_APP_TEMPLATE;
  const myUserId = process.env.REACT_APP_USER_ID;
  const [emailInfo, setEmailInfo] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  const handleEmailSubmit = () => {
    if (
      emailInfo.name === "" ||
      emailInfo.email === "" ||
      emailInfo.body === ""
    ) {
      alert("Please fill out all fields");
    } else {
      emailjs.send(myServiceId, myTemplate, emailInfo, myUserId).then(
        (result) => {
          if (result.status === 200) {
            alert("Email Sent!");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  return (
    <div className="emailContainer">
      <label htmlFor="emailName">Name</label>
      <input
        id="emailName"
        placeholder="Name"
        type="text"
        onChange={(e) =>
          setEmailInfo({
            ...emailInfo,
            name: e.target.value,
            subject: `${e.target.value} has a question about ${subject}`,
          })
        }
      ></input>
      <label htmlFor="emailEmail">Email Address</label>
      <input
        id="emailEmail"
        placeholder="Email"
        type="email"
        onChange={(e) => setEmailInfo({ ...emailInfo, email: e.target.value })}
      ></input>
      <label htmlFor="emailBody">Message</label>
      <textarea
        id="emailBody"
        placeholder="Type your message here"
        onChange={(e) => setEmailInfo({ ...emailInfo, body: e.target.value })}
      ></textarea>
      <button className="emailButton" onClick={handleEmailSubmit}>
        Send Message
      </button>
    </div>
  );
}

export default EmailComponent;
