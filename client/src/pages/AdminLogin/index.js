import { useState, useContext, useEffect } from "react";
import ADMIN from "../../utils/ADMIN";
import API from "../../utils/API";
import "./style.css";

function AdminLogin(props) {
  const { handleAdminLogin } = props;
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  // const userData = { username: "janinefitness@msn.com", password: "password" };
  // const register = () => {
  //   console.log(userData);
  //   ADMIN.register(userData).then((res) => {
  //     console.log(res);
  //   });
  //   API.addFeatured({
  //     headline: "Test",
  //     description: "Test",
  //     link: "",
  //     image: "1617072507655-Over-Project1.png",
  //   }).then((res) => {
  //     if (res.status === 422) {
  //       console.log(res);
  //       alert("Error adding content");
  //     } else {
  //       alert("Featured Content added successfully!");
  //     }
  //   });
  // };

  // useEffect(() => {
  //   register();
  // }, []);

  return (
    <div className="loginContainer">
      <form
        className="loginForm"
        onSubmit={(e) => handleAdminLogin(user.username, user.password, e)}
      >
        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setUser({ ...user, username: e.target.value.toLowerCase() })
          }
        ></input>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></input>
        <button
          className="loginButton"
          onClick={(e) => handleAdminLogin(user.username, user.password, e)}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
