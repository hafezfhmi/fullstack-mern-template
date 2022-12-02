import React from "react";

import { useField } from "../hooks/index";
import { UseUserContext } from "../context/userContext";

const LoginForm = () => {
  const email = useField("email", "email");
  const password = useField("password", "password");

  const login = UseUserContext().login;

  const handleReset = () => {
    email.reset();
    password.reset();
  };

  let handleLogin = async (event) => {
    event.preventDefault();

    try {
      login(email.attributes.value, password.attributes.value);
      handleReset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="email">Email: </label>
        <input {...email.attributes} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input {...password.attributes} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
