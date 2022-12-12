import React from "react";
import LoginForm from "../components/LoginForm";
import styles from "../styles/login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <LoginForm />
    </div>
  );
};

export default Login;
