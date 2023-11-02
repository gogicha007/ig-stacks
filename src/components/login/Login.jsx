"use client";
import React, { useRef } from "react";
import Link from "next/link";
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
      router.push(props.callbackUrl ?? "/");
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <label htmlFor="userName">მომხმარებელი</label>
      <input
        type="text"
        id="userName"
        name="userName"
        onChange={(e) => (userName.current = e.target.value)}
      />
      <label htmlFor="userPass">პაროლი</label>
      <input
        type="password"
        id="userPass"
        name="userPass"
        autoComplete="new-password"
        onChange={(e) => (userPass.current = e.target.value)}
      />
      <div className={styles.controls}>
        <button type="submit">ავტორიზაცია</button>
        <button type="button">
          <Link href={"/"}>გაუქმება</Link>
        </button>
      </div>
    </form>
  );
};

export default Login;
