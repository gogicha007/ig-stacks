"use client";
import React from "react";
import styles from "@/components/user/user.module.css";
import Image from "next/image";

const outhIcons = {
  login: "/images/login1.svg",
  logout: "/images/logout1.svg",
};

const User = () => {
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
          onClick={() => console.log("authorize")}
          className={styles.authBtn}
        >
          <Image
            src={outhIcons.login}
            width={30}
            height={30}
            alt="auth image"
          />
        </button>
      </div>
    </div>
  );
};

export default User;
