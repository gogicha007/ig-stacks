"use client";
import React from "react";
import styles from "./Header.module.css";
import data from "../../dictionaries/sidebar.json";
import { useSelectedLayoutSegment } from "next/navigation";

const Header = () => {
  const segment = useSelectedLayoutSegment();
  const title = data.find(
    (e) => segment === (e.url.substring(1) === "" ? null : e.url.substring(1))
  )?.title;
  return (
    <div className={styles.container}>
      {title && (
        <div className={styles.title}>
          <h1>{title}</h1>
        </div>
      )}
    </div>
  );
};

export default Header;
