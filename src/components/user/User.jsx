"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import styles from "./user.module.css";

const authIcons = {
  menu: "/images/menu.svg",
  login: "/images/login1.svg",
  logout: "/images/logout1.svg",
};

const User = () => {
  const currentPath = usePathname();
  const [userName, setUserName] = useState("სახელი, გვარი");
  const [userEmail, setUserEmail] = useState("ელ. ფოსტა");
  const router = useRouter();
  const { data, status } = useSession();

  useEffect(() => {
    if (data) {
      console.log(data)
      setUserName(data.user.name);
      setUserEmail(data.user.email);
    } else {
      setUserName("სახელი, გვარი");
      setUserEmail("ელ. ფოსტა");
    }
  }, [status]);

  const handleLogin = async () => {
    if (status === "authenticated") {
      await signOut();
    } else {
      router.push('/api/auth/signin');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.photo}>
          <Image
            src="/images/profile.png"
            width={60}
            height={60}
            alt="profile pic"
          />
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
