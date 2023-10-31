"use client";
import React, { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import styles from "./user.module.css";

const outhIcons = {
  menu: "/images/menu.svg",
  login: "/images/login1.svg",
  logout: "/images/logout1.svg",
};

const User = () => {
  const [isLogged, setIsLogged] = useState(false);
  const { data } = useSession();

  useEffect(() => {
    setIsLogged(data !== null)
  }, [data]);

  useEffect(()=>{
    console.log("isLogged:" + isLogged)
    console.log(data?.user?.name)
  }, [isLogged])

  const handleLogin = async () => {
    if (isLogged) {
      console.log("logged");
      await signOut();
      // setIsLogged(false)
    }
    else {
      console.log("not logged")
      // setIsLogged(true)
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
        <p>ემზარ ჯუღელი</p>
        <p>emzo@jugeli.ge</p>
      </div>
      <div className={styles.controls}>
        <button
          type="button"
          onClick={handleLogin}
          className={styles.authBtn}
        >
          <Image
            src={outhIcons.logout}
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
          <Image src={outhIcons.menu} width={30} height={30} alt="menu icon" />
        </button>
      </div>
    </div>
  );
};

export default User;
