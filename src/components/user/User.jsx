"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import styles from "./user.module.css";
import { roles } from "@/helpers/constants";

const authIcons = {
  menu: "/images/menu.svg",
  login: "/images/login1.svg",
  logout: "/images/logout1.svg",
};

const User = () => {
  const [userRole, setUserRole] = useState("unauth");
  const [userName, setUserName] = useState("სახელი გვარი");
  const [initials, setInitials] = useState("სგ");
  const [userEmail, setUserEmail] = useState("ელ. ფოსტა");
  const router = useRouter();
  const { data, status } = useSession();

  useEffect(() => {
    if (data) {
      setUserName(data.user.name);
      setUserEmail(data.user.email);
      setUserRole(data.user.role);
      changeInitials(data.user.name);

    } else {
      setUserName("სახელი, გვარი");
      setUserEmail("ელ. ფოსტა");
      setInitials("სგ");
      setUserRole("unauth");
    }
    console.log(userRole);
    console.log(roles[0][userRole]);
  }, [status]);

  const changeInitials = (name = userName) => {
    const letters = name.split(" ").reduce((acc, val) => {
      return (acc += val[0]);
    }, "");
    setInitials(letters);
  };

  const handleLogin = async () => {
    if (status === "authenticated") {
      await signOut();
    } else {
      router.push("/api/auth/signin");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.avatar} style={{ backgroundColor: roles[0][userRole] }}>
          <p>{initials}</p>
        </div>
        <p>{userName}</p>
        <p>{userEmail}</p>
      </div>
      <div className={styles.controls}>
        <button type="button" onClick={handleLogin} className={styles.authBtn}>
          <Image
            src={
              status === "authenticated" ? authIcons.logout : authIcons.login
            }
            width={30}
            height={30}
            alt="auth image"
          />
        </button>
        <button
          type="button"
          onClick={() => console.log("menu")}
          className={styles.authBtn}
        >
          <Image src={authIcons.menu} width={30} height={30} alt="menu icon" />
        </button>
      </div>
    </div>
  );
};

export default User;
