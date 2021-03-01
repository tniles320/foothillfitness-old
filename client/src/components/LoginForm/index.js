import { useState } from "react";
import AUTH from "../../utils/AUTH";

function LoginForm() {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    AUTH.login(userLogin.email, userLogin.password)
      .then((res) => {
        console.log(res.data.user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="loginInput"
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) =>
            setUserLogin({ ...userLogin, email: e.target.value })
          }
        />
        <input
          className="loginInput"
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) =>
            setUserLogin({ ...userLogin, password: e.target.value })
          }
        />
        <button className="loginBtn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
