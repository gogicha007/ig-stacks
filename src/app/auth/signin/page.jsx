import React from "react";
import Login from "../../../components/login/Login";
import styles from "./page.module.css";

const SignIn = () => {
  return (
    <div className={styles.container}>
      <Login />
    </div>
  );
};

export default SignIn;
