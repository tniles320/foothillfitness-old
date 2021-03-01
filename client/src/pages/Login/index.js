import React, { useContext, useState, useEffect } from "react";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import UserContext from "../../utils/UserContext";
import AUTH from "../../utils/AUTH";

function Login() {
  const handleLogin = () => {};

  const handleRegister = () => {};

  return (
    <div>
      <LoginForm />
      <RegisterForm />
    </div>
  );
}

export default Login;
