import { useState } from "react";
import { Link } from "react-router-dom";

function AdminLogin(props) {
  const { handleAdminLogin, handleLogout } = props;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // const userData = { email: "tniles320@gmail.com", password: "password" };
  // const register = () => {
  //   console.log(userData);
  //   ADMIN.register(userData).then((res) => {
  //     console.log(res);
  //   });
  // };

  // useEffect(() => {
  //   register();
  // }, []);
  const LogoutButton = () => {
    return (
      <Link to="/admin/login" className="logout" onClick={handleLogout}>
        Logout
      </Link>
    );
  };

  return (
    <div className="loginContainer">
      <form
        className="loginForm"
        onSubmit={(e) => handleAdminLogin(user.email, user.password, e)}
      >
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></input>
        <Link
          to="/admin"
          className="loginButton"
          onClick={(e) => handleAdminLogin(user.email, user.password, e)}
        >
          Login
        </Link>
      </form>
      <LogoutButton />
    </div>
  );
}

export default AdminLogin;
