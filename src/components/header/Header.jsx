"use client";
import React from "react";
import styles from "@/components/Header/Header.module.css";
import { useSelectedLayoutSegment } from "next/navigation";

const Header = () => {
  const segment = useSelectedLayoutSegment()
  console.log(segment)
  return (
    <div className={styles.container}>
      {/* {props && (<div>title</div>)} */}
    </div>
  );
};

export default Header;
