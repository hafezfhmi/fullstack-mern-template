import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../Button";
import ErrorModal from "../ErrorModal";
import styles from "./loginForm.module.css";

import { useField, useError } from "../../hooks/index";
import { UseUserContext } from "../../context/userContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const email = useField("email", "email");
  const password = useField("password", "password");
  const error = useError();

  const login = UseUserContext().login;

  let handleLogin = async (event) => {
    event.preventDefault();

    try {
      await login(email.attributes.value, password.attributes.value);
      navigate("/");
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
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <h1>Log in</h1>
        <div className={styles.inputWrapper}>
          <label htmlFor="email">Email: </label>
          <input {...email.attributes} />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="password">Password: </label>
          <input {...password.attributes} />
        </div>
        <Button
          label="Log in"
          style={{ "margin-top": "1.2rem", width: "100%" }}
        />
        <div className={styles.extraWrapper}>
          <Link to={"/forgot-password"}>Forgot Password</Link>
          <p>
            Don't have an account? <Link to={"/signup"}>Sign up</Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
