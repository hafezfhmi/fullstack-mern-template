import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../Button";
import ErrorModal from "../ErrorModal";
import styles from "./signupForm.module.css";

import { useField, useError } from "../../hooks/index";
import authServices from "../../services/auth";

const SignupForm = () => {
  const navigate = useNavigate();
  const firstName = useField("text", "firstName");
  const lastName = useField("text", "lastName");
  const username = useField("text", "username");
  const email = useField("email", "email");
  const password = useField("password", "password");
  const confirmPassword = useField("password", "confirmPassword");
  const error = useError();

  let handleSignup = async (event) => {
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
      navigate("/signup-validation");
    } catch (err) {
      error.handleError(true, err.response.data.error);
    }
  };

  return (
    <>
      {error.error && (
        <ErrorModal
          errorMsg={error.errorMsg}
          disableError={error.disableError}
        />
      )}
      <form className={styles.authForm} onSubmit={handleSignup}>
        <h1>Sign up</h1>
        <div className={styles.nameWrapper}>
          <div className={styles.inputWrapper}>
            <label htmlFor="firstName">First name: </label>
            <input {...firstName.attributes} />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="lastName">Last name: </label>
            <input {...lastName.attributes} />
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="username">Username: </label>
          <input {...username.attributes} />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="email">Email: </label>
          <input {...email.attributes} />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="password">Password: </label>
          <input {...password.attributes} />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="confirmPassword">Confirm password: </label>
          <input {...confirmPassword.attributes} />
        </div>
        <Button
          label="Sign up"
          style={{ "margin-top": "1.2rem", width: "100%" }}
        />
        <div className={styles.extraWrapper}>
          <p>
            Have an account? <Link to={"/login"}>Log in</Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default SignupForm;
