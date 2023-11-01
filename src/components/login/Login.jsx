"use client";
import React, { useRef } from "react";
import styles from "./Login.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = (props) => {
  const router = useRouter();
  const userName = useRef("");
  const userPass = useRef("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username: userName.current,
      password: userPass.current,
      redirect: false,
    });
    if (!res?.error) {
        console.log(props.callbackUrl)
        router.push(props.callbackUrl ?? "/")
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <label for="userName">მომხმარებელი</label>
      <input
        type="text"
        id="userName"
        name="userName"
        onChange={(e) => (userName.current = e.target.value)}
      />
      <label for="userPass">პაროლი</label>
      <input
        type="text"
        id="userPass"
        name="userPass"
        onChange={(e) => (userPass.current = e.target.value)}
      />
      <button type="submit">
        ავტორიზაცია
      </button>
    </form>
  );
};

export default Login;
