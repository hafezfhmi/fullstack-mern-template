import React from "react";

import { useField } from "../hooks/index";
import authServices from "../services/auth";

const SignupForm = () => {
  const username = useField("text", "username");
  const firstName = useField("text", "firstName");
  const lastName = useField("text", "lastName");
  const email = useField("email", "email");
  const password = useField("password", "password");
  const confirmPassword = useField("password", "confirmPassword");

  const handleReset = () => {
    username.reset();
    firstName.reset();
    lastName.reset();
    email.reset();
    password.reset();
    confirmPassword.reset();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await authServices.signup(
        username.attributes.value,
        firstName.attributes.value,
        lastName.attributes.value,
        email.attributes.value,
        password.attributes.value,
        confirmPassword.attributes.value
      );

      handleReset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup</h1>
      <div>
        <label htmlFor="username">Username: </label>
        <input {...username.attributes} />
      </div>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input {...firstName.attributes} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input {...lastName.attributes} />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input {...email.attributes} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input {...password.attributes} />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input {...confirmPassword.attributes} />
      </div>

      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
