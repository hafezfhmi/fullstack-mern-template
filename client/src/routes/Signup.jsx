import React from "react";
import SignupForm from "../components/SignupForm";
import styles from "../styles/signup.module.css";

const Signup = () => {
  return (
    <div className={styles.signup}>
      <SignupForm />
    </div>
  );
};

export default Signup;
